from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('projects/micromouse', views.micromouse, name='micromouse'),
    path('projects/sorting-algorithms', views.sortingAlgos, name='sorting-algos'),
    path('projects/swlatinx', views.swlatinx, name='swlatinx'),
    path('projects/xilinx', views.xilinx, name='xilinx'),
    path('projects/live/sorting-algorithms', views.sortingAlgosLive, name='sorting-algos-live'),
]
