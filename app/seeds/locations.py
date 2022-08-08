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
    demo2 = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://cdn.discordapp.com/attachments/643598986518855748/655169078498951179/855de687e6a406fe1d8ec03705942e8c.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 2PM-Before 1PM-1',
    description= "new joe\'s who dis?"
    )

    demo3 = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://cdn.discordapp.com/attachments/643598986518855748/655169078498951179/855de687e6a406fe1d8ec03705942e8c.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "new joe\'s who dis?"
    )

    demo4 = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://cdn.discordapp.com/attachments/643598986518855748/655169078498951179/855de687e6a406fe1d8ec03705942e8c.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "new joe\'s who dis?"
    )



    demo5 = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://cdn.discordapp.com/attachments/643598986518855748/655169078498951179/855de687e6a406fe1d8ec03705942e8c.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "new joe\'s who dis?"
    )



    demo6 = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://cdn.discordapp.com/attachments/643598986518855748/655169078498951179/855de687e6a406fe1d8ec03705942e8c.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "new joe\'s who dis?"
    )



    demo7 = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://cdn.discordapp.com/attachments/643598986518855748/655169078498951179/855de687e6a406fe1d8ec03705942e8c.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "new joe\'s who dis?"
    )



    demo8 = Location(
    user_id=1, 
    name='Joe\'s', 
    image_1_url = 'https://cdn.discordapp.com/attachments/643598986518855748/655169078498951179/855de687e6a406fe1d8ec03705942e8c.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "new joe\'s who dis?"
    )

    demo9 = Location(
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

    demo10 = Location(
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
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    
    db.session.commit()


def undo_locations():
  db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE')
  db.session.commit()
