from django.db import models

# Create your models here.
class Cups(models.Model):
    cup_image=models.ImageField(upload_to='cupimages')
    title=models.CharField(max_length=120)
    description=models.CharField(max_length=500)
    price=models.IntegerField()

    def __str__(self):
        return self.title

class IBars(models.Model):
    ibar_image=models.ImageField(upload_to='ibarimages')
    title=models.CharField(max_length=120)
    description=models.CharField(max_length=500)
    price=models.IntegerField()

    def __str__(self):
        return self.title

class IBarMini(models.Model):
    ibarmini_image=models.ImageField(upload_to='ibarminiimages')
    title=models.CharField(max_length=120)
    description=models.CharField(max_length=500)
    price=models.IntegerField()

    def __str__(self):
        return self.title

class Icone(models.Model):
    icone_image=models.ImageField(upload_to='iconeimages')
    title=models.CharField(max_length=120)
    description=models.CharField(max_length=500)
    price=models.IntegerField()

    def __str__(self):
        return self.title

class Tubs(models.Model):
    tub_image=models.ImageField(upload_to='tubimages')
    title=models.CharField(max_length=120)
    description=models.CharField(max_length=500)
    price=models.IntegerField()

    def __str__(self):
        return self.title

class Specialities(models.Model):
    spec_image=models.ImageField(upload_to='specimages')
    title=models.CharField(max_length=120)
    description=models.CharField(max_length=500)
    price=models.IntegerField()

    def __str__(self):
        return self.title

class Contact(models.Model):
    name=models.CharField(max_length=20)
    email=models.EmailField()
    phno=models.CharField(max_length=10)
    comment=models.CharField(max_length=255)

    def __str__(self):
        return self.name