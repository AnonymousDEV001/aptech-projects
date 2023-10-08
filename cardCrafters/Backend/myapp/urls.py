from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('signin/', views.signin, name="signin"),
    path('contact/', views.contact, name="contact"),
    path('upload/', views.uploadProduct, name="uploadImgs"),
    path('getproducts/', views.getProducts, name="getproducts"),
    path('deleteproduct/', views.deleteProduct, name="deleteProduct"),
    path('updateproduct/', views.updateProduct, name="updateProduct"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
