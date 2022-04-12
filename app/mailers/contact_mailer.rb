class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    @contact = contact
    mail(to: 'contact@test.fr', subject: 'sujet de test')
  end
end
