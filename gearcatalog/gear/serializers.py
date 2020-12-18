from rest_framework import serializers
from gear.models import Gear


#Gear Serializer
class GearSerializer(serializers.ModelSerializer):
    """Gear Serializer class"""
    class Meta:
        """Meta Data"""
        model = Gear
        fields = '__all__'
