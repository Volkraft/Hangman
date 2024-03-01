export default class View {
    constructor(strQuestion, secretWord){
        this.renderQuestion(strQuestion);
        this.renderTemplateSecretWord(secretWord);
        
    }
    renderQuestion(strQuestion){
        const question = document.querySelector('.question');
        question.innerText = strQuestion;
    }
    renderTemplateSecretWord(secretWord){
        const template = document.querySelector('.template');
        for (let index = 0; index < secretWord.length; index++) {
            const li = document.createElement('li');
            li.classList.add('template-item');
            li.innerText = '_';
            template.insertAdjacentElement('beforeend', li);
        }
        console.log(secretWord.length);
    }
}