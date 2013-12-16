# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'spec_helper'

describe User do
  it "cannot create a user without a name"
  it "cannot create a user without an email"
  it "cannot create a user with the same email"
  it "will ensure that password and password confirmation are matching"
end
