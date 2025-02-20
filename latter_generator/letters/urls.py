from django.urls import path
from .views import LetterCreateView, LetterRetrieveView

urlpatterns = [
    path('create/', LetterCreateView.as_view(), name='letter-create'),
    path('<int:id>/', LetterRetrieveView.as_view(), name='letter-retrieve'),
]   