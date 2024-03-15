import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.question, model.secretWord, model.keyboard);
// // 1.  Забрать значение кнопки в 
// // 2. 
view.elements.keyboard.addEventListener('click', (e) => {
    const keyBtn = e.target.closest('.keyboard__key');
    if (keyBtn) {        
        const keyData = keyBtn.dataset.key;
        view.renderLetter(model.checkKeyInWord(keyData));
    }

})
