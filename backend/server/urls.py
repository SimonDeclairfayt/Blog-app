from django.urls import re_path,path
from blogs import views

urlpatterns = [
    path('',views.home),
    path('blog',views.postBlog),
    re_path('login', views.login),
    re_path('register',views.signUp)
]
