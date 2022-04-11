class ContactMailer < ApplicationMailer

  def contact(user)
    @user = user
    mail(to: 'contact@test.fr', subject: 'sujet de test')
  end
end
