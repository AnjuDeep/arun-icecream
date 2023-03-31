from rest_framework import serializers
from .models import Cups,IBars,IBarMini,Icone,Tubs,Specialities,Contact

class CupsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cups
        fields=("id","cup_image","title","description","price")

class IBarSerializer(serializers.ModelSerializer):
    class Meta:
        model=IBars
        fields=("id","ibar_image","title","description","price")

class IBarMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model=IBarMini
        fields=("id","ibarmini_image","title","description","price")

class IconeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Icone
        fields=("id","icone_image","title","description","price")

class TubSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tubs
        fields=("id","tub_image","title","description","price")

class SpecialitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Specialities
        fields=("id","spec_image","title","description","price")

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields=("id","name","email","phno","comment")