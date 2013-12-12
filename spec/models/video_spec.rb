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

require 'spec_helper'

describe Video do
  pending "add some examples to (or delete) #{__FILE__}"
end
