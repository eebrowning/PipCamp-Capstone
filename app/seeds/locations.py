from app.models import db, Location


def seed_locations():
    demo = Location(
    user_id=1, 
    name="Suffolk County Charter School", 
    image_1_url = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/Fallout-4-Suffolk-County-Charter-School.jpg',
    image_2_url = '',
    campsite_info = 'Tent-10-20-1-true',
    essential_info = "false-true-true",
    amenities_info = "true-true-true-true-false-false",
    details_info = "Make yourself at home-After 3PM Before 7AM-1",
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )
    demo2 = Location(
    user_id=1, 
    name="Cranberry Island Shed", 
    image_1_url = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/09/Fallout-4-Cranberry-Island-Shed-Cropped.jpg',
    image_2_url = '',
    campsite_info = 'Lodge-1-2-1-true',
    essential_info = "false-true-true",
    amenities_info = "true-true-true-true-false-false",
    details_info = "Make yourself at home-After 1PM Before 12PM-1",
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )
    demo3 = Location(
    user_id=1, 
    name="Carhenge", 
    image_1_url = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/08/Fallout-4-Carhenge.jpg',
    image_2_url = '',
    campsite_info = "Lodge-1-2-6-true",
    essential_info = "false-true-true",
    amenities_info = "true-true-true-true-false-false",
    details_info = "Make yourself at home-After 8PM Before 6AM-1",
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )


    demo4 = Location(
    user_id=1, 
    name="Parking Garage Dungeon", 
    image_1_url = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/08/Fallout-4-Milton-Parking-Garage.jpg',
    image_2_url = '',
    campsite_info = "Recreational Vehicle-100-1000-100-true",
    essential_info = "true-true-true",
    amenities_info = "true-false-true-false-false-true",
    details_info = "Make yourself at home-After 1PM Before 12PM-1",
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )


    demo5 = Location(
    user_id=1, 
    name="Crashed UFO", 
    image_1_url = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/08/Fallout-4-Crashed-UFO.jpg',
    image_2_url = '',
    campsite_info = "Lodge-1-1-1-true",
    essential_info = "false-true-false",
    amenities_info = "true-false-true-false-false-true",
    details_info = "Make yourself at home-After 1PM Before 12PM-1",
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )



    demo6 = Location(
    user_id=1, 
    name='Red Rocket Garage', 
    image_1_url = 'https://pm1.narvii.com/6521/d82a24490cbe5b646ab067fabe200711b7996216_hq.jpg',
    image_2_url = 'https://vignette.wikia.nocookie.net/fallout/images/0/09/Red_Rocket_truck_stop.jpg/revision/latest?cb=20151110105832',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )



    demo7 = Location(
    user_id=1, 
    name='Boston Harbor', 
    image_1_url = 'https://vignette.wikia.nocookie.net/fallout/images/0/05/BostonHarbor-Fallout4.jpg/revision/latest?cb=20161031005323',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )



    demo8 = Location(
    user_id=1, 
    name='Diamond City', 
    image_1_url = 'https://cdn.gamer-network.net/2015/usgamer/f4_02_01.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    )

    demo9 = Location(
    user_id=1, 
    name='Vault 111', 
    image_1_url = 'https://i.pinimg.com/originals/b5/68/61/b56861d66adb30a9cb9bd4132cb0cd58.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-0-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    )

    demo10 = Location(
    user_id=1, 
    name='The Glowing Sea', 
    image_1_url = 'https://www.pcgamesn.com/wp-content/uploads/2017/10/Fallout-4-deathclaw-glowing-sea.jpg',
    image_2_url = '',
    campsite_info = 'Tent-1-2-3-true',
    essential_info = 'false-true-false',
    amenities_info = 'true-false-true-false-true-false',
    details_info = 'Make yourself at home-After 1PM-Before 12PM-1',
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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
