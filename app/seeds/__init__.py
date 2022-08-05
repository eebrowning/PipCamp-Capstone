from flask.cli import AppGroup
from app.seeds.locations import seed_locations, undo_locations
from app.seeds.reviews import seed_reviews, undo_reviews
from .users import seed_users, undo_users
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
        seed_users()
        seed_locations()
        seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_locations()
    undo_reviews()
    # Add other undo functions here
