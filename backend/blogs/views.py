from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer,BlogSerializer, CommentSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import User, Blogs, Comments

# LOGIN VIEW
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({"detail":"Not found"},status=status.HTTP_404_NOT_FOUND)
    token,created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token":token.key,"user": serializer.data})

#SIGN UP VIEW
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

#GET USER INFO
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def getUserInfo(request):
    user = get_object_or_404(User, id=request.user.id)
    serializer= UserSerializer(user)
    return Response(serializer.data)

#MODIFY USERS INFO
@api_view(['PATCH'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def patchUserInfo(request):
    user=get_object_or_404(User, id=request.user.id)
    serializer=UserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Updated successfully","content":serializer.data})
    return Response({"message":"You don't have the right to delete that"})


#Get all blogs
@api_view(['GET'])
def home(request):
    blogs = Blogs.objects.all()
    serializer = BlogSerializer(blogs,many=True)
    return Response(serializer.data)

#Get a single blog
@api_view(['GET'])
def singleBlog(request,pk):
    blogs=get_object_or_404(Blogs, id=pk)
    serializer=BlogSerializer(blogs)
    comments = Comments.objects.filter(blog=pk)
    commentSerializer = CommentSerializer(comments, many=True)
    
    return Response([serializer.data,commentSerializer.data])

# update a blog
@api_view(['PATCH'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def updateBlog(request,pk):
    blogs=get_object_or_404(Blogs, id=pk)
    serializer=BlogSerializer(blogs, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Updated successfully","content":serializer.data})
    return Response({"message":"You don't have the right to delete that"})


# DELETE A BLOG
@api_view(['DELETE'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def removeBlog(request,pk):
    blogs=get_object_or_404(Blogs, id=pk)
    serializer=BlogSerializer(blogs)
    if(serializer.data['user'] == request.user.id):
        blogs.delete()
        return Response({"message":"Deleted successfully"})
    return Response({"message":"You don't have the right to delete that"})

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

#POST A COMMENT
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def postComment(request,pk):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.validated_data['user_id']=request.user.id
        serializer.validated_data['blog_id']=pk
        serializer.save()
        return Response(serializer.data,status=201)
    return Response(serializer.errors,status=400)
    