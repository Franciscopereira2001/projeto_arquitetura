from django.shortcuts import render
from reviewPedidos.serializers import *
from rest_framework import permissions, viewsets

from rest_framework_api_key.permissions import HasAPIKey

# Create your views here.
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all().order_by('-timestamp')
    serializer_class = ReviewSerializer
    permission_classes = [HasAPIKey]
    
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [HasAPIKey]    