# Generated by Django 3.1 on 2022-04-11 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eshop_products_category', '0002_auto_20200701_1043'),
    ]

    operations = [
        migrations.CreateModel(
            name='MainCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='عنوان')),
                ('name', models.CharField(max_length=150, verbose_name='عنوان در URL')),
            ],
            options={
                'verbose_name': 'دسته بندی',
                'verbose_name_plural': 'دسته بندی ها',
            },
        ),
        migrations.AddField(
            model_name='productcategory',
            name='categories',
            field=models.ManyToManyField(blank=True, to='eshop_products_category.MainCategory', verbose_name='دسته بندی ها'),
        ),
    ]