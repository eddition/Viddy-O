# == Schema Information
#
# Table name: compilations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Compilation < ActiveRecord::Base
  attr_accessible :user_id

  # validates :user_id, presence: true

  belongs_to :user
  has_many :videos
end
