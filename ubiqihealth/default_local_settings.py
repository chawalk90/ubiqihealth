
DEBUG = True

# Make these unique, and don't share it with anybody.
SECRET_KEY = "ecb48ca8-6460-401e-b27c-d8f53c907abcf384f3af-7bd9-4e59-8bae-ff26fad535997fc1d629-6120-483a-8eec-5d7c3513c956"
NEVERCACHE_KEY = "4e19ae1a-62b6-4f68-b7ec-302daae74ff62906d954-8140-49ec-87b1-f7d937a9e5ba18fda33f-c3f1-4a48-8e65-4d0b64ee936a"

DATABASES = {
    "default": {
        # Ends with "postgresql_psycopg2", "mysql", "sqlite3" or "oracle".
        "ENGINE": "django.db.backends.sqlite3",
        # DB name or path to database file if using sqlite3.
        "NAME": "dev.db",
        # Not used with sqlite3.
        "USER": "",
        # Not used with sqlite3.
        "PASSWORD": "",
        # Set to empty string for localhost. Not used with sqlite3.
        "HOST": "",
        # Set to empty string for default. Not used with sqlite3.
        "PORT": "",
    }
}
