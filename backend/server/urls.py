from django.urls import re_path,path
from blogs import views

urlpatterns = [
    path('',views.home),
    path('blog',views.postBlog),
    path('blog/<int:pk>/comment',views.postComment),
    path('blog/<int:pk>',views.singleBlog, name='Blog Detail'),
    path('blog/<int:pk>/delete',views.removeBlog, name='Remove Blog'),
    path('blog/<int:pk>/update',views.updateBlog, name='Update Blog'),
    path('user',views.getUserInfo),
    path('user/patch',views.patchUserInfo),
    re_path('login', views.login),
    re_path('register',views.signUp)
]
