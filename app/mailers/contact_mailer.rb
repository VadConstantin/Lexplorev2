class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    @contact = contact
    mail(to: 'constantin.natacha@gmail.com', subject: 'Nouvelle demande Lexplore')
  end
end
