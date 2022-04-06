from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name='Routes'),
    path('Blogs', views.getBlogs, name='Blogs'),
    path('Blogs/<str:pk>/', views.getPost, name='BlogPost'),
]
