from django.contrib import admin
from .models import Patient

admin.site.register(Patient)
admin.site.site_header = "Django administration"
admin.site.site_title = "Django site admin"
admin.site.index_title = "Site administration"