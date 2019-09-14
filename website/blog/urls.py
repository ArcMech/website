from rest_framework import routers
from django.urls import path
from . import views
from .api import PostViewSet


router = routers.DefaultRouter()
router.register('posts', PostViewSet, base_name='posts')
urlpatterns = router.urls
