require "test_helper"

class QuizSubmissionControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get quiz_submission_create_url
    assert_response :success
  end
end
