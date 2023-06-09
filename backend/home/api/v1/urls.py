from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AlligatorViewSet,AzulViewSet,CatViewSet,NewmoViewSet,WolfViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('newmo', NewmoViewSet )
router.register('azul', AzulViewSet )
router.register('alligator', AlligatorViewSet )
router.register('wolf', WolfViewSet )
router.register('cat', CatViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
