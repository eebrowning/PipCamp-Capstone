from shutil import register_unpack_format
from flask import Blueprint, redirect, render_template, request
from app.forms.location_form import NewLocationForm

from app.models import db,User,Location
from flask_login import login_required
from app.aws_s3 import (
    upload_to_s3, allowed_file, get_unique_filename)
locations_routes = Blueprint('locations', __name__)

# tailor for json 
def validation_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


@locations_routes.route('/<locationId>')
def singleLocation(locationId):
    location= Location.query.get(locationId)
    return location.to_dict()


#AWS test START

# @locations_routes.route('/',methods=['post'])
# def upload():

#     if request.method == 'POST':
#         img = request.files['file']

#         if not allowed_file(img.filename):
#             return {"errors": "Invalid filetype: jpg, jpeg, png only."}, 400
#         img.filename = get_unique_filename(img.filename)
#         upload= upload_to_s3(img)
#         if 'url' not in upload:
#             return upload, 400
#         url= upload['url']
#         print(">>>>>>>>>>><<<<<<<<")
#         print(">>>>>>>>>>>",request, "<<<<<<<<")
#         print(">>>>>>>>>>><<<<<<<<")


#     return render_template("aws.html",msg=url)

########AWS test END


@locations_routes.route('/new_location', methods=['GET','POST'])
# @login_required
def newLocationForm():

    print(">>>>>>>>>>><<<<<<<< start attempt")
    print(">>>>>>>>>>>",request.form, "<<<<<<<<")
    print(">>>>>>>>>>>",'files in request:',len(request.files), "<<<<<<<<")
    print(">>>>>>>>>>><<<<<<<<")
    if "image_1_file" not in request.files:
        print('image_1_file not in request object')

    if 'image_1_file' in request.files:
        img = request.files['image_1_file']
        if not allowed_file(img.filename):
            return {"errors": "Invalid filetype: jpg, jpeg, png only."}, 400
        img.filename = get_unique_filename(img.filename)
        upload= upload_to_s3(img)
        if 'url' not in upload:
            return upload, 400
        url1= upload['url']

    if 'image_2_file' in request.files:
        img = request.files['image_2_file']
        if not allowed_file(img.filename):
            return {"errors": "Invalid filetype: jpg, jpeg, png only."}, 400
        img.filename = get_unique_filename(img.filename)
        upload= upload_to_s3(img)
        if 'url' not in upload:
            return upload, 400
        url2= upload['url']

    form = NewLocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if(form.validate_on_submit()):
        if 'image_1_file' in request.files:
            ifUrl1=url1
        else:
            ifUrl1=''
        if 'image_2_file' in request.files:
            ifUrl2=url2
        else:
            ifUrl2=''

        location= Location(
            user_id=form.data['user_id'],
            name= form.data['name'],
            image_1_url = ifUrl1,
            image_2_url = ifUrl2,
            campsite_info = form.data['campsite_info'],
            essential_info = form.data['essential_info'],
            amenities_info = form.data['amenities_info'],
            details_info = form.data['details_info'],
            description = form.data['description']
        )

    if form.errors:
        print('ERRORS >>>>', form.errors)
        return{"errors": validation_to_error_messages(form.errors)}, 400
    db.session.add(location)
    db.session.commit()
    return location.to_dict()




#Update a location
@locations_routes.route('/<locationId>/edit', methods=['PUT'])
def editLocation(locationId):

    location= Location.query.get(locationId)
    if 'image_1_file'in request.files:
        img = request.files['image_1_file']
        if not allowed_file(img.filename):
            return {"errors": "Invalid filetype: jpg, jpeg, png only."}, 400
        img.filename = get_unique_filename(img.filename)
        upload= upload_to_s3(img)
        if 'url' not in upload:
            return upload, 400
        url1= upload['url']

    if 'image_2_file' in request.files:
        img = request.files['image_2_file']
        if not allowed_file(img.filename):
            return {"errors": "Invalid filetype: jpg, jpeg, png only."}, 400
        img.filename = get_unique_filename(img.filename)
        upload= upload_to_s3(img)
        if 'url' not in upload:
            return upload, 400
        url2= upload['url']

    form = NewLocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if(form.validate_on_submit()):
        location.name= form.data['name']
        if 'image_1_file'in request.files:
            location.image_1_url = url1
        if 'image_2_file'in request.files:
            location.image_2_url = url2
        location.campsite_info = form.data['campsite_info']
        location.essential_info = form.data['essential_info']
        location.amenities_info = form.data['amenities_info']
        location.details_info = form.data['details_info']
        location.description = form.data['description']

    if form.errors:
        print('>>>>',form.errors, '<<<<')
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
