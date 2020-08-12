from django.contrib import admin
from api.models import Contato

# Register your models here.

class ContatoAdmin(admin.ModelAdmin):
    list_display = ["nome","canal","valor","obs"]              
           
  
            
admin.site.register(Contato, ContatoAdmin)