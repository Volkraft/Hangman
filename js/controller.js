import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.question, model.secretWord, model.keyboard, model.counter);
view.elements.keyboard.addEventListener('click', (e) => {
    const keyBtn = e.target.closest('.keyboard__key');
    if (keyBtn) {        
        const keyData = keyBtn.dataset.key;
        model.counterMistake(keyData)
        view.renderLetter(model.checkKeyInWord(keyData));
        // view.renderMistakeCounter(model.counter)
        model.checkedPressedKeys(keyData)
    }

})
window.addEventListener('keyup', (e) => {
    const keyData = e.key;
    model.counterMistake(keyData)
    view.renderLetter(model.checkKeyInWord(keyData));
    // console.log(`Счетчик из модели ${model.counter}`);
    // view.renderMistakeCounter(model.counter)
    model.checkedPressedKeys(keyData)
})
