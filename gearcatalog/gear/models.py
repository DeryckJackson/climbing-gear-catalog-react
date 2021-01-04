from django.db import models
from django.contrib.auth.models import User

class Gear(models.Model):
    """Gear model data fields"""
    name = models.CharField(max_length=128)
    qty = models.IntegerField(default=0)
    desc = models.CharField(max_length=500)
    brand = models.CharField(max_length=128)
    weight_grams = models.IntegerField(blank=True, null=True)
    length_mm = models.IntegerField(blank=True, null=True)
    width_mm = models.IntegerField(blank=True, null=True)
    depth_mm = models.IntegerField(blank=True, null=True)
    locking = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name="gear",
        on_delete=models.CASCADE,
        null=True)
