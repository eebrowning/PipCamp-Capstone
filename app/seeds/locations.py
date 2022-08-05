from app.models import db, Location


def seed_locations():
    demo = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://i.imgur.com/9H2OQft.png',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "new joe\'s who dis?"
    )
    db.session.add(demo)
    db.session.commit()


def undo_locations():
  db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE')
  db.session.commit()
