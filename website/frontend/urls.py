from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('contact', views.index),
    path('blog', views.index),
    path('blog/<id>', views.blog),
]
