from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id','username','email','picture_url']