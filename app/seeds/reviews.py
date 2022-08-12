from app.models import db, Review


def seed_reviews():
    demo = Review(
    user_id = 3,
            location_id = 2,
            content = "I managed to keep my radiation sickness down while here!",
            recommends = True
    )
    demo2 = Review(
    user_id = 2,
            location_id = 1,
            content = "It was about as spooky as you'd expect an abandoned school to be 10/10",
            recommends = True
    )
    demo3 = Review(
    user_id = 3,
            location_id = 1,
            content = "I'm just a negative person.",
            recommends = False
    )
    demo4 = Review(
    user_id = 2,
            location_id = 2,
            content = "I managed to keep my radiation sickness down while here!",
            recommends = True
    )
    demo5 = Review(
    user_id = 2,
            location_id = 3,
            content = "Who could have done this? must be aliens...",
            recommends = True
    )
    demo6 = Review(
    user_id = 2,
            location_id = 10,
            content = "My skin... It's melting...",
            recommends = False
    )
    demo7 = Review(
    user_id = 2,
            location_id = 5,
            content = "I FOUND THE ALIENS WHAT MADE THAT CARHENGE!",
            recommends = True
    )
    demo8 = Review(
    user_id = 3,
            location_id = 10,
            content = "Deathclaw ate my baby!!",
            recommends = False
    )
    demo9 = Review(
    user_id = 2,
            location_id = 10,
            content = "I have a noticable glow after my stay here 10/10",
            recommends = True
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


    db.session.commit()


def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE')
  db.session.commit()
