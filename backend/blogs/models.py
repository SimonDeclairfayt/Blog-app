from django.db import models

# Create your models here.
class Blogs(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)