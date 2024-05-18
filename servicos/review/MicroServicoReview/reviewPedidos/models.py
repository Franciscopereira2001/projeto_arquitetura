from django.db import models

# Create your models here.
class Review(models.Model):
    order_id = models.IntegerField(primary_key=True)
    user_id = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    parking_order_available = models.BooleanField()
    comment_review = models.TextField()
    
    def __str__(self):
        return str(self.order_id)
    
class Comment(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE, unique=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()    
    
    
class Utilizador(models.Model):
    email = models.EmailField(unique=True)
    password = models.TextField()
    primeiro_nome = models.TextField()
    ultimo_nome = models.TextField()
    imagem = models.BinaryField(null=True)