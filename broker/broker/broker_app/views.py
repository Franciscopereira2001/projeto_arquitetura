from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import requests
from django.http import JsonResponse

def redirecionar_pedido(request, url):
    # Extract data and headers from the incoming request
    data = request.body
    headers = request.headers

    if request.method == 'POST':
        # Make a POST request to the target server
        response = requests.post(f"{url}/", data=data, headers=headers)
    elif request.method == 'GET':
        response = requests.get(url, data=data, headers=headers)
    else:
        return HttpResponse(status=404)

    # Return the response from the target server
    try:
        return JsonResponse(response.json(), status=response.status_code)
    except:
        return HttpResponse(response,status=response.status_code)

   

@csrf_exempt
def auth_login(request):
    return redirecionar_pedido(request, 'http://autenticacao_nodejs_db:3000/auth/login')

@csrf_exempt
def auth_logout(request):
    return redirecionar_pedido(request, 'http://autenticacao_nodejs_db:3000/auth/logout')

@csrf_exempt
def auth_is_authentication(request):
    return redirecionar_pedido(request, 'http://autenticacao_nodejs_db:3000/auth/is-authentication')

@csrf_exempt
def auth_is_authorization(request):
    return redirecionar_pedido(request, 'http://autenticacao_nodejs_db:3000/auth/is-authorization')
   
@csrf_exempt
def review_comments(request):
    return redirecionar_pedido(request, 'http://review:8000/api/Comment')

@csrf_exempt
def review_reviews(request):
    return redirecionar_pedido(request, 'http://review:8000/api/Review')