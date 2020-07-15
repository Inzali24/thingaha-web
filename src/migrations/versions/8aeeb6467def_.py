"""empty message

Revision ID: 8aeeb6467def
Revises: 
Create Date: 2020-07-15 23:31:54.543411

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8aeeb6467def'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('address', sa.UnicodeText(), nullable=True),
    sa.Column('password', sa.Text(), nullable=True),
    sa.Column('role', sa.Enum('sub_admin', 'donator', 'admin', name='role'), nullable=True),
    sa.Column('country', sa.Enum('jp', 'mm', 'sg', 'th', name='country'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
