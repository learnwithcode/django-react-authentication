from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User,null=True, blank=True, on_delete=models.CASCADE)
    age = models.PositiveIntegerField()
    dob = models.DateTimeField()

    def __str__(self):
        return self.user.username
