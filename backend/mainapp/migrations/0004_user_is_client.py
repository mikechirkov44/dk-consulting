# Generated by Django 3.2.15 on 2022-11-21 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_alter_user_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_client',
            field=models.BooleanField(default=False),
        ),
    ]
