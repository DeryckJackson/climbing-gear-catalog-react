from gear.models import Gear
from rest_framework import viewsets, permissions
from .serializers import GearSerializer

# Gear Viewset
class GearViewSet(viewsets.ModelViewSet):
  queryset = Gear.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = GearSerializer
