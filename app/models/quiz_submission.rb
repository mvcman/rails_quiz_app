class QuizSubmission < ApplicationRecord
  belongs_to :quiz
  belongs_to :user

  after_initialize :init 

  def init 
    self.user_answers ||= {}
  end
end
