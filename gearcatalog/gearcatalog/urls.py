from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('gear.urls',)),
    path('', include('accounts.urls'))
]
