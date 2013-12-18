# == Schema Information
#
# Table name: compilations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# # == Schema Information
# #
# # Table name: compilations
# #
# #  id         :integer          not null, primary key
# #  user_id    :integer
# #  created_at :datetime         not null
# #  updated_at :datetime         not null
# #

# require 'spec_helper'

# describe Compilation do
#   it "invalid without a user_id" do
#     compilation = Compilation.new
#     expect(compilation).to_not be_valid
#   end
#   it "is valid when user_id is present" do
#     compilation = Compilation.new(user_id: 1)
#     expect(compilation).to be_true
#   end
# end
