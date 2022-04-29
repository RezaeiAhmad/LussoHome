# Generated by Django 3.1 on 2022-04-29 13:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eshop_products_category', '0004_auto_20220411_1427'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productcategory',
            name='categories',
        ),
        migrations.AddField(
            model_name='productcategory',
            name='categories',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='eshop_products_category.maincategory', verbose_name='دسته بندی ها'),
        ),
    ]