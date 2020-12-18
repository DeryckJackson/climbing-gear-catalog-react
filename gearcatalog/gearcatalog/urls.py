from django.contrib import admin # pylint: disable=unused-import
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('gear.urls',)),
    path('', include('accounts.urls'))
]
