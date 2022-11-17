from rest_framework.viewsets import ModelViewSet
from .models import Customer, Material
from .filters import CustomerModelFilter, MaterialModelFilter
from .serializers import CustomerModelSerializer, MaterialModelSerializer


class CustomerModelViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerModelSerializer
    filterset_class = CustomerModelFilter


class MaterialModelViewSet(ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialModelSerializer
    filterset_class = CustomerModelFilter
