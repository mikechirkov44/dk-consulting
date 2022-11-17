from django_filters import rest_framework as filters

from .models import Customer, Material


class CustomerModelFilter(filters.FilterSet):

    class Meta:
        model = Customer
        fields = ["request_type", "is_contacted"]


class MaterialModelFilter(filters.FilterSet):

    class Meta:
        model = Material
        fields = ["for_clients", ]
