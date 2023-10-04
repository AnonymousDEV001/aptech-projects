from django.contrib import admin
from .models import *
# Register your models here.


admin.site.register(user_model)
admin.site.register(contact_model)
admin.site.register(uploadProducts_model)