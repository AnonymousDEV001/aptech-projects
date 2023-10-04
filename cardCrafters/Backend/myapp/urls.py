from django.urls import path,include
from . import views


urlpatterns = [
    path('', views.signin, name="index"),
    path('contact/', views.contact, name="contact"),
    path('upload/', views.uploadProduct, name="uploadImgs"),
    path('getproducts/', views.getProducts, name="getproducts"),
]
