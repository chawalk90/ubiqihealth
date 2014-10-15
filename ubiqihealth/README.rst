KLIO corporate site
===================


Deployment instructions
-----------------------


::

    $ git clone https://bitbucket.org/ubiqihealth/corporate_site
    $ cd corporate_site
    $ virtualenv venv
    $ source venv/bin/activate
    $ pip install -r requirements.txt
    $ cp default_local_settings.py local_settings.py

Make appropriate changes in local_settings.py if needed. Set DATABASE options

::

    $ python manage.py syncdb --all --no-initial-data
    $ python manage.py migrate --fake
    $ python manage.py loaddata fixtures/pages_initial.json
    $ python manage.py loaddata app/fixtures/initial_data.json


IF deploying locally you can stop here and run the following:

::

    $ python manage.py runserver 



Now you should install WSGI server (uwsgi, gunicorn), like this:

::

    $ pip install uwsgi


Make sure that nginx/apache HTTP server is set up properly to work with WSGI
server and requests to ``/static/`` url is forwarding to ``static`` dir in
``corporate_site`` dir

::

    $ python manage.py collectstatic

Now you can launch WSGI server
