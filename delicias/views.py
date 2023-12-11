from django.shortcuts import render
from .models import Project
# Create your views here.

def delicias(request):
    projects = Project.objects.all()
    return render(request, "delicias/delicias.html", {'projects':projects})