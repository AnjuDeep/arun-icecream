# Generated by Django 4.1.5 on 2023-02-08 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_icone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tubs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tub_image', models.ImageField(upload_to='tubimages')),
                ('title', models.CharField(max_length=120)),
                ('description', models.CharField(max_length=500)),
                ('price', models.IntegerField()),
            ],
        ),
    ]
