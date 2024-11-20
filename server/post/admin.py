from django.contrib import admin
from .models import Post

# Register your models here.
#this will display the model in admin site
admin.site.register(Post)