from django.db import models

class Gear(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=500)
    brand = models.CharField(max_length=128)
    weight_grams = models.IntegerField(blank=True)
    length_mm = models.IntegerField(blank=True)
    width_mm = models.IntegerField(blank=True)
    depth_mm = models.IntegerField(blank=True)
    locking = models.BooleanField()