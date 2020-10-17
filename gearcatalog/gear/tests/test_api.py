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
        self.json_gear = GearSerializer(Gear(id=3, name='JsonGear', desc='Jsongear', brand='serial', weight_grams=1,
                                             length_mm=1, width_mm=1, depth_mm=1, locking=False, owner=self.user))
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_get_all_gear(self):
        # get request test for all gear
        request = self.client.get(reverse('gear-list'))
        gear = Gear.objects.all()
        serializer = GearSerializer(gear, many=True)
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(request.data, serializer.data)

    def test_get_valid_gear_piece(self):
        # get request for valid gear piece
        request = self.client.get(reverse('gear-detail', args=[1]))
        gear = Gear.objects.get(id=1)
        serializer = GearSerializer(gear)
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(request.data, serializer.data)

    def test_get_invalid_gear_piece(self):
        # get request for invalid gear piece
        request = self.client.get(reverse('gear-detail', args=[69420]))  # Nice
        self.assertEqual(request.status_code, status.HTTP_404_NOT_FOUND)

    def test_post_gear_piece(self):
        request = self.client.post(reverse('gear-list'),
                                   data=json.dumps(self.json_gear.data),
                                   content_type='application/json')
        self.assertEqual(request.status_code, status.HTTP_201_CREATED)
        self.assertEqual(request.data, self.json_gear.data)

    def test_put_gear_piece(self):
        request = self.client.put(
            reverse('gear-detail', args=[1]),
            data=json.dumps(
                {'name': 'PutCam', 'desc': 'Putdesc', 'brand': 'PutBrand'}),
            content_type='application/json')
        serializer = GearSerializer(
            Gear(id=1, name='PutCam', desc='Putdesc', brand='PutBrand', weight_grams='1', length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=self.user))
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(request.data, serializer.data)

    def test_patch_gear_piece(self):
        request = self.client.patch(
            reverse('gear-detail', args=[1]),
            data=json.dumps({'name': 'PatchedCam', }),
            content_type='application/json')
        serializer = GearSerializer(Gear(id=1, name='PatchedCam', desc='A cam', brand='OnlyCams',
                                         weight_grams='1', length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=self.user))
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        self.assertEqual(request.data, serializer.data)

    def test_delete_gear_piece(self):
        request = self.client.delete(reverse('gear-detail', args=[1]))
        self.assertEqual(request.status_code, status.HTTP_204_NO_CONTENT)
