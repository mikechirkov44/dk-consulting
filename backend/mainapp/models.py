from django.db import models
from django.core.validators import RegexValidator
from django.utils.safestring import mark_safe


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
        validators=[phoneNumberRegex], max_length=16, unique=True, verbose_name="Номер телефона")

    # Email
    email = models.EmailField(unique=True, blank=True, verbose_name="Email")
    comment = models.TextField(verbose_name="Текст запроса")
    is_contacted = models.BooleanField(
        default=False, verbose_name="Контакт состоялся")

    def __str__(self) -> str:
        return f'{self.customer_name} - {self.email}'

    class Meta:
        verbose_name_plural = "Запросы с сайта"
        verbose_name = "Запрос с сайта"


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
