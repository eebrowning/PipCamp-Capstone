
from typing import Text
from flask_wtf import FlaskForm
from jinja2 import Undefined
from sqlalchemy import Integer
from wtforms import StringField, IntegerField, SubmitField, TimeField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Regexp, ValidationError

def name_length(form, field):
    # Checking if user exists
    name = field.data
    
    if len(name)>40:
        raise ValidationError('Please enter a name shorter than 40 characters')

def silly_length(form, field):
    # Checking if user exists
    field = field.data
    
    if len(field)>100:
        raise ValidationError('Please enter something shorter than 100 characters')

def validate_description(form, d):
    if not form.data['description'] or len(form.data['description']) <10:
        raise ValidationError('Description must be more than 10 characters')

#campsite
def validate_campsite_info(form, d):
    for item in form.data['campsite_info'].split('-'):
        # print('>>>>>>>',)
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Campsite Info')
        

def validate_campsite_info_values(form, d):
    for item in form.data['campsite_info'].split('-'):
        if len(item)>2 and len(item)<4:
            raise ValidationError('Campsite Info: No values over 100')


#essential
def validate_essential_info(form, d):
    for item in form.data['essential_info'].split('-'):
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Essential Info')



#amenities
def validate_amenities_info(form, d):
    for item in form.data['amenities_info'].split('-'):
        # print('>>>>', item, ' entry in amenities info')
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Amenities Info')



#details
def validate_details_info(form, d):
    for item in form.data['details_info'].split('-'):
        if item == 'undefined' or item == '':
            raise ValidationError('Missing info in Details Info')

def validate_details_info_values(form, d):
    data= form.data['details_info'].split('-')
    print(">>>>>>>>>>>", data[len(data)-1],'<<<<<<<<<<<<<<<<')
    if int(data[len(data)-1]) > 7: 
            raise ValidationError('Detail Info: Max Min stay 7 days')


def validate_main_image(form, d):
    url =form.data['image_1_url']
    if not url.__contains__('http'):
        raise ValidationError('Image 1: Invalid link')
    if url.__contains__('jpg') or url.__contains__('png') or url.__contains__('jpeg') or url.__contains__('gif'):
        return None
    else:
        raise ValidationError('Image 1: provide a \'.png\' or \'.jpg\' link')
        

def validate_second_image(form, d):
    url =form.data['image_2_url']
    if len(url) == 0:
        return None
    if len(url) > 0 and not url.__contains__('http'):
        raise ValidationError('Image 2: Invalid link')
    if url.__contains__('jpg') or url.__contains__('png') or url.__contains__('jpeg') or url.__contains__('gif'):
        pass
    else:
        raise ValidationError('Image 2: provide a \'.png\' or \'.jpg\' link')

class NewLocationForm(FlaskForm):
    user_id = IntegerField('userId')
    name = StringField('Name', validators=[DataRequired(message="Please provide name of the location."), name_length])
    image_1_url = StringField('Main image', validators=[DataRequired(message="Please provide an image link."), validate_main_image])
    image_2_url = StringField('Secondary image', validators=[validate_second_image])
    description= TextAreaField('Description', validators=[DataRequired(message="Please provide a description."), validate_description])
    campsite_info = StringField('Campsite info', validators=[DataRequired(message="Please provide complete Campsite info form."), validate_campsite_info, validate_campsite_info_values])
    essential_info = StringField('Essential info', validators=[DataRequired(message="Please provide complete Essential info form."), validate_essential_info])
    amenities_info = StringField('Amenities info', validators=[DataRequired(message="Please provide complete Amenities info form."), validate_amenities_info])
    details_info = StringField('Details info', validators=[DataRequired(message="Please provide complete Details info form."), validate_details_info, validate_details_info_values])
