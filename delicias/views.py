from django.shortcuts import render
from .models import Project
# Create your views here.

def delicias(request):
    Projects = Project.objects.all()
    return render(request, "delicias/delicias.html", {'Projects':Projects})