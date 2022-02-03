class CoachesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :delete]

  def show
    @coach = Coach.find(params[:id])
  end

  def new
    @coach = Coach.new
  end

  def create
    @coach = Coach.new(coach_params)
    if @coach.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

  def coach_params
    params.require(:coach).permit(:name, :description, :about_me, :diplomes, :photo)
  end
end
