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


@locations_routes.route('/<locationId>')
def singleRestaurant(locationId):
    location= Location.query.get(locationId)
    return location.to_dict()


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
            description= form.data['description'],
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


#Update a location
@locations_routes.route('/<locationId>/edit', methods=['PUT'])
def editRestaurant(locationId):
    location= Location.query.get(locationId)
    form= NewLocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data['name'])
    if(form.validate_on_submit()):
        location.name= form.data['name']
        location.image_1_url = form.data['image_1_url']
        location.image_2_url = form.data['image_2_url']
        location.campsite_info = form.data['campsite_info']
        location.essential_info = form.data['essential_info']
        location.amenities_info = form.data['amenities_info']
        location.details_info = form.data['details_info']
        location.description = form.data['description']

    if form.errors:
        print(form.errors)
        return {'errors': validation_to_error_messages(form.errors)}, 400

    db.session.commit()

    return location.to_dict()

#Delete a location
@locations_routes.route('/<locationId>/delete', methods=['DELETE'])
def deleteLocation(locationId):
    users = User.query.all()
    print('===============')
    print("USERS:: ", users)
    print('===============')
    location= Location.query.get(locationId)
    db.session.delete(location)
    db.session.commit()
    return location.to_dict()
