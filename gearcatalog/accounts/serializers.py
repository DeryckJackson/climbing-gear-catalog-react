from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    """User Serializer"""
    class Meta:
        """Meta Data"""
        model = User
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    """Registers new User"""
    class Meta:
        """Meta Data"""
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """Creates new User and returns serialized User"""
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'],
            validated_data['password'])

        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    """Logins existing user after checking if credentials are valid"""
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        """Checks credentials then returns user or error"""
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
