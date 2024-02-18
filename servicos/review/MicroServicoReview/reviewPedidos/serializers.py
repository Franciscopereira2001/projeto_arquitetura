from reviewPedidos.models import *
from rest_framework import serializers

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = ['order_id', 'user_id', 'timestamp', 'parking_order_available', 'comment_review']
        
class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['review', 'timestamp', 'comment']