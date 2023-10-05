from django.shortcuts import render
from django.http import HttpResponse 
import json
from django.http import JsonResponse
from .models import *
from django.conf import settings
from django.core import serializers
from django.core.mail import EmailMessage

# Create your views here.

def signin(request):
    if request.method == "GET":
        return HttpResponse("Nothing Here!")
    elif request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))

        user = user_model.objects.filter(Email=data['email'])
        if not user:
            return JsonResponse({"message":"Invalid Credentials"})
        if user[0].Password != data["password"]:
            return JsonResponse({"message":"Invalid Credentials"})

        return JsonResponse({'Sucess': "USER VERIFIED"})
        
def contact(request):
    if request.method == "GET":
        messages = list(contact_model.objects.values())

        print(messages)
        return JsonResponse(messages,safe=False)
    
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        if "Name" in data and "Email" in data and "Message" in data:
            if data["Name"] and data["Email"] and data["Message"]:
                contact_model.objects.create(Name = data['Name'], Email=data["Email"] , Message = data["Message"])
                subject = 'testing phase'

                message = f'<h4>Name :{data["Message"]}</h4><h4>Email :{data["Email"]}</h4><h4>Message :{data["Message"]}</h4>'
                email_from = data["Name"]
                recipient_list = ["forplayingcoc124@gmail.com"]
                email = EmailMessage( subject, message, email_from, recipient_list )
                email.content_subtype = "html"
                email.send()

                return JsonResponse({"Sucess":"Message Sucessfully Sent"})
        return JsonResponse({"Error":"Invalid arguments"})



def uploadProduct(request):
    if request.method == "GET":
        return render(request , "upload.html")
    
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))

        if data["Title"] and data["Description"] and data["ImageUrl"] and data["Catagory"] and data["Specifications"] and data["AdditionalFeatures"]:
            product = uploadProducts_model.objects.create(Title=data["Title"], Description = data["Description"] , ImageUrl = data["ImageUrl"] , Catagory=data["Catagory"],Specifications=data["Specifications"],AdditionalFeatures = data["AdditionalFeatures"])


            product = serializers.serialize("json",[product])

            return JsonResponse({"Sucess" : "Product Uploaded",
                                 "product" : product
                                 })
        

        return JsonResponse({"Error":"Enter all fields"})


def getProducts(request):
    if request.method == "GET":
        data = list(uploadProducts_model.objects.values())
        return JsonResponse(data, safe=False)
    

def deleteProduct(request):
    if request.method == "DELETE":
        data = json.loads(request.body.decode("utf-8"))
        if data["id"]:
            deletedProduct = uploadProducts_model.objects.get(id=data["id"])
            deletedProduct.delete()
            return JsonResponse({"Success" : "Product Deleted Sucessfully"})
        return JsonResponse({"Error":"Invalid Arguments"})
    

def updateProduct(request):
    if request.method == "PUT":
        data = json.loads(request.body.decode("utf-8"))
        if data["id"] and data["Title"] and data["Description"] and data["ImageUrl"] and data["Catagory"] and data["Specifications"] and data["AdditionalFeatures"]:
            updateProduct = uploadProducts_model.objects.get(id=data["id"])
            updateProduct.Title = data["Title"]
            updateProduct.Description = data["Description"]
            updateProduct.ImageUrl = data["ImageUrl"]
            updateProduct.Catagory = data["Catagory"]
            updateProduct.Specifications = data["Specifications"]
            updateProduct.AdditionalFeatures = data["AdditionalFeatures"]

            updateProduct.save()
            
            product = serializers.serialize("json",[updateProduct])
            return JsonResponse({"Sucess" : "Product Updated",
                                 "product" : product
                                 })
        return JsonResponse({"Error":"Invalid Arguments"})
    
