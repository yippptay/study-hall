# Intro to Django

Django is one of the two most popular backend web frameworks in Python (the other being flask). Django is used by popular websites like instagram to power their backends.

## 1 - Virtual Environments

-   Explain what virtual environments are
-   Create a practice project with a virtual environment

## 2 - Pip

-   Discuss what pip is
-   install Django

### Important pip commands

-   pip install
-   pip uninstall
-   pip list
-   pip freeze > filename (typically requirement.txt for heroku)
-   pip show <package name>

## Starting a new Django Project

use the following command which will create a new folder with your django project

```
django-admin startproject <project name>
```

### The Main 5 Files in your new Django Project

manage.py: The main file that gives you access to all the django-admin commands for the project

**init**.py: empty file that enables the project as a module.

settings.py: Use this file to install middleware, apps, set database settings and more.

urls.py: This is the heart of mapping url routes

wsgi.py: This is a file that is used to help deploy your django project to a web server... don't touch it.

### Running the Dev Server

```
python manage.py runserver
```

## Creating a new django app

Thing of a Django app as a self-contained piece of backend functionality including models, views and controllers. The goal is for apps to be modular so you can easily reuse apps you've build in one project on others or use apps other have built and add it your project (blog and podcasting apps for example.)

to start a new app

```
django-admin startapp <App Name>
```

### The Files in your new app

migrations/: This file will track changes to your models so you can migrate your models to databases in different environments, you don't need to edit these files as the django-admin will have commands for handling migrations.

admin.py: This allows you to connect your models to the built in Django admin panel.

apps.py: App configurations

models.py: Define the models used by this app

tests.py: For writing tests, feel free to look up how to do unit tests.

views.py: this is where views are coordinated (selecting which data goes to which template)

### Install your app

Go to settings.py and install your app

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'AppName',
]

```

### Adding a View

Go to your views.py and do the following

```
from django.http import HttpResponse

def myview(request):
    return HttpResponse('My First Django View!')

```

### Register View to a URL Route

Head over to urls.py and ...

```
from django.urls import path
from django.contrib import admin

from AppName import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', admin.site.urls),
    path('appname', views.test, name="text")
]


```

run the devserver and try it out!

## Adding some models

Head over to models.py and lets create some models

```
from django.db import models
from django.contrib.auth.models import User


class FirstModel(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=100)


class Notes(models.Model):
    notes = models.CharField(max_length=255)
    last_updated = models.DateTimeField(auto_now_add=True)
    FirstModel = models.ForeignKey(FirstModel, related_name='Notes')
    User = models.ForeignKey(User, related_name='Notes')


class Blog(models.Model):
    post = models.TextField(max_length=4000)
    Notes = models.ForeignKey(Notes, related_name='blog')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    created_by = models.ForeignKey(User, related_name='posts')
    updated_by = models.ForeignKey(User, null=True, related_name='+')

```

Now python needs to read your models file and prepare migration files for your database by running this command

```
python manage.py makemigrations
```

then migrate the database using this command

```
python manage.py migrate

```

## The Django Shell

Access the Shell for your project with

```
python manage.py shell
```

import your models

```
from AppName.models import ModelName
```

create a new object

```
newItem = ModelName(name='First', description='The first item in my database.')
```

save the new item to the database

```
board.save()
```

You can access other functions through the ModelName.object interface.

for example ModelName.objects.create()/.get()/.filter()/.all()/.delete()/.update()

### Register Models with admin site

add the following to admin.py

```
from django.contrib import admin
from .models import ModelName

admin.site.register(ModelName)
```

create an admin superuser

```
python manage.py createsuperuser
```

run the devserver and checkout /admin/

## Adding a View with a Template

add the following to your views.py

```
from django.shortcuts import render #For Rendering templates
from django.http import HttpResponse #For rendering strings as responses

def SecondView(request):
    return render(request, 'AppName/filename.html', {"data": Model.objects.all()})

```

Your templates should be located in project/AppName/templates/AppName/filename.html

Templating in Django uses a templating language called Jinja

## Jinja

interpolate a variable

```
{{variableName}}
```

looping over a list

```
{% for post in posts %}
    <div>
        <p>published: {{ post.published_date }}</p>
        <h2><a href="">{{ post.title }}</a></h2>
        <p>{{ post.text|linebreaksbr }}</p>
    </div>
{% endfor %}
```

## Deploying to Heroku

### Step 1 - Initializing your Git Repository

In your projects root folder (the one with manage.py), initialize a git repository.

Before committing add the following to your gitignore which should cover most python project, use gitignore.io to look up useful gitignore entries for different project and IDE's

```
### Django ###
*.log
*.pot
*.pyc
__pycache__/
local_settings.py
db.sqlite3
db.sqlite3-journal
media

# If your build process includes running collectstatic, then you probably don't need or want to include staticfiles/
# in your Git repository. Update and uncomment the following line accordingly.
# <django-project-name>/staticfiles/

### Django.Python Stack ###
# Byte-compiled / optimized / DLL files
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
pip-wheel-metadata/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py,cover
.hypothesis/
.pytest_cache/

# Translations
*.mo

# Django stuff:

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
.python-version

# pipenv
#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
#   However, in case of collaboration, if having platform-specific dependencies or dependencies
#   having no cross-platform support, pipenv may install dependencies that don't work, or not
#   install all needed dependencies.
#Pipfile.lock

# PEP 582; used by e.g. github.com/David-OConnor/pyflow
__pypackages__/

# Celery stuff
celerybeat-schedule
celerybeat.pid

# SageMath parsed files
*.sage.py

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

### PyCharm ###
# Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf

# Generated files
.idea/**/contentModel.xml

# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml

# Gradle
.idea/**/gradle.xml
.idea/**/libraries

# Gradle and Maven with auto-import
# When using Gradle or Maven with auto-import, you should exclude module files,
# since they will be recreated, and may cause churn.  Uncomment if using
# auto-import.
# .idea/artifacts
# .idea/compiler.xml
# .idea/jarRepositories.xml
# .idea/modules.xml
# .idea/*.iml
# .idea/modules
# *.iml
# *.ipr

# CMake
cmake-build-*/

# Mongo Explorer plugin
.idea/**/mongoSettings.xml

# File-based project format
*.iws

# IntelliJ
out/

# mpeltonen/sbt-idea plugin
.idea_modules/

# JIRA plugin
atlassian-ide-plugin.xml

# Cursive Clojure plugin
.idea/replstate.xml

# Crashlytics plugin (for Android Studio and IntelliJ)
com_crashlytics_export_strings.xml
crashlytics.properties
crashlytics-build.properties
fabric.properties

# Editor-based Rest Client
.idea/httpRequests

# Android studio 3.1+ serialized cache file
.idea/caches/build_file_checksums.ser

### PyCharm Patch ###
# Comment Reason: https://github.com/joeblau/gitignore.io/issues/186#issuecomment-215987721

# *.iml
# modules.xml
# .idea/misc.xml
# *.ipr

# Sonarlint plugin
.idea/**/sonarlint/

# SonarQube Plugin
.idea/**/sonarIssues.xml

# Markdown Navigator plugin
.idea/**/markdown-navigator.xml
.idea/**/markdown-navigator-enh.xml
.idea/**/markdown-navigator/

# Cache file creation bug
# See https://youtrack.jetbrains.com/issue/JBR-2257
.idea/$CACHE_FILE$

# End of https://www.toptal.com/developers/gitignore/api/django,pycharm
```

### Step 2 - Connect to Heroku Project

Run "heroku create" in this folder and it will create a heroku project and add a remote called heroku for pushing your project to heroku

### Step 3 - Install Gunicorn

Gunicorn is a non-blocking web server library for deploying python apps.

```
pip install gunicorn
```

### Step 4 - Create Procfile

Create a file called "Procfile" in your root. The Procfile tells heroku was processes to run to deploy your project (with node buildpacks it wasn't needed as it could find the main file in your package.json and just run that, but if you needed to run a different file then you would need a procfile for node projects.) We want to tell Heroku is should run our project using Gunicorn which runs our project using WSGI, so we need to run it via our WSGI.py.

```
web: gunicorn mysite.wsgi
```

### Step 5 - Django Heroku Library

Deploying Django and getting all the settings right can be a real pain, do there is a django-heroku library which helps manage a lot of this configuration for you.

```
pip install django-heroku
```

at the top of settings.py import the moduel

```
import django_heroku
```

at the BOTTOM of settings.py add the following

```
django_heroku.settings(locals())
```

this will make sure django uses all your heroku config vars and provisioned databases

### Step 6 - Add variables for static assets

To set your porject up for heroku will handle static assets look for the following part of settings.py

```
STATIC_URL = '/static/'
```

and change it to

```
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')
```

### Step 7 - Create requirements.txt

So heroku knows which dependencies to install we need to add a requirements.txt file to the root of our project. So in the root you should run...

```
pip freeze > requirements.txt
```

### Step 8 - runtime.txt

This is a file that specifies what version of python heroku should use

```
python-3.7.6
```

### Step 9 - push to heroku

-   commit your project then run

```
git push heroku master
```
