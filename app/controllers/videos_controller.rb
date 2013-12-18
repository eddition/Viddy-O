class VideosController < ApplicationController

  def index
  end

  def new
  end

  def create
    video = Video.new(params['video'])
    comp = Compilation.find(params['video']['compilation_id'])
    if video.save
      comp.videos << video
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
