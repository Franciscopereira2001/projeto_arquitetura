from django.contrib import admin
from .models import Review, Comment, Utilizador

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'user_id', 'timestamp', 'parking_order_available')
    list_filter = ('parking_order_available', 'timestamp')
    search_fields = ('order_id', 'user_id')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('review', 'timestamp', 'comment')
    list_filter = ('timestamp',)
    search_fields = ('review__order_id',)

@admin.register(Utilizador)
class UtilizadorAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'password', 'primeiro_nome', 'ultimo_nome')
    search_fields = ('id', 'email', 'password', 'primeiro_nome', 'ultimo_nome')