<img src="https://i.imgur.com/s8QeOpo.png">

# Rapidly Building A Django API to Consume

## Learning Objectives

| Students will be able to: |
|---|
| Define a Django Model for a data entity |
| Generate migrations when Models are added or updated |
| Run pending migrations |
| Implement a REST API for two model instances using TASTYPIE |


Django is by far the most popular Python 
framework for Rapid API Building, because its designed to provide Rails-like 
ease of use. Let’s see how quickly we 
can set up a simple API using Django 
and a library called TastyPie.

### `Remember Convention over Configuration!!!`

# Setting Up Our Environment
1. Go to our Terminal and locate the Folder Called PyCharmProjects (If this hasn't been created just go ahead and make a folder called myprojects in your /Users/username directory)
2. Inside this folder create a folder called my_portfolio
3. Then open PyCharm and select File New Project
4. Select Django and also select the location of the folder we mad and add portfolio_django to the path 
my_portfolio/portfolio_django
5. Create your Django Project
6. Once your app starts make sure you are in the portfolio_django folder and
go ahead and pip install django-tastypie
7. Finally, we can start our app within our project:
`python manage.py startapp api` or `python3 manage.py startapp api`

### Within your portfolio_django directory, you should now have two subfolders: 
1. one also called portfolio_django, and 
2. another named api (as well as a manage.py file).
##### The distinction between the two can be thought of
##### like this: 
1. the portfolio_django contains the settings for the configuration of the project,
 as well as exposing URLs. 
1. The api folder handles the actual API magic.

## Before we go on, we have to install our app within our project, inside portfolio_django/settings-py:
# portfolio_django/settings.py
```python
INSTALLED_APPS = [
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
'api'
]
```
Again, our project can have multiple apps installed — and those apps aren’t necessarily tied
to that project.
Our project here is
portfolio_django, and our app is called api.
With that done, we’re ready to start building.
### A Model Start (see what I did there lol)
The first thing we need to create is a Note model to interact with.
For those unfamiliar with models, this
description from the Django docs is as good as any:
A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you’re storing. Generally, each model maps to a single
database table.
 Django is unique (compared to a framework like Ruby on Rails) in that your migrations follow how you define your models, rather than being separately defined.
We’re going to create our Project model, and then run our migrations, which will set up our database with a notes table (with all the appropriate fields). Let’s create our model, in api/models.py
 # api/models.py
 ```python
from django.db import models
from django.utils.text import slugify
# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=200)
    code = models.CharField(max_length=400)
    deployment = models.CharField(max_length=400)
    image = models.CharField(max_length=400)
    slug = models.SlugField(null=True, blank=True)
```
 We define our fields, along with the type of each.
  
 The next thing we want to do is add a __str__ method to the model. This method defines what we get when we ask for a particular instance of a model.
For example, this:
```python
 # api/models.py
from django.db import models
from django.utils.text import slugify


class Project(models.Model):
    title = models.CharField(max_length=200)
    code = models.CharField(max_length=400)
    deployment = models.CharField(max_length=400)
    image = models.CharField(max_length=400)
    slug = models.SlugField(null=True, blank=True)
    
    def __str__(self):
        return '%s ' % (self.name)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)[:50]
        return super(Project, self).save(*args, **kwargs)
```
 ... means that when we grab any Project model, we’ll get back only the title. This just keeps things clean. (We will only be interacting with our models in this manner through the Python shell, so it’s not super necessary, but good to be aware of).
Let’s expand our __str__ method to also include the body:
 ```python
   def __str__(self):
        return '%s %s %s %s' % (self.title, self.code, self.deployment, self.image)
```
 Okay, our model is all set up. Now to run our migrations, which will set up our database.
 `python manage.py makemigrations`
 `python manage.py migrate`
 Let’s go ahead and populate our database with a single note, to make sure all is well:
 `python manage.py shell`
 ```
 >>> from api.models import Project
>>> project1 = Project(title="Project 1", code="https://github.com", deployment="https://somesite.com", image="https://someting.com/img/yes.jpeg")
 >>> project1.save()
 >>> Project.objects.all()
```
We create our note, save it, then retrieve all notes. You can see our __str__ method at work, returning both the title and the body.
(If you want to learn more about the Note.objects manager, see here).
API-ification
Okay, so our model and database are all ready to
   
 go. Now to expose some endpoints to the wider world, so we can interact with our data.
One of the basics of RESTful APIs is the idea of resources. The term is rather abstract, but in this context it refers to a class that sits between our URLs and our models.
A user will make a request to an endpoint. Depending on the URL, the user will be redirected to a particular resource, which will then perform the appropriate CRUD action on the model. Again, this is a simplified explanation of a complex topic — let’s go ahead and see it in practice:
In your api folder, create a new file
called resources.py.
```
 # api/resources.py
 from tastypie.resources import ModelResource
 from api.models import Project

 class ProjectResource(ModelResource):
    class Meta:
        queryset = Project.objects.all()
        resource_name = 'project'
```
 We import our model, and create a resource from

 it. The queryset (what models the resource is concerned with) is all note objects.
We also name the resource appropriately: ‘note’. This will be important for URLs.
Speaking of which, let’s set those up in our portfolio_django/urls.py file:
 ```
 from django.conf.urls import url, include
 from django.contrib import admin
 from api.resources import ProjectResource
 project_resource = ProjectResource()
 urlpatterns = [
 url(r'^admin/', admin.site.urls),
 url(r'^api/', include(project_resource.urls)),
 ]
```
 We import our NoteResource, instantiate it, and then say that we want all URLs that start with api/ to redirect to the resource. (Don’t forget to
import include from django.conf.urls).
Testing Our API
Finally, we can get running.
 `python manage.py runserver`
 Now in Postman, let’s send a GET request to this URL: http://localhost:8000/api/project/1

 ### Great! Our GET endpoint is working perfectly. Easy.
#### Now let’s try to create a new note from Postman...

## POST, PUT, DELETE

We’re going to send a raw JSON object as our new note, like so:
Make sure you select JSON from the orange dropdown there! This will set a Content-Type header (which you can view under the Headers tab).
Also make sure you send the request to http://localhost:8000/api/project/, not http://localhost:8000/api/project. That trailing slash is important, since otherwise Django has to redirect you, losing the POST data.
Send that request and... it fails. We get back a 401, AKA Unauthorized.
TastyPie is protective of its models out of the box,
 
 and only allows reading, not modifying, the data. It’s an easy fix, though — import their basic Authorization class, and add it to our resource.
 ```python
 # api/resources.py
 from tastypie.resources import ModelResource
 from api.models import Project
 from tastypie.authorization import Authorization
 class ProjectResource(ProjectResource):
    class Meta:
        queryset = Project.objects.all()
        resource_name = 'project'
        authorization = Authorization()
```
Now it works! Try the request, and we get back 201, AKA success!
To double check, you can send a GET request
to `http://localhost:8000/api/project`. You should get back both notes.
All the Endpoints
Okay, so we finished our GET and POST endpoints. 

### What about PUT and DELETE?
Well, the magic of TastyPie is that they’re already done. Try updating or deleting your first note by ending PUT or DELETE to  `http://localhost:8000/api/project/1/`. It just works!
Just like that, we created a working RESTful API.
Limiting Fields
If you wanted to only send specific information about a resource, you can limit fields like so:
 ```python
 # api/resources.py
 from tastypie.resources import ModelResource
 from api.models import Project
 from tastypie.authorization import Authorization
 class ProjectResource(ProjectResource):
    class Meta:
        queryset = Project.objects.all()
        resource_name = 'project'
        authorization = Authorization()
        # fields = ['title', 'code'] etc...
```
 Now you won’t see fields you don't want

Now lets add a Comments/Note Model ...
```python
# add to models.py
class Note(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' % (self.title, self.body)
```
```python
# add to resources.py
class NoteResource(ModelResource):
    project = fields.ForeignKey(ProjectResource, 'project')

    class Meta:
        queryset = Note.objects.all()
        resource_name = 'note'
        authorization = Authorization()
        fields = ['title', 'body']
        filtering = {
            'project': ALL_WITH_RELATIONS,
        }
```

```python
# urls.py

from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from api.resources import NoteResource, ProjectResource
from tastypie.api import Api

v1_api = Api(api_name='v1')
v1_api.register(ProjectResource())
v1_api.register(NoteResource())


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include(v1_api.urls))
]

```

Thaaaats All Folks.....
# `Remember Convention Over Configuration`
