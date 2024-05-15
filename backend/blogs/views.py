from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer,BlogSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import User, Blogs

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

#Get all blogs
@api_view(['GET'])
def home(request):
    blogs = Blogs.objects.all()
    serializer = BlogSerializer(blogs,many=True)
    return Response(serializer.data)


#Post a blog
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def postBlog(request):
    serializer = BlogSerializer(data=request.data,context={'request':request})
    if serializer.is_valid():
        serializer.validated_data['user_id']=request.user.id
        serializer.save()
        return Response(serializer.data,status=201)
    return Response(serializer.errors,status=400)