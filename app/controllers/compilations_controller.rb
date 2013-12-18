class CompilationsController < ApplicationController

  def index
    @comp = Compilation.find(params['id'])
    binding.pry
    if @comp.videos > 0
      render json: @comp
    else
      render :nothing => true
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
