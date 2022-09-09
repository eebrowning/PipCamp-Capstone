from flask import Blueprint, redirect, render_template, request
from app.models import db, Review
from app.forms.review_form import ReviewForm

reviews_routes = Blueprint('reviews',__name__)

# tailor for json 
def validation_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


#GET all reviews
@reviews_routes.route('/all')
def get_reviews():
    reviews = Review.query.all()
    # print(">>>", reviews, '<<<')
    # print("-------------------")

    all_reviews = [review.to_dict() for review in reviews]
    return {'reviews': all_reviews}


#POST review 
@reviews_routes.route('/new', methods=['POST'])
def create_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if(form.validate_on_submit()):
        review = Review(
            user_id = form.data['user_id'],
            location_id = form.data['location_id'],
            content = form.data['content'],
            recommends = form.data['recommends']
        )
        print('----------')
        print('>>>',review)
        print('----------')
    if form.errors:
        print('ERRORS >>>>', form.errors)
        return{"errors": validation_to_error_messages(form.errors)}, 400

    db.session.add(review)
    db.session.commit()
    return review.to_dict()
    # else:
    #     return {'message': 'reponse bad'}


@reviews_routes.route('/<reviewId>/edit', methods=['PUT'])
def update_review(reviewId):
    # print('>>>>--------<<<<')
    # print('>>>>',reviewId, '<<<<')
    # print('>>>>--------<<<<')

    form= ReviewForm()
    review= Review.query.get(reviewId)
    form['csrf_token'].data = request.cookies['csrf_token']
   
    if form.validate_on_submit() :
        review.user_id=form.data['user_id']
        review.location_id=form.data['location_id']
        review.content= form.data['content']
        review.recommends= form.data['recommends']
    if form.errors:
        print('>>>>',form.errors, '<<<<')
        return {'errors': validation_to_error_messages(form.errors)}, 400
    db.session.commit()
    return review.to_dict()

@reviews_routes.route('/<reviewId>/delete', methods=["DELETE"])
def delete_review(reviewId):
    review= Review.query.get(reviewId)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
