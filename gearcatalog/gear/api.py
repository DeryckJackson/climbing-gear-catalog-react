from gear.models import Gear # pylint: disable=unused-import
from rest_framework import viewsets, permissions
from .serializers import GearSerializer


# Gear Viewset
class GearViewSet(viewsets.ModelViewSet): # pylint: disable=too-many-ancestors
    """View class for Gear model"""
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = GearSerializer

    def get_queryset(self):
        return self.request.user.gear.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
