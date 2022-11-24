from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import CustomerModelFilter, MaterialModelFilter
from .models import Customer, Material, User
from .serializers import (CustomerModelSerializer, MaterialModelSerializer,
                          UserRegistrSerializer)


class CustomerModelViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = Customer.objects.all()
    serializer_class = CustomerModelSerializer
    filterset_class = CustomerModelFilter


class MaterialModelViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Material.objects.all()
    serializer_class = MaterialModelSerializer
    filterset_class = MaterialModelFilter
    filter_backends = (DjangoFilterBackend,)

    if User.objects.filter(is_client=True):
        def get_queryset(self):
            return super().get_queryset().all()
    else:
        def get_queryset(self):
            return super().get_queryset().filter(for_clients=False)

    # Создаём класс RegistrUserView


class RegistrUserView(CreateAPIView):
    # Добавляем в queryset
    queryset = User.objects.all()
    # Добавляем serializer UserRegistrSerializer
    serializer_class = UserRegistrSerializer
    # Добавляем права доступа
    permission_classes = [AllowAny]

    # Создаём метод для создания нового пользователя
    def post(self, request, *args, **kwargs):
        # Добавляем UserRegistrSerializer
        serializer = UserRegistrSerializer(data=request.data)
        # Создаём список data
        data = {}
        # Проверка данных на валидность
        if serializer.is_valid():
            # Сохраняем нового пользователя
            serializer.save()
            # Добавляем в список значение ответа True
            data['response'] = True
            # Возвращаем что всё в порядке
            return Response(data, status=status.HTTP_200_OK)
        else:  # Иначе
            # Присваиваем data ошибку
            data = serializer.errors
            # Возвращаем ошибку
            return Response(data)
