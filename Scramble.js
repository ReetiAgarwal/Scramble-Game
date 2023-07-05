const btn = document.querySelector('.btn');
const data = document.querySelector('.data');
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');

let play = false;
const words = ['hello','orange','apple','guava','bird','plant','class']
let word,final;

const genWord=()=>{
    const i = Math.floor(Math.random()*words.length);
    return words[i];
}

const Scramble = (arr) =>{
    for(i=0;i<arr.length;i++)
    {
        let temp = arr[i];
        let j = Math.floor(Math.random()*arr.length);
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join("");
}

btn.addEventListener('click',function(){
    if(!play)
    {
        play = true;
        btn.innerText = "GUESS";
        guess.classList.remove("hidden");
        word = genWord();
        final = Scramble(word.split(""));
        msg.innerText = `Guess the word : ${final}`;
    }
    else
    {
        if(guess.value==word)
        {
            msg.innerText="Yay you got it correct!";
            play = false;
            btn.innerText = "START AGAIN";
            guess.value="";
            guess.classList.add("hidden");
        }
        else
        {
            msg.innerText=` Its wrong!Please try again : ${final} `;
            guess.value="";
        }
    }
})