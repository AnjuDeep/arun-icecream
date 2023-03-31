# Generated by Django 4.1.5 on 2023-02-08 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_ibarmini'),
    ]

    operations = [
        migrations.CreateModel(
            name='Icone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icone_image', models.ImageField(upload_to='iconeimages')),
                ('title', models.CharField(max_length=120)),
                ('description', models.CharField(max_length=500)),
                ('price', models.IntegerField()),
            ],
        ),
    ]
