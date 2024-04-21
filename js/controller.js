import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.question, model.secretWord, model.keyboard, model.counter);
const eventHandler = (keyData) => {
    if (model.isPlay){
    model.counterMistake(keyData)
    view.renderLetter(model.checkKeyInWord(keyData));
    view.renderMistakeCounter(model.counter)
    if (model.counter > 0){
        view.renderLooser(model.partBodyLooser[model.counter - 1])
    }
    model.checkedPressedKeys(keyData)
    view.lockButtons(model.checkedKeys)
    if (model.isWin){
        view.showStatus(true)
    }
    else if (model.isDef){
        view.showStatus(false)
    }
    }

};
view.elements.keyboard.addEventListener('click', (e) => {
    const keyBtn = e.target.closest('.keyboard__key');
    if (keyBtn) {        
        const keyData = keyBtn.dataset.key;
        eventHandler(keyData);
    }
})
window.addEventListener('keyup', (e) => {
    const keyData = e.key.toLowerCase();
    eventHandler(keyData);
})
// 1. Привязать рендер неудачника к счетчику
// 2. 
