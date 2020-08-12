

# Create your views here.
 
from api.models import Contato
from rest_framework import routers, serializers, viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.paginator import Paginator
from rest_framework import status
from rest_framework.decorators import action

class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = ["id","nome","canal","valor","obs"]
        optional_fields = ["obs"]  
     
    def get_validation_exclusions(self):
        exclusions = super(ContatoSerializer, self).get_validation_exclusions()
        return exclusions + ['obs']     
       
class ContatoViewSet(viewsets.ModelViewSet):
    
    queryset = Contato.objects.all().order_by('id')
    serializer_class = ContatoSerializer    
     
    
    def list(self, request, *args, **kwargs):
        size = request.GET.get('size',10)
        page = request.GET.get('page',0)         
         
        queryset = self.get_queryset()
        paginator = Paginator(queryset, size) 
        queryset = paginator.get_page(page)
         
        serializer = self.get_serializer(queryset, many=True) 
        return Response(serializer.data)
    
    @action(methods=['delete'], detail=True, permission_classes=[AllowAny])    
    def delete(self, request, pk, format=None):
        
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
     
 