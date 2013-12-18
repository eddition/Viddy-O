require 'spec_helper'

describe "The Home Page" do
  before(:each) do
    visit '/'
  end

  it "has a h1 viddy-o" do
    expect(page).to have_content("Viddy-O")
  end
  it "has a button that takes you to create a new compilation", :js => true do
    click_button("create a new compilation");
    expect(page).to have_content("search");
  end
end

describe "New Compilation Page", :js => true do
  before(:each) do
    visit '/';
    click_button("create a new compilation");
  end
  it "has a search input that allow you to search videos by hashtag" do
    expect(page).to have_css('#search-input')
  end

  it "has a div that users can add videos to" do
    expect(page).to have_content('Sequence')
  end

  it "returns a collection of videos when you search via hashtags" do
    fill_in 'search', :with => 'video'
    expect(page).to have_css(".ui-widget-header")
  end

  it "plays the video when you click preview"
  it "adds a video to the sequence when you click sequence"
  it "removes a video from the sequence when you click 'nope'"
  it "saves the videos "
end