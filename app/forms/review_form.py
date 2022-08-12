from xml.dom import ValidationErr
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, BooleanField
from wtforms.validators import DataRequired, ValidationError

def silly_length(form, field):
    # Checking if user exists
    field = field.data
    
    if len(field)>300:
        raise ValidationError('Please enter something shorter than 300 characters')


class ReviewForm(FlaskForm):

    user_id = IntegerField('userId')
    location_id = IntegerField('locationId')
    content = StringField('Review',validators=[DataRequired(message="Content required for review submission"), silly_length])
    recommends = BooleanField('Recommended')
