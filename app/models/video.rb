# == Schema Information
#
# Table name: videos
#
#  id             :integer          not null, primary key
#  compilation_id :integer
#  video_url      :string(255)
#  seq_id         :string(255)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Video < ActiveRecord::Base
  attr_accessible :compilation_id, :seq_id, :video_url

  belongs_to :compilation
end
