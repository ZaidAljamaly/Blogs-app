from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import BlogPost
from django.db.models import Q
from .serilaizer import BlogPostSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'GET/api',
            'GET/api/Blogs',
            'GET/api/Blogs/:id',
        }
    ]
    return Response(routes)


@api_view(['GET'])
def getBlogs(request):
    q = request.GET.get('q')if request.GET.get('q') != None else''
    blogs = BlogPost.objects.filter(Q(title__icontains=q) | Q(
        category__icontains=q)).order_by('-date_created')
    Serializers = BlogPostSerializer(blogs, many=True)
    return Response(Serializers.data)


@api_view(['GET'])
def getPost(request, pk):
    post = BlogPost.objects.get(id=pk)
    Serializers = BlogPostSerializer(post, many=False)
    return Response(Serializers.data)
