class ReviewsController < ApplicationController
  before_action :authenticate_user!, only: :admin
  # skip_before_action :authenticate_user!, :raise => false

  def home
    @users = User.all
    @coach = Coach.last
  end

  def admin

  end

end
