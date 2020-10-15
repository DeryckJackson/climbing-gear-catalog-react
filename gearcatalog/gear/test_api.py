from django.urls import reverse
from django.contrib.auth.models import AnonymousUser, User
from gear.models import Gear
from gear.serializers import GearSerializer
from rest_framework import status
from rest_framework.test import APIClient, force_authenticate, APITestCase


class GearTest(APITestCase):
    def setUp(self):
        User.objects.create(id=1,
                            username='test', password='test1', email='test@test.com')
        self.user = User.objects.get(username='test')
        Gear.objects.create(
            id=1, name='Cam', desc='A cam', brand='OnlyCams', weight_grams='1',
            length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=self.user
        )
        Gear.objects.create(
            id=2, name='Nut', desc='A Nut', brand='OnlyNuts', weight_grams='1',
            length_mm='1', width_mm='1', depth_mm='1', locking=False, owner=self.user
        )
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_get_all_gear(self):
        # get request test for all gear
        response = self.client.get(reverse('gear-list'))
        gear = Gear.objects.all()
        serializer = GearSerializer(gear, many=True)
        print(response)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

        # request = self.factory.get('/gear/')
        # force_authenticate(request, user=user, token=user.auth_token)
        # response = gear_view(request)
        # json_data = [{'id': 1, 'name': 'Cam', 'desc': 'A cam', 'brand': 'OnlyCams', 'weight_grams': '1', 'length_mm': '1', 'width_mm': '1', 'depth_mm': '1', 'locking': false, 'owner': null}, {
        #     'id': 2, 'name': 'Nut', 'desc': 'A Nut', 'brand': 'OnlyNuts', 'weight_grams': '1', 'length_mm': '1', 'width_mm': '1', 'depth_mm': '1', 'locking': false, 'owner': null}]
        # self.assertEqual(response.data, json_response)
