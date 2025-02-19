from django.db import models

class Letter(models.Model):
    content = models.TextField()
    font = models.CharField(max_length=50, default="Arial")
    font_size = models.IntegerField(default=12)
    color = models.CharField(max_length=20, default="#000000")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Letter {self.id}"