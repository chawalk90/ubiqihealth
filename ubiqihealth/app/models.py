from django.db import models

from mezzanine.pages.models import Page
from mezzanine.core.fields import RichTextField


class JobsPage(Page):
    pass

class Job(models.Model):
    jobs_page = models.ForeignKey(JobsPage, related_name="jobs")
    title = models.CharField("Job title", max_length=255)
    description = RichTextField("Description")

    def __unicode__(self):
        return self.title


class PressPage(Page):
    pass

class Press(models.Model):
    press_page = models.ForeignKey(PressPage, related_name="press")
    title = models.CharField("Press title", max_length=255)
    link = models.URLField("Press link", max_length=255)
    logo = models.ImageField("Press logo", upload_to="press")

    class Meta():
        verbose_name_plural = "press"

    def __unicode__(self):
        return self.title
