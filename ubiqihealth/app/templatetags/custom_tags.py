from itertools import groupby
from datetime import date
from operator import itemgetter

from django.db.models import Count

from mezzanine.blog.models import BlogPost, BlogCategory
from mezzanine import template


register = template.Library()


@register.as_tag
def all_categories(*args):
    """
    Put a list of categories for blog posts into the template context.
    """
    categories = BlogCategory.objects.all()
    return list(categories.annotate(post_count=Count("blogposts")))


@register.as_tag
def all_months(*args):
    """
    Put a list of dates for blog posts into the template context.
    """
    posts = BlogPost.objects.published().filter()
    get_month = lambda p: date(p.publish_date.year, p.publish_date.month, 1)
    posts_by_mounths = [(g, list(v)) for g, v in groupby(posts, get_month)]
    return fill_empty_months(posts_by_mounths)


def fill_empty_months(grouped_posts):
    today = date.today()
    first_month = grouped_posts[-1][0].replace(month=1) if grouped_posts \
                  else date(today.year, 1, 1)
    last_month = date(today.year, today.month, 1)
    posts_in_month = dict(grouped_posts)

    month = first_month
    while month <= last_month:
        posts_in_month[month] = posts_in_month.get(month, [])
        month = increment_month(month)

    return sorted(posts_in_month.items(), key=itemgetter(0), reverse=True)


def increment_month(initial_date):
    year = initial_date.year + initial_date.month / 12
    month = initial_date.month % 12 + 1
    return date(year, month, initial_date.day)
