class VideosController < ApplicationController

  def index
  end

  def new
  end

  def create
    @new_video = Video.create(params['video'])
    format.json { render json: @new_video, status: :created, location: @new_video }
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
