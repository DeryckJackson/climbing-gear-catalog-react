from django.shortcuts import render

# Create your views here.
def index(request):
    """Returns frontend react application"""
    return render(request, 'frontend/index.html')
