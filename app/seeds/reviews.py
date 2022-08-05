from app.models import db, Review


def seed_reviews():
    demo = Review(
    user_id = 1,
            location_id = 1,
            content = "Joe's blows",
            recommends = True
    )
    db.session.add(demo)
    db.session.commit()


def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE')
  db.session.commit()
