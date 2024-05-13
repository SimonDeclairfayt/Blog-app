from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import User

# Create your views here.
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({"detail":"Not found"},status=status.HTTP_404_NOT_FOUND)
    token,created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token":token.key,"user": serializer.data})

@api_view(['POST'])
def signUp(request):
    serializer=UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user=User.objects.get(username=request.data['username'])
        user.set_password(request.data['password']);
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token":token.key,"user": serializer.data})
    return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST);

