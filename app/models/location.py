from .db import db


class Location(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String, nullable=False)
    image_1_url = db.Column(db.String, nullable=False)
    image_2_url = db.Column(db.String)
    campsite_info = db.Column(db.String, nullable=False)
    essential_info = db.Column(db.String, nullable=False)
    amenities_info = db.Column(db.String, nullable=False)
    details_info = db.Column(db.String, nullable=False)

    users = db.relationship('User', back_populates='locations')
    reviews = db.relationship(
        'Review', back_populates='location', cascade='all, delete')
    # bookings = db.relationship( #worry about this later, get your pass first.
    #     'Booking', back_populates='location', cascade='all, delete')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'image_1_url': self.image_1_url,
            'image_2_url': self.image_2_url,
            'campsite_info': self.campsite_info,
            'essential_info': self.essential_info,
            'amenities_info': self.amenities_info,
            'details_info': self.details_info
        }
