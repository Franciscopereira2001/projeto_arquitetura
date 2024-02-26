from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import requests
from django.http import JsonResponse

def redirecionar_pedido(request, url):
    if request.method == 'POST':
        # Extract data and headers from the incoming request
        data = request.body
        headers = dict(request.headers)

        # Make a POST request to the target server
        response = requests.post('http://autenticacao_nodejs_db:3000/auth/login/', data=data, headers=headers)

        # Return the response from the target server
        return JsonResponse(response.json(), status=response.status_code)

    # Handle other HTTP methods if necessary
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
    

@csrf_exempt
def auth_login(request):
    return redirecionar_pedido(request, 'http://autenticacao_nodejs_db:3000/auth/login/')