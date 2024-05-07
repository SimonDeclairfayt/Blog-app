from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password
# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self,email,username,picture_url,password=None):
        if not email:
            raise ValueError('Users need an email to create an account')
        if not username:
            raise ValueError('Users need an username to create an account')
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            picture_url=picture_url,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255,unique=True)
    password = models.CharField(max_length=255)
    picture_url = models.TextField(default="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.username + "," + self.email

