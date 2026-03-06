from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('/',admin.site)
    path('api/', include('patients.urls')),
]