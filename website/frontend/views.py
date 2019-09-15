from django.shortcuts import render


def index(request):
    context = {
        'id': id
    }
    return render(request, 'index.html')


def blog(request, id):
    context = {
        'id': id
    }
    return render(request, 'index.html', context)
