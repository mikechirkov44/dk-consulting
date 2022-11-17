from rest_framework import serializers
from .models import Customer, Material


class CustomerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        exclude = ['is_contacted', ]


class MaterialModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = "__all__"
