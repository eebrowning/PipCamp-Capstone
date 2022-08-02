from shutil import register_unpack_format
from flask import Blueprint, redirect, render_template, request
from app.forms.location_form import NewLocationForm
from app.models import db,User,Location
from flask_login import login_required

locations_routes = Blueprint('locations', __name__)

# tailor for json 
def validation_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@locations_routes.route('/new_location', methods=['GET','POST'])
# @login_required
def newLocationForm():
    form= NewLocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        location= Location(
            user_id = form.data['user_id'],
            name = form.data['name'],
            image_1_url = form.data['image_1_url'],
            image_2_url = form.data['image_2_url'],
            campsite_info = form.data['campsite_info'],
            essential_info = form.data['essential_info'],
            amenities_info = form.data['amenities_info'],
            details_info = form.data['details_info']
        )
    if form.errors:
        print('ERRORS >>>>', form.errors)
        return{"errors": validation_to_error_messages}
    db.session.add(location)
    db.session.commit()
    return location.to_dict()
