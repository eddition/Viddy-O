class VideosController < ApplicationController

  def index
  end

  def new
  end

  def create
    video = Video.new(params['video'])

    if video.save
      render json: video
    else
      render status: :unprocessable_entity
    end
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
