# Generated by Django 3.2.15 on 2022-12-25 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0006_auto_20221125_0548'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='material',
            options={'ordering': ['-pk'], 'verbose_name': 'Полезный материал', 'verbose_name_plural': 'Полезные материалы'},
        ),
        migrations.AlterField(
            model_name='customer',
            name='channel_type',
            field=models.CharField(blank=True, choices=[('SCL', 'СОЦИАЛЬНЫЕ СЕТИ'), ('WEB', 'ПОИСК В ИНТЕРНЕТЕ'), ('REC', 'РЕКОМЕНДАЦИИ'), ('OTHER', 'ДРУГОЙ ИСТОЧНИК')], max_length=64, verbose_name='Источник информации'),
        ),
        migrations.AlterField(
            model_name='customer',
            name='request_type',
            field=models.CharField(blank=True, choices=[('AUDIT', 'АУДИТ'), ('IND_CONSLT', 'ПРОМЫШЛЕННЫЙ КОНСАЛТИНГ'), ('ORG', 'ОРГАНИЗАЦИЯ ПРОИЗВОДСТВА'), ('LRN', 'ОБУЧЕНИЕ')], max_length=64, verbose_name='Тип запроса'),
        ),
        migrations.AlterField(
            model_name='material',
            name='description',
            field=models.CharField(max_length=1024, verbose_name='Описание файла'),
        ),
        migrations.AlterField(
            model_name='material',
            name='file_name',
            field=models.FileField(upload_to='uploads/', verbose_name='Файл pdf или архив'),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.EmailField(max_length=254, null=True, unique=True, verbose_name='Имя пользователя'),
        ),
    ]