export default class View {
    constructor(strQuestion, secretWord, renderKeyboard, counter){
        this.renderQuestion(strQuestion);
        this.renderTemplateSecretWord(secretWord);
        this.renderKeyboard(renderKeyboard);
        this.renderMistakeCounter(counter);
        
    }
    elements = {
        keyboard: document.querySelector('.keyboard')
    };
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
    }
    renderKeyboard(keyboard){
        
        for (let index = 0; index < keyboard.length; index++) {
            const li = document.createElement('li');
            li.classList.add('keyboard__item');
            const button = document.createElement('button');
            button.classList.add('keyboard__key');
            button.innerText = keyboard[index];
            if (index === keyboard.length - 1){
                button.innerText = '_________________';
            }
            button.dataset.key = keyboard[index];
            li.insertAdjacentElement('afterbegin', button);
            this.elements.keyboard.insertAdjacentElement('beforeend', li);
            
        }
    }

    renderLetter(objectGuess){     
        const templateItem = document.querySelectorAll('.template-item') 
        for (let i = 0; i < templateItem.length; i++) {
            for (let j = 0; j < objectGuess.indexs.length; j++) {
                if (i === objectGuess.indexs[j]) {
                    templateItem[i].innerText = objectGuess.letter;
                }
            }
            
        }
    }

    renderMistakeCounter(counter){
        const currentCounter = document.querySelector('.errors__current-counter');
        currentCounter.innerText = counter;
    }

    lockButtons(array){
        const buttons = document.querySelectorAll('.keyboard__key')
        buttons.forEach(element => {
            if (array.indexOf(element.dataset.key) !== -1 ){
                element.classList.add('pressed');
            }
        });
    }
}

