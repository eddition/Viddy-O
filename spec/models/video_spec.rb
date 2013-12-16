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
  it "is invalid without a compilation_id" do
    video = Video.new
    expect(video).to_not be_valid
  end
  it "is invalid without a video_url" do
    video = Video.new
    video.compilation_id = 1
    expect(video).to_not be_valid
  end
  it "it is valid only when all attributes are present" do
    video = Video.new
    video.compilation_id = 1
    video.video_url = "hello"
    expect(video).to be_valid
  end
end
