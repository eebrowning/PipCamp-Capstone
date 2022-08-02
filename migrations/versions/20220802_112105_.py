"""empty message

Revision ID: 6eea5fc6a348
Revises: 32ac711eb336
Create Date: 2022-08-02 11:21:05.791236

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6eea5fc6a348'
down_revision = '32ac711eb336'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('locations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('image_1_url', sa.String(), nullable=False),
    sa.Column('image_2_url', sa.String(), nullable=True),
    sa.Column('campsite_info', sa.String(), nullable=False),
    sa.Column('essential_info', sa.String(), nullable=False),
    sa.Column('amenities_info', sa.String(), nullable=False),
    sa.Column('details_info', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('location_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(), nullable=True),
    sa.Column('recommends', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['location_id'], ['locations.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('locations')
    # ### end Alembic commands ###
