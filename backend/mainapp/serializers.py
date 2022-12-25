from .models import User
from rest_framework import serializers
from .models import Customer, Material
from django.core.mail import send_mail


class CustomerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        exclude = ['is_contacted', ]

    def create(self, validated_data):
        customer = Customer.objects.create(**validated_data)
        send_mail(
            'Новый запрос с сайта id:{} получен'.format(
                customer.pk),
            'Содержание запроса:\n Email: {},\n Имя: {},\n Контактный тел:{},\n Текст запроса:{}' .format(
                customer.email, customer.customer_name, customer.phone_number, customer.comment),
            'dk.prom.consult@yandex.ru',
            ['info@dk-consult.ru', 'denkapitonenko@mail.ru'],
            fail_silently=False,
        )
        return customer


class MaterialModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = "__all__"


class MaterialModelClientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = "__all__"


class UserRegistrSerializer(serializers.ModelSerializer):
    # Поле для повторения пароля
    password2 = serializers.CharField()

    # Настройка полей
    class Meta:
        # Поля модели которые будем использовать
        model = User
        # Назначаем поля которые будем использовать
        fields = ['email', 'username', 'password', 'password2']

    # Метод для сохранения нового пользователя
    def save(self, *args, **kwargs):
        # Создаём объект класса User
        user = User(
            email=self.validated_data['email'],  # Назначаем Email
            username=self.validated_data['username'],  # Назначаем Логин
        )
        # Проверяем на валидность пароль
        password = self.validated_data['password']
        # Проверяем на валидность повторный пароль
        password2 = self.validated_data['password2']
        # Проверяем совпадают ли пароли
        if password != password2:
            # Если нет, то выводим ошибку
            raise serializers.ValidationError(
                {password: "Пароль не совпадает"})
        # Сохраняем пароль
        user.set_password(password)
        # Сохраняем пользователя
        user.save()
        # Отправка уведомления пользователю
        send_mail(
            'Регистрация на сайте dk-consulting.ru',
            'Вы успешно зарегистрировались на сайте, имя пользователя: {}, email: {}'.format(
                user.username, user.email),
            'dk.prom.consult@yandex.ru',
            [{user.email}, ],
            fail_silently=False,
        )
        # Возвращаем нового пользователя
        return user
