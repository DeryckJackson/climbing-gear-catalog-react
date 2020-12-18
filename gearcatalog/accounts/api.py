from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer


# Register API
class RegisterAPI(generics.GenericAPIView):
    """Class for registering accounts"""
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        """registers a new user"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context())
            .data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login API


class LoginAPI(generics.GenericAPIView):
    """Class for logging in"""
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        """logs the user in or rejects them based on credentials"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context())
            .data,
            "token": AuthToken.objects.create(user)[1]
        })

# Get User API


class UserAPI(generics.RetrieveAPIView):
    """Class for users"""
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        """gets the current logged in user"""
        return self.request.user
