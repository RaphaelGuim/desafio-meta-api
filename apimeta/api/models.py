from django.db import models
from django.core.validators import validate_email
from rest_framework import serializers
# Create your models here.
 


class Contato(models.Model):
    
    OPTIONS = (('email', 'email'),('celular', 'celular'),('fixo', 'fixo')  )
    
    nome = models.CharField(max_length=100,null=False)
    canal = models.CharField(max_length=1,
                             choices=OPTIONS,
                             default='email')
    valor = models.CharField(max_length=100,null=False)
    obs = models.CharField(max_length=200,null=True, blank=True, default=None)
    
    
    def save(self, *args, **kwargs):
        if self.canal == "email":
            try:
                validate_email(self.valor)
            except :
                raise serializers.ValidationError({'valor':"Invalid e-mail"})
        super(Contato, self).save(*args, **kwargs)