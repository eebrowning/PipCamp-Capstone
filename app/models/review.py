from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    location_id = db.Column(
        db.Integer, db.ForeignKey('locations.id'), nullable=False)
    content = db.Column(db.String)
    recommends = db.Column(db.Boolean, nullable=False)

    user = db.relationship('User', back_populates='reviews')
    restaurant = db.relationship('Location', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'location_id': self.location_id,
            'content': self.content,
            'recommends': self.recommends
        }
