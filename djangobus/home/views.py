from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CupsSerializer,IBarSerializer,IBarMiniSerializer,IconeSerializer,TubSerializer,SpecialitiesSerializer,ContactSerializer
from .models import Cups,IBars,IBarMini,Icone,Tubs,Specialities,Contact

class CupsView(viewsets.ModelViewSet):
    serializer_class=CupsSerializer
    queryset=Cups.objects.all()

class IBarView(viewsets.ModelViewSet):
    serializer_class=IBarSerializer
    queryset=IBars.objects.all()

class IBarMiniView(viewsets.ModelViewSet):
    serializer_class=IBarMiniSerializer
    queryset=IBarMini.objects.all()

class IconeView(viewsets.ModelViewSet):
    serializer_class=IconeSerializer
    queryset=Icone.objects.all()

class TubView(viewsets.ModelViewSet):
    serializer_class=TubSerializer
    queryset=Tubs.objects.all()

class SpecialitiesView(viewsets.ModelViewSet):
    serializer_class=SpecialitiesSerializer
    queryset=Specialities.objects.all()

class ContactView(viewsets.ModelViewSet):
    serializer_class=ContactSerializer
    queryset=Contact.objects.all()