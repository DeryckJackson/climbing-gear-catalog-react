from rest_framework import serializers
from gear.models import Gear

#Gear Serializer
class GearSerializer(serializers.ModelSerializer):
  class Meta:
    model = Gear
    fields = '__all__' 