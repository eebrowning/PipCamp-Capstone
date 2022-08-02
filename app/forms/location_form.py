
from typing import Text
from flask_wtf import FlaskForm
from sqlalchemy import Integer
from wtforms import StringField, IntegerField, SubmitField, TimeField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Regexp, ValidationError

# EXAMPLE VALIDATION
# def validate_close(form, open_hours):
#     # print('form data >>>>>>', form.data['open_hours'])
#     if form.data['open_hours']==form.data['close_hours']:
#         raise ValidationError('Open must be before close')


#pseudoforms for _info sections
# campsite_info(lodging, sites, max-guests, max-vehicles, disabled-accessible),  
CAMPSITE_LODGING= ['Tent',"Cabin", 'Recreational Vehicle']
# CAMPSITE_SITES= max
# CAMPSITE_GUESTS= max
# CAMPSITE_VEHICLES= max
# CAMPSITE_ACCESSIBLE= bool

# essentials_info(fires, bathrooms, pets), 
# ESSENTIALS_FIRES= bool
# ESSENTIALS_BATHROOMS= bool
# ESSENTIALS_PETS= bool

# amenities(tables, wifi, bins, water, kitchen, showers), 
# AMENITIES_TABLES= bool
# AMENITIES_WIFI= bool
# AMENITIES_BINS= bool
# AMENITIES_WATER= bool
# AMENITIES_KITCHEN= bool
# AMENITIES_SHOWERS= bool

# Details(check-in, check-out, arrival, min nights)
# DETAILS_CHECKIN= Integer
# DETAILS_CHECKOUT= Integer
DETAILS_ARRIVAL=['Meet and greet', 'Make yourself at home']
# DETAILS_MIN_NIGHTS=Integer

class NewLocationForm(FlaskForm):
    user_id = IntegerField('userId')
    name = StringField('Name', validators=[DataRequired(message="Please provide name of the restaurant.")])
    image_1_url = StringField('Main image', validators=[DataRequired(message="Please provide an image link.")])
    image_2_url = StringField('Secondary image')
    description= TextAreaField('Description', validators=[DataRequired(message="Please provide a description.")])
    campsite_info = StringField('Campsite info', validators=[DataRequired(message="Please provide complete Campsite info form.")])
    essential_info = StringField('Essential info', validators=[DataRequired(message="Please provide complete Essential info form.")])
    amenities_info = StringField('Campsite info', validators=[DataRequired(message="Please provide complete Amenities info form.")])
    details_info = StringField('Essential info', validators=[DataRequired(message="Please provide complete Details info form.")])
