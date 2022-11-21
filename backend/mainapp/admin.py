import json
from django.urls import include, path
from django.http import JsonResponse
from django.contrib import admin, messages
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Count
from django.db.models.functions import TruncDay
from django.utils.translation import ngettext
from .models import Customer, Material, User


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    actions = ['move_to_archive']
    list_display = ('pk', 'customer_name', 'phone_number',
                    'request_type', 'email', 'is_contacted', 'created_at')
    list_filter = ('is_contacted',)
    search_fields = ('email', 'customer_name',)
    list_per_page = 10

    def changelist_view(self, request, extra_context=None):
        # Aggregate new subscribers per day
        chart_data = (
            Customer.objects.annotate(date=TruncDay("created_at"))
            .values("date")
            .annotate(y=Count("id"))
            .order_by("-date")
        )

        # Serialize and attach the chart data to the template context
        as_json = json.dumps(list(chart_data), cls=DjangoJSONEncoder)
        extra_context = extra_context or {"chart_data": as_json}

        # Call the superclass changelist_view to render the page
        return super().changelist_view(request, extra_context=extra_context)

    def get_urls(self):
        urls = super().get_urls()
        extra_urls = [
            path("chart_data/", self.admin_site.admin_view(self.chart_data_endpoint))
        ]
        # NOTE! Our custom urls have to go before the default urls, because they
        # default ones match anything.
        return extra_urls + urls

    # JSON endpoint for generating chart data that is used for dynamic loading
    # via JS.
    def chart_data_endpoint(self, request):
        chart_data = self.chart_data()
        return JsonResponse(list(chart_data), safe=False)

    def chart_data(self):
        return (
            Customer.objects.annotate(date=TruncDay("created_at"))
            .values("date")
            .annotate(y=Count("id"))
            .order_by("-date")
        )

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


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('pk', 'email', 'password', 'is_active', 'date_joined')


admin.site.site_title = 'DK-CONSULTING ADMIN'
admin.site.site_header = 'DK-CONSULTING ADMIN'
