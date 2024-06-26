import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.question, model.secretWord, model.keyboard, model.counter);
const eventHandler = (keyData) => {
    if (model.isPlay){
        model.counterMistake(keyData)
        view.renderLetter(model.checkKeyInWord(keyData));
        view.renderMistakeCounter(model.counter)
        if (model.checkedKeys.indexOf(keyData) === -1) {
            if (model.counter < 6){
                view.renderSound(model.currentSound);
            }
        }
        if (model.counter > 0){
            view.renderLooser(model.partBodyLooser[model.counter - 1])
        }
        if (model.isWin){
            view.showStatus(true)
            view.renderSound(model.sounds.victory)
            restart()
        }
        else if (model.isDef){
            view.showStatus(false)
            view.renderSound(model.currentSound);
            restart()
        }
        model.checkedPressedKeys(keyData)
        view.lockButtons(model.checkedKeys)
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
const restart = () =>{
    document.querySelector('#status-restart').addEventListener('click', () => {
        model.restart(); 
        view.restart();
        view.renderQuestion(model.question)
        view.renderTemplateSecretWord(model.secretWord);
        view.renderMistakeCounter(model.counter);
    })
}