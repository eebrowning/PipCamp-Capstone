from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password')
    preston = User(
        username='Preston Garvey', email='preston@aa.io', password='password')
    rhys = User(
        username='Knight Rhys', email='rhys@aa.io', password='password')
    carla = User(
        username='Trashcan Carla', email='carla@aa.io', password='password')
    mama = User(
        username='Mama Murphy', email='mama@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(preston)
    db.session.add(rhys)
    db.session.add(carla)
    db.session.add(mama)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
