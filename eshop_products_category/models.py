from django.db import models


# Create your models here.


class MainCategory(models.Model):
    title = models.CharField(max_length=150, verbose_name='عنوان')
    name = models.CharField(max_length=150, verbose_name='عنوان در URL')

    class Meta:
        verbose_name = 'دسته بندی اصلی'
        verbose_name_plural = 'دسته بندی های اصلی'

    def __str__(self):
        return self.title


class ProductCategory(models.Model):
    title = models.CharField(max_length=150, verbose_name='عنوان')
    name = models.CharField(max_length=150, verbose_name='عنوان در URL')
    categories = models.ManyToManyField(MainCategory, blank=True, verbose_name="دسته بندی ها")

    class Meta:
        verbose_name = 'دسته بندی'
        verbose_name_plural = 'دسته بندی ها'

    def __str__(self):
        return self.title
