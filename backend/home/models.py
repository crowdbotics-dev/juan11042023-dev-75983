from django.conf import settings
from django.db import models
class Newmo(models.Model):
    'Generated Model'
    value = models.EmailField(max_length=254,)
    value2 = models.BigIntegerField(null=True,blank=True,)
class Azul(models.Model):
    'Generated Model'
    value = models.BigIntegerField()
class Alligator(models.Model):
    'Generated Model'
    value = models.BigIntegerField()
class Wolf(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    enemy = models.ForeignKey("home.Alligator",on_delete=models.CASCADE,related_name="wolf_enemy",)
class Cat(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    age = models.IntegerField()
