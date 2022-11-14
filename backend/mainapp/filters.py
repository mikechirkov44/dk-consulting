from django_filters import rest_framework as filters

from .models import Customer


class CustomerModelFilter(filters.FilterSet):

    class Meta:
        model = Customer
        fields = ["request_type", "is_contacted"]
