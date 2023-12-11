from django.shortcuts import render, HttpResponse

# Create your views here.



def resto(request):
    return render(request, "core/resto.html")

def nosotros(request):
    return render(request, "core/nosotros.html")



def contacto(request):
    return render(request, "core/contacto.html")