class PagesController < ApplicationController
  before_action :authenticate_user!, only: :admin
  # skip_before_action :authenticate_user!, :raise => false

  def home
    @users = User.all
    @coach = Coach.last
  end

  def admin
    @coaches = Coach.all
  end

  def programmes
  end

  def coaching_cible
  end

  def bilan
  end

  def coaching
    @contact = Contact.new
  end

  def contact
  end

  def reasons
  end

  def apropos
  end

end
