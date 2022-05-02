class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    @contact = contact
    mail(to: 'arnocost01@gmail.com', subject: 'Nouvelle demande Lexplore')
  end
end
