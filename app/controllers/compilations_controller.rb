class CompilationsController < ApplicationController

  def index
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
