from django.db import models


class Post(models.Model):
    timestamp = models.DateField(auto_now_add=True)
    title = models.CharField(max_length=50)
    overview = models.CharField(max_length = 300)
    content = models.TextField(default = "This post has no content yet.")
    author = models.CharField(max_length=30)
    id = models.AutoField(primary_key=True)
    post_image = models.ImageField()
    post_image_alt = models.CharField(max_length= 50, default = "post_image_alt")
    post_cover = models.ImageField()
    post_cover_alt = models.CharField(max_length= 50, default = "post_cover_alt")
    tags = models.CharField(max_length= 50, default = "Tags'n'stuff")

    def __str__(self):
        return self.title
