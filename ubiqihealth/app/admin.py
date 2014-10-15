from django.contrib import admin

from mezzanine.pages.admin import PageAdmin

from .models import Job, JobsPage, Press, PressPage


admin.site.register(JobsPage, PageAdmin)
admin.site.register(Job)

admin.site.register(PressPage, PageAdmin)
admin.site.register(Press)
