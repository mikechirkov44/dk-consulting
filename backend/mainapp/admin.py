from django.utils.translation import ngettext
from django.contrib import admin, messages
from .models import Customer, Material


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    actions = ['move_to_archive']
    list_display = ('pk', 'customer_name', 'phone_number',
                    'request_type', 'email', 'is_contacted',)
    list_filter = ('is_contacted',)
    search_fields = ('email', 'customer_name',)
    list_per_page = 10

    @admin.action(description='Пометить контакт как состоявшимся')
    def move_to_archive(self, request, queryset):
        queryset.update(is_contacted=True)

        updated = queryset.update(is_contacted=True)
        self.message_user(request, ngettext(
            '%d контакт помечен как состоявшийся!',
            '%d контакт помечены как состоявшиеся!',
            updated,
        ) % updated, messages.SUCCESS)


@admin.register(Material)
class MaterialAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'description', 'for_clients')
    list_filter = ('for_clients',)
    search_fields = ('title',)
    list_per_page = 10


admin.site.site_title = 'DK-CONSULTING ADMIN'
admin.site.site_header = 'DK-CONSULTING ADMIN'
