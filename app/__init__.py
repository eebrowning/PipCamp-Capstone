import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

# import ALL MODELS here, regardless of use
from .models import db, User, Location, Review

from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.locations_routes import locations_routes
from .api.reviews_routes import reviews_routes
from .api.reservations_routes import reservation_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(locations_routes, url_prefix='/api/locations')
app.register_blueprint(reviews_routes, url_prefix='/api/reviews')
app.register_blueprint(reservation_routes, url_prefix='/api/reservations')

db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........
@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')

@app.route('/all/locations')
def getAllLocations():
    locations= Location.query.all()
    locationsObj= [{
        'id': location.id,
        'user_id':location.user_id,
        'name': location.name,
        'image_1_url':location.image_1_url,
        'image_2_url':location.image_2_url,
        'description':location.description,
        'campsite_info': location.campsite_info,
        'essential_info':location.essential_info,
        'amenities_info': location.amenities_info,
        'details_info': location.details_info
    }for location in locations]
    return {'locations':locationsObj}
