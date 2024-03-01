export default class View {
    constructor(strQuestion){
        this.renderQuestion(strQuestion);
        
    }
    renderQuestion(strQuestion){
        const question = document.querySelector('.question');
        question.innerText = strQuestion;

    }
}