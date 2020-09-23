from django.db import models

class Gear(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=500)
    brand = models.CharField(max_length=128)
    weight_grams = models.IntegerField(blank=True)