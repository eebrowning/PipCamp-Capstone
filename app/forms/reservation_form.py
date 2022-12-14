from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField, TimeField
from wtforms.validators import DataRequired, ValidationError


def validate_date(form, d):

    if form.data['res_date_start'] > form.data['res_date_end']:

        raise ValidationError('Start date must be before end date')
    elif int((form.data['res_date_end'] - form.data['res_date_start']).days) > 30:
        raise ValidationError('Max stay 30 days')

    


class ReservationForm(FlaskForm):
    user_id = IntegerField('userId')
    location_id = IntegerField('locationId')
    res_date_start = DateField('Date', validators=[DataRequired(message="Start Date must be provided"), validate_date])
    res_date_end = DateField('Date', validators=[DataRequired(message="End Date must be provided")])
