import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        this.addQuestion();
        this.removeQuestion();
      }
    
      addQuestion() {
        const question = document.querySelectorAll(".add_question");
        question[0].addEventListener("click", (e) => {
            this.handleClick(question[0], e);
        });
      }
    
      handleClick(question, e) {
        console.log("got clicked");
        console.log("questionset ", question.dataset.fields);
        if (!question || !e) return;
        e.preventDefault();
        let time = new Date().getTime();
        let questionId = question.dataset.id;
        let regexp = questionId ? new RegExp(questionId, "g") : null;
        let newFields = regexp ? question.dataset.fields.replace(regexp, time) : null;
        newFields ? question.insertAdjacentHTML("beforebegin", newFields) : null;
      }
    
      removeQuestion() {
        document.addEventListener("click", (e) => {
          console.log("eerer", e.target.className);
          if (e.target && e.target.className.split(" ").includes("remove_question")) {
            this.handleRemoveClick(e.target, e);
          }
        });
      }
    
      handleRemoveClick(link, e) {
        console.log("got called remove ", link, e);
        if (!link || !e) return;
        e.preventDefault();
        let fieldParent = link.closest(".question-fields");
        let deleteField = fieldParent ? fieldParent.querySelector('input[type="hidden"]') : null;
    
        if (deleteField) {
          deleteField.value = 1;
          fieldParent.style.display = "none";
        }
      }
}
