class Video < ActiveRecord::Base
  attr_accessible :compilation_id, :seq_id, :video_url

  belongs_to :compilation
end
