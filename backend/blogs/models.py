from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from django.contrib.postgres.fields import ArrayField

DEFAULT_PROFILE_PIC="https://res.cloudinary.com/hzrmzkuce/image/upload/v1/media/profile-pics/default_b1yap4"


# Creating my User table
# Starting with the create User function
class CustomUserManager(BaseUserManager):
    def _create_user(self,email,password,username,picture_url):
        if not email:
            raise ValueError("Email must be provided")
        if not password:
            raise ValueError("Password must be provided")
        user = self.model(
            email=self.normalize_email(email),
            username= username,
            picture_url = picture_url
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

# The simple User model
class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    picture_url = models.ImageField(upload_to="media/profile-pics/",default=DEFAULT_PROFILE_PIC, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["username"]

    objects=CustomUserManager()

    def __str__(self):
        return self.username
    

# My Blogs table
class Blogs(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    tags=ArrayField(models.CharField(max_length=25))
    title=models.CharField(max_length=100,default="")
    content = models.TextField()
    picture_url=models.ImageField(upload_to="media/blog-pic/",blank=True)
    date_updated=models.DateTimeField(auto_now=True)

class Comments(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    blog=models.ForeignKey(Blogs,on_delete=models.CASCADE)
    message=models.CharField(max_length=255)
    date_created=models.DateTimeField(auto_now_add=True)