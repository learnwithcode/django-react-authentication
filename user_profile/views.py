
from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer

class ProfileUpdate(generics.UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer