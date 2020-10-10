from django.test import TestCase
from gear.models import Gear


class GearTest(TestCase):

    def setUp(self):
        Gear.objects.create(
            name='Cam', desc='A cam', brand='OnlyCams', weight_grams='1',
            length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=None
        )
        Gear.objects.create(
            name='Nut', desc='A Nut', brand='OnlyNuts', weight_grams='1',
            length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=None
        )

    def test_gear_create(self):
        gear_cam = Gear.objects.get(name='Cam')
        gear_nut = Gear.objects.get(name='Nut')
        self.assertEquals(
            gear_cam,
            Gear(id=1, name='Cam', desc='A cam', brand='OnlyCams', weight_grams='1',
                 length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=None)
        )
        self.assertEquals(
            gear_nut,
            Gear(id=2, name='Nut', desc='A Nut', brand='OnlyNuts', weight_grams='1',
                 length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=None)
        )
