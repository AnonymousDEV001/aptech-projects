from django.db import models

# Create your models here.


class user_model(models.Model):
    Name = models.CharField(max_length=100, null=True)
    Email = models.CharField(max_length=100, null=True)
    Password = models.CharField(max_length=200 ,null=True)
    CustomClaims = models.CharField(max_length=200, null=True)

    
class contact_model(models.Model):
    Name = models.CharField(max_length=100)
    Email = models.EmailField(max_length=100)
    Message = models.CharField(max_length=1000)

class uploadProducts_model(models.Model):
    Title = models.CharField(max_length=200, null=True)
    Description = models.CharField(max_length=500, null=True)
    ImageUrl = models.CharField(max_length=1000, null=True)
    Catagory = models.CharField(max_length=200, null=True)
    Specifications = models.CharField(max_length=5000, null=True)
    AdditionalFeatures = models.CharField(max_length=5000, null=True)

