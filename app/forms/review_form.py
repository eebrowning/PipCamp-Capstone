from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, NumberRange

class ReviewForm(FlaskForm):

    user_id = IntegerField('userId')
    location_id = IntegerField('locationId')
    content = StringField('Review',validators=[DataRequired(message="Content required for review submission")])
    recommends = BooleanField('Recommended')
