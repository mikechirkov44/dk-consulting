# Generated by Django 3.2.15 on 2022-11-13 16:23

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BaseModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата обращения')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Дата обновления')),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('basemodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mainapp.basemodel')),
                ('request_type', models.CharField(choices=[('AUDIT', 'AUDIT'), ('IND_CONSLT', 'INDUSTRIAL CONSULTING'), ('ORG', 'ORGANIZATION_PRODUCTION'), ('LRN', 'LEARNING')], max_length=64, verbose_name='Тип запроса')),
                ('channel_type', models.CharField(choices=[('SCL', 'SOCIAL NETS'), ('WEB', 'WEB SEARCHING'), ('REC', 'RECCOMENDATIONS'), ('OTHER', 'OTHER')], max_length=64, verbose_name='Источник информации')),
                ('customer_name', models.CharField(max_length=128, verbose_name='ФИО')),
                ('phone_number', models.CharField(max_length=16, unique=True, validators=[django.core.validators.RegexValidator(regex='^((8|\\+7)[\\- ]?)?(\\(?\\d{4}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')], verbose_name='Номер телефона')),
                ('email', models.EmailField(blank=True, max_length=254, unique=True, verbose_name='Email')),
                ('comment', models.TextField(verbose_name='Текст запроса')),
                ('is_contacted', models.BooleanField(default=False, verbose_name='Контакт состоялся')),
            ],
            options={
                'verbose_name': 'Клиент',
                'verbose_name_plural': 'Клиенты',
            },
            bases=('mainapp.basemodel',),
        ),
    ]