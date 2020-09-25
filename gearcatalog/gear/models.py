from django.db import models

class Gear(models.Model):
    name = models.CharField(max_length=128)
    desc = models.CharField(max_length=500)
    brand = models.CharField(max_length=128)
    weight_grams = models.IntegerField(blank=True, null=True)
    length_mm = models.IntegerField(blank=True, null=True)
    width_mm = models.IntegerField(blank=True, null=True)
    depth_mm = models.IntegerField(blank=True, null=True)
    locking = models.BooleanField(default=False)