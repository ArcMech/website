from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    post_image = serializers.ImageField(
        max_length=None, use_url = True)

    post_cover = serializers.ImageField(
    max_length=None, use_url = True)
    
    class Meta:
        model = Post
        fields = ('author', 'overview', 'title', 'timestamp', 'id', 'content', 'post_image', 'post_image_alt', 'post_cover_alt','post_cover', 'tags' )