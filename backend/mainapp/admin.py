from django.contrib import admin

from .models import Customer


@admin.register(Customer)
class UserAdmin(admin.ModelAdmin):
    list_display = ('pk', 'customer_name', 'phone_number',
                    'request_type', 'email', 'is_contacted',)
