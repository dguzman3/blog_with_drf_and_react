from django.db.models import fields
from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%d-%m-%Y %H:%M")

    class Meta:
        model = Post
        fields = '__all__'
