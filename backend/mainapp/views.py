from rest_framework.viewsets import ModelViewSet
from .models import Customer
from .filters import CustomerModelFilter
from .serializers import CustomerModelSerializer


class CustomerModelViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerModelSerializer
    filterset_class = CustomerModelFilter
