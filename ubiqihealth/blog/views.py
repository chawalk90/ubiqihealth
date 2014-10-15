from future.builtins import str
from future.builtins import int
from calendar import month_name

from django.http import Http404
from django.shortcuts import get_object_or_404

from mezzanine.blog.models import BlogPost, BlogCategory
from mezzanine.conf import settings
from mezzanine.generic.models import Keyword
from mezzanine.utils.views import render
from mezzanine.utils.models import get_user_model


User = get_user_model()


def blog_post_list(request, tag=None, year=None, month=None, username=None,
                   category=None, template="blog/blog_post_list.html",
                   page_template='blog/blog_posts_page.html'):
    """
    Customized Mezzanine blog_post_list view to work with infinite scroll
    """

    settings.use_editable()
    templates = []
    blog_posts = BlogPost.objects.published(for_user=request.user)
    if tag is not None:
        tag = get_object_or_404(Keyword, slug=tag)
        blog_posts = blog_posts.filter(keywords__keyword=tag)
    if year is not None:
        blog_posts = blog_posts.filter(publish_date__year=year)
        if month is not None:
            blog_posts = blog_posts.filter(publish_date__month=month)
            try:
                month = month_name[int(month)]
            except IndexError:
                raise Http404()
    if category is not None:
        category = get_object_or_404(BlogCategory, slug=category)
        blog_posts = blog_posts.filter(categories=category)
        templates.append(u"blog/blog_post_list_%s.html" %
                          str(category.slug))
    author = None
    if username is not None:
        author = get_object_or_404(User, username=username)
        blog_posts = blog_posts.filter(user=author)
        templates.append(u"blog/blog_post_list_%s.html" % username)

    prefetch = ("categories", "keywords__keyword")
    blog_posts = blog_posts.select_related("user").prefetch_related(*prefetch)

    context = {"blog_posts": blog_posts, "year": year, "month": month,
               "tag": tag, "category": category, "author": author,
               "page_template": page_template}

    if request.is_ajax():
        template = page_template
    templates.append(template)

    return render(request, templates, context)
