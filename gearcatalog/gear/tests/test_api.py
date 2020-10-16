from django.urls import reverse
from django.contrib.auth.models import AnonymousUser, User
from gear.models import Gear
from gear.serializers import GearSerializer
from rest_framework import status
from rest_framework.test import APIClient, force_authenticate, APITestCase
import json


class GearTest(APITestCase):
    def setUp(self):
        User.objects.create(id=1, username='test',
                            password='test1', email='test@test.com')
        self.user = User.objects.get(username='test')
        self.cam = Gear.objects.create(
            id=1, name='Cam', desc='A cam', brand='OnlyCams', weight_grams='1',
            length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=self.user
        )
        self.nut = Gear.objects.create(
            id=2, name='Nut', desc='A Nut', brand='OnlyNuts', weight_grams='1',
            length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=self.user
        )
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_get_all_gear(self):
        # get request test for all gear
        request = self.client.get(reverse('gear-list'))
        gear = Gear.objects.all()
        serializer = GearSerializer(gear, many=True)
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(request.data, serializer.data)

    def test_get_valid_single_gear(self):
        # get request for valid gear piece
        request = self.client.get(reverse('gear-detail', args=[1]))
        gear = Gear.objects.get(id=1)
        serializer = GearSerializer(gear)
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(request.data, serializer.data)

    def test_get_invalid_single_gear(self):
        # get request for invalid gear piece
        request = self.client.get(reverse('gear-detail', args=[69420]))  # Nice
        self.assertEqual(request.status_code, status.HTTP_404_NOT_FOUND)

    def test_patch_gear_piece(self):
        request = self.client.patch(
            reverse('gear-detail', args=[1]),
            data=json.dumps({'name': 'EditedCam', }),
            content_type='application/json')
        edited_gear = GearSerializer(Gear(id=1, name='EditedCam', desc='A cam', brand='OnlyCams',
                                          weight_grams='1', length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=self.user))
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(request.data, edited_gear.data)

    def test_delete_gear_piece(self):
        request = self.client.delete(reverse('gear-detail', args=[1]))
        self.assertEqual(request.status_code, status.HTTP_204_NO_CONTENT)
