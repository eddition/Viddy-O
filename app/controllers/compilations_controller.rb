class CompilationsController < ApplicationController

  def index
    comp = Compilation.find(params['id'])
    if comp.videos.length > 0
      render json: comp.videos
    else
      render nothing: true
    end
  end

  def new
  end

  def create
    @compilation = Compilation.create

    redirect_to @compilation
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
