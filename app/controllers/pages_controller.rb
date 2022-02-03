class PagesController < ApplicationController
  before_action :authenticate_user!, only: :admin
  # skip_before_action :authenticate_user!, :raise => false

  def home
    @users = User.all
  end

  def admin
  end

end
