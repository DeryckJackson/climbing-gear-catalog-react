from rest_framework import routers
from .api import GearViewSet

router = routers.DefaultRouter()
router.register('api/gear', GearViewSet, 'gear')

urlpatterns = router.urls
