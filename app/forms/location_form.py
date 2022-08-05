
from typing import Text
from flask_wtf import FlaskForm
from jinja2 import Undefined
from sqlalchemy import Integer
from wtforms import StringField, IntegerField, SubmitField, TimeField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Regexp, ValidationError

# EXAMPLE VALIDATION
def validate_description(form, d):
    if not form.data['description'] or len(form.data['description']) <10:
        raise ValidationError('Description must be more than 10 characters')

def validate_campsite_info(form, d):
    for item in form.data['campsite_info'].split('-'):
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Campsite Info')


def validate_essential_info(form, d):
    for item in form.data['essential_info'].split('-'):
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Essential Info')

def validate_amenities_info(form, d):
    for item in form.data['amenities_info'].split('-'):
        print('>>>>', item, ' entry in amenities info')
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Amenities Info')

def validate_details_info(form, d):
    for item in form.data['details_info'].split('-'):
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Details Info')

def validate_image(form, d):
    url =form.data['image_1_url']
    if url.__contains__('jpg') or url.__contains__('png') or url.__contains__('jpeg') or url.__contains__('gif'):
        return None
    else:
        raise ValidationError('Incorrect Image Format: try a .png or .jpg link')
        



class NewLocationForm(FlaskForm):
    user_id = IntegerField('userId')
    name = StringField('Name', validators=[DataRequired(message="Please provide name of the restaurant.")])
    image_1_url = StringField('Main image', validators=[DataRequired(message="Please provide an image link."), validate_image])
    image_2_url = StringField('Secondary image')
    description= TextAreaField('Description', validators=[DataRequired(message="Please provide a description."), validate_description])
    campsite_info = StringField('Campsite info', validators=[DataRequired(message="Please provide complete Campsite info form."), validate_campsite_info])
    essential_info = StringField('Essential info', validators=[DataRequired(message="Please provide complete Essential info form."), validate_essential_info])
    amenities_info = StringField('Amenities info', validators=[DataRequired(message="Please provide complete Amenities info form."), validate_amenities_info])
    details_info = StringField('Essential info', validators=[DataRequired(message="Please provide complete Details info form."), validate_details_info])
