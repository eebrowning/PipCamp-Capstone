from .db import db

class Reservation(db.Model):
  __tablename__ = 'reservations'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
  res_date_start = db.Column(db.Date, nullable=False)
  res_date_end = db.Column(db.Date, nullable=False)


  user = db.relationship('User', back_populates='reservations')
  location = db.relationship('Location', back_populates='reservations')

  #Class method that converts Class Obj to JSON-able dictionary
  def to_dict(self):
    return {
        "id":self.id,
        "user_id": self.user_id,
        "location_id": self.location_id,
        "res_date_start": str(self.res_date_start),
        "res_date_end": str(self.res_date_end),

    }
