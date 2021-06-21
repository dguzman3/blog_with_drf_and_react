from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=75)
    author = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now=True)
    body = models.TextField()
    preview = models.CharField(max_length=150, null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
