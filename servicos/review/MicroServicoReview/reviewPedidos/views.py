from django.shortcuts import render
from reviewPedidos.serializers import *
from rest_framework import permissions, viewsets

from rest_framework.permissions import AllowAny

# Create your views here.
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all().order_by('-timestamp')
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]
    
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]    
    
class UtilizadorViewSet(viewsets.ModelViewSet):
    queryset = Utilizador.objects.all()
    serializer_class = UtilizadorSerializer
    permission_classes = [AllowAny]   