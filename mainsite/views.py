from django.shortcuts import render
from django.views import View

# Create your views here.

def index(request):
  return render(request, 'index.html')

def contact(request):
  return render(request, 'contact.html')

def about(request):
  return render(request, 'about.html')

def micromouse(request):
  return render(request, 'projects/project-micromouse.html')

def sortingAlgos(request):
  return render(request, 'projects/project-sorting-algos.html')

def swlatinx(request):
  return render(request, 'projects/project-swlatinx.html')

def xilinx(request):
  return render(request, 'projects/project-xilinx.html')

def sortingAlgosLive(request):
  return render(request, 'projects/live/sorting-algos-live.html')