export default class Model {
    constructor(){
        this.question = '';
        this.secretWord = '';
        this.getRandom(this.questions)
        console.log(this.question, this.secretWord);
        
    }
    questions = [
        ['What is the capital of Japan?', 'Tokyo'],
        ['Who is known as the father of modern physics?', 'Albert Einstein'],
        ['What is the largest mammal on Earth?', 'Blue whale'],
        ['What is the chemical symbol for gold?', 'Au'],
        ['Which planet is known as the Red Planet?', 'Mars'],
        ['Who wrote the famous novel "1984"?', 'George Orwell'],
        ['What is the chemical name for table salt?', 'Sodium chloride'],
        ['What is the process by which plants make their food called?', 'Photosynthesis'],
        ['Which famous scientist formulated the theory of relativity?', 'Albert Einstein'],
        ['What is the largest ocean on Earth?', 'Pacific Ocean'],
    ]
    

    getRandom(questions){
        const randomIndex = Math.floor(Math.random() * questions.length);
        const currentCouple = questions[randomIndex];
        this.question = currentCouple[0];
        this.secretWord = currentCouple[1];
    }
}