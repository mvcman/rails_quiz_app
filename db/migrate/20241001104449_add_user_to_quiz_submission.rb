class AddUserToQuizSubmission < ActiveRecord::Migration[7.1]
  def change
    add_reference :quiz_submissions, :user, null: false, foreign_key: true
  end
end
