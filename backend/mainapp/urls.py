from django.urls import include, path
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from mainapp import views
from mainapp.apps import MainappConfig
from .views import CustomerModelViewSet


app_name = MainappConfig.name

router = DefaultRouter()
router.register("customers", CustomerModelViewSet)

urlpatterns = [
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include(router.urls)),
]