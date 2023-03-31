
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from home import views

router = routers.DefaultRouter()
router.register(r'cups',views.CupsView,'cup')
router.register(r'ibars',views.IBarView,'ibar')
router.register(r'ibarmini',views.IBarMiniView,'ibarmini')
router.register(r'icone',views.IconeView,'icone')
router.register(r'tubs',views.TubView,'tubs')
router.register(r'specialities',views.SpecialitiesView,'specialities')
router.register(r'contact',views.ContactView,basename='contact')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
