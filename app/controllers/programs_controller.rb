class ReviewsController < ApplicationController
  before_action :authenticate_user!, only: :admin
  # skip_before_action :authenticate_user!, :raise => false

  def index
    @programs = Program.all.where(coach_id: params[id])
  end

  def admin

  end

end
