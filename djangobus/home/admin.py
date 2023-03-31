from django.contrib import admin

# Register your models here.
from .models import Cups,IBars,IBarMini,Icone,Tubs,Specialities,Contact

class CupsAdmin(admin.ModelAdmin):
    list_display=("cup_image","title","description","price")

admin.site.register(Cups,CupsAdmin)


class IBarAdmin(admin.ModelAdmin):
    list_display=("ibar_image","title","description","price")

admin.site.register(IBars,IBarAdmin)

class IBarMiniAdmin(admin.ModelAdmin):
    list_display=("ibarmini_image","title","description","price")

admin.site.register(IBarMini,IBarMiniAdmin)

class IconeAdmin(admin.ModelAdmin):
    list_display=("icone_image","title","description","price")

admin.site.register(Icone,IconeAdmin)

class TubAdmin(admin.ModelAdmin):
    list_display=("tub_image","title","description","price")

admin.site.register(Tubs,TubAdmin)

class SpecialitiesAdmin(admin.ModelAdmin):
    list_display=("spec_image","title","description","price")

admin.site.register(Specialities,SpecialitiesAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display=("name","email","phno","comment")

admin.site.register(Contact,ContactAdmin)