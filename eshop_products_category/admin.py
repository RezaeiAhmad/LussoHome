from django.contrib import admin

from .models import ProductCategory, MainCategory


# Register your models here.

class MainCategoryAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'name']

    class Meta:
        model = MainCategory


admin.site.register(MainCategory, MainCategoryAdmin)

class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'name']

    class Meta:
        model = ProductCategory


admin.site.register(ProductCategory, ProductCategoryAdmin)
