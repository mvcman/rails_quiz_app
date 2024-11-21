class Quiz < ApplicationRecord
    has_many :questions, dependent: :destroy 
    accepts_nested_attributes_for :questions, reject_if: :all_blank, allow_destroy: true

    def correct_answer_list 
        send("answer#{correct_answer}")
    end 
end
