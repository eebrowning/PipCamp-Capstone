from app.models import db, Location


def seed_locations():
    demo = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'nothing',
    image_2_url = 'nothing',
    description= 'heres a description',
    campsite_info = 'campsite',
    essential_info = 'essential',
    amenities_info = 'amenities',
    details_info = 'details'
    )
    db.session.add(demo)
    db.session.commit()


def undo_locations():
  db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE')
  db.session.commit()
