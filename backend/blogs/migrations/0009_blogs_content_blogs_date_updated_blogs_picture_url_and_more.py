# Generated by Django 5.0.6 on 2024-05-15 08:04

import django.contrib.postgres.fields
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0008_alter_user_picture_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogs',
            name='content',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='blogs',
            name='date_updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='blogs',
            name='picture_url',
            field=models.ImageField(blank=True, upload_to='media/blog-pic/'),
        ),
        migrations.AddField(
            model_name='blogs',
            name='tags',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=25), default="{}", size=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='blogs',
            name='title',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='blogs',
            name='user',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='BlogContent',
        ),
    ]
