from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Letter
from .serializers import LetterSerializer

class LetterCreateView(generics.CreateAPIView):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer

class LetterRetrieveView(generics.RetrieveAPIView):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer
    lookup_field = 'id'

