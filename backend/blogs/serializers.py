from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from .models import User,Blogs

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id','username','email','picture_url']

class CommaSeparatedCharField(serializers.CharField):
    def to_internal_value(self, value):
        if isinstance(value, str):
            return value.split(' ')
        return super().to_internal_value(value)
    
class BlogSerializer(serializers.ModelSerializer):
    tags = CommaSeparatedCharField()
    user = serializers.PrimaryKeyRelatedField(read_only=True)  # Show user details

    class Meta: 
        model = Blogs
        fields=['id','user','tags','title','content','picture_url']