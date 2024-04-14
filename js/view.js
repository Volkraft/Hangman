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
    showStatus(flag){
        let title = flag ? 'You win' : 'You loose';
        let imgName = flag ? 'happySmile' : 'sadSmile';
        const status = `
        <div class="status">
        <div class="status-popup">
        <p class="status-title">${title}</p>
            <img class="status-picture" src="./img/${imgName}.png" alt="">
            <button class="status-restart">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.99988C16.9706 2.99988 21 7.02931 21 11.9999C21 16.9704 16.9706 20.9999 12 20.9999C7.02944 20.9999 3 16.9704 3 11.9999C3 9.17261 4.30367 6.64983 6.34267 4.99988" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 4.49988H7V8.49988" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        </div>
        `
        document.body.insertAdjacentHTML('beforeend', status);
    }
}

