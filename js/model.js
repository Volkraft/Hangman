export default class Model {
    constructor(){
        this.question = '';
        this.secretWord = '';
        this.getRandom(this.questions)
        this.counter = 0;
        this.isWin = false;
    }
    questions = [
        ['What is the capital of Japan?', 'tokyo'],
        ['Who is known as the father of modern physics?', 'albert einstein'],
        ['What is the largest mammal on Earth?', 'blue whale'],
        ['What is the chemical symbol for gold?', 'au'],
        ['Which planet is known as the Red Planet?', 'mars'],
        ['Who wrote the famous novel "1984"?', 'george orwell'],
        ['What is the chemical name for table salt?', 'sodium chloride'],
        ['What is the process by which plants make their food called?', 'photosynthesis'],
        ['Which famous scientist formulated the theory of relativity?', 'albert einstein'],
        ['What is the largest ocean on Earth?', 'pacific ocean'],
    ]
    keyboard = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 
        'g', 'h', 'j','k', 'l','z','x','c','v','b','n','m',
        ' '
        ];
    
    checkedKeys = []

    guessedKeys = []
    
    getRandom(questions){
        const randomIndex = Math.floor(Math.random() * questions.length);
        const currentCouple = questions[randomIndex];
        this.question = currentCouple[0];
        this.secretWord = currentCouple[1];
    }
    checkKeyInWord(keyData){
        const objectGuess  = {
            letter: null,
            indexs: [],
        }
        for (let index = 0; index < this.secretWord.length; index++) {
            if (this.secretWord[index].toLowerCase() ===  keyData){
                this.guessedKeys.push(keyData);
                this.checkedWin()
                objectGuess.indexs.push(index);
                objectGuess.letter = keyData;
            }
        }
        return objectGuess;
    }
    counterMistake(letter){
        if (this.secretWord.indexOf(letter) === -1 &&
            this.checkedKeys.indexOf(letter) === -1 &&
            this.keyboard.indexOf(letter) !== -1){
            this.counter++;
        }
        
    }
    checkedPressedKeys(key){
        if (this.checkedKeys.indexOf(key) === -1){ 
            this.checkedKeys.push(key);
        }
    }
    checkedWin(){
        if (this.guessedKeys.length === this.secretWord.length){
            this.isWin = true;
        };
    }
}


// 1. Создать массив отгаданых букв
// 2. В массив пушить букву если она есть в слове
// 3.Проверка на длину секрет ворда и массива отгаданых букв