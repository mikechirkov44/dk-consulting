from django.db import models  # Подключаем работу с моделями
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.core.validators import RegexValidator
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail


class BaseModel(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Дата обращения")
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name="Дата обновления")


class Customer(BaseModel):
    """Describe a Customer Model"""
    # TYPE OF REQUEST
    CHOICE_REQUEST_TYPE = (
        ("AUDIT", "АУДИТ"),
        ("IND_CONSLT", "ПРОМЫШЛЕННЫЙ КОНСАЛТИНГ"),
        ("ORG", "ОРГАНИЗАЦИЯ ПРОИЗВОДСТВА"),
        ("LRN", "ОБУЧЕНИЕ"),
    )
    # TYPE OF CHANNEL
    CHOICE_SOURCE = (
        ("SCL", "СОЦИАЛЬНЫЕ СЕТИ"),
        ("WEB", "ПОИСК В ИНТЕРНЕТЕ"),
        ("REC", "РЕКОМЕНДАЦИИ"),
        ("OTHER", "ДРУГОЙ ИСТОЧНИК"),
    )
    request_type = models.CharField(
        unique=False, max_length=64, verbose_name="Тип запроса", choices=CHOICE_REQUEST_TYPE)
    channel_type = models.CharField(
        unique=False, max_length=64, verbose_name="Источник информации", choices=CHOICE_SOURCE)
    # Customer name
    customer_name = models.CharField(max_length=128, verbose_name="ФИО")

    # Contact number with validation
    phoneNumberRegex = RegexValidator(
        regex=r"^((8|\+7)[\- ]?)?(\(?\d{4}\)?[\- ]?)?[\d\- ]{7,10}$")
    phone_number = models.CharField(
        validators=[phoneNumberRegex], max_length=16, unique=False, verbose_name="Номер телефона")

    # Email
    email = models.EmailField(unique=False, blank=True, verbose_name="Email")
    comment = models.TextField(verbose_name="Текст запроса")
    is_contacted = models.BooleanField(
        default=False, verbose_name="Контакт состоялся")

    def __str__(self) -> str:
        return f'{self.customer_name} - {self.email}'

    class Meta:
        verbose_name_plural = "Запросы с сайта"
        verbose_name = "Запрос с сайта"
        ordering = ['-created_at', ]


class Material(models.Model):
    title = models.CharField(max_length=64, verbose_name="Имя файла")
    description = models.CharField(
        max_length=128, verbose_name="Описание файла")
    for_clients = models.BooleanField(
        default=False, verbose_name="Только для клиентов")
    file_name = models.FileField(
        upload_to='uploads/', verbose_name="Файл pdf")

    class Meta:
        verbose_name = "Полезный материал"
        verbose_name_plural = "Полезные материалы"

    def __str__(self) -> str:
        return self.title


# Подключаем классы для создания пользователей


# Создаем класс менеджера пользователей
class MyUserManager(BaseUserManager):
    # Создаём метод для создания пользователя
    def _create_user(self, email, username, password, **extra_fields):
        # Проверяем есть ли Email
        if not email:
            # Выводим сообщение в консоль
            raise ValueError("Вы не ввели Email")
        # Проверяем есть ли логин
        if not username:
            # Выводим сообщение в консоль
            raise ValueError("Вы не ввели Логин")
        # Делаем пользователя
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **extra_fields,
        )
        # Сохраняем пароль
        user.set_password(password)
        # Сохраняем всё остальное
        user.save(using=self._db)
        # Возвращаем пользователя
        return user

    # Делаем метод для создание обычного пользователя
    def create_user(self, email, username, password):
        # Возвращаем нового созданного пользователя
        return self._create_user(email, username, password)

    # Делаем метод для создание админа сайта
    def create_superuser(self, email, username, password):
        # Возвращаем нового созданного админа
        return self._create_user(email, username, password, is_staff=True, is_superuser=True)


# Создаём класс User
class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True, unique=True)  # Идентификатор
    username = models.CharField(
        max_length=50, unique=True, verbose_name="Имя пользователя")  # Логин
    email = models.EmailField(max_length=100, unique=True)  # Email
    is_active = models.BooleanField(
        default=True, verbose_name="Активный")  # Статус активации
    is_staff = models.BooleanField(default=False)  # Статус админа
    date_joined = models.DateTimeField(
        verbose_name="Дата регистрации", auto_now_add=True)
    is_client = models.BooleanField(
        default=False, verbose_name="Статус клиента")

    USERNAME_FIELD = 'email'  # Идентификатор для обращения
    REQUIRED_FIELDS = ['username']  # Список имён полей для Superuser

    objects = MyUserManager()  # Добавляем методы класса MyUserManager

    # Метод для отображения в админ панели
    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    def __str__(self):
        return self.email


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}?token={}".format(
        reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="DK-Consulting"),
        # message:
        email_plaintext_message,
        # from:
        "ya.mikechirkov@yandex.ru",
        # to:
        [reset_password_token.user.email]
    )
