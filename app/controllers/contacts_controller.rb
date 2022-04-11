class ContactsController < ApplicationController
  def index
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to root_path
    else
      render :new
    end
  end

  def thanks
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :surname, :email, :content)
  end
end
