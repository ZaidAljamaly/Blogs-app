from django.db import models
from datetime import datetime


class Categories(models.TextChoices):
    WORLD = 'world'
    ENVIRONMENT = 'environment'
    TECHNOLOGY = 'technology'
    DESIGN = 'design'
    CULTURE = 'culture'
    BUSINESS = 'business'
    POLITICS = 'politics'
    OPINION = 'opinion'
    SCIENCE = 'science'
    HEALTH = 'health'
    STYLE = 'style'
    TRAVEL = 'travel'


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    category = models.CharField(
        max_length=50, choices=Categories.choices, default=Categories.WORLD)
    photo = models.ImageField(null=True,blank=True)
    content = models.TextField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title
