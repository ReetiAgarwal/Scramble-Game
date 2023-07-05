const btn = document.querySelector('.btn');
const data = document.querySelector('.data');
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');

let play = false,level=1;
const words = ['bird','plant','orange','imagine','aggressive','acknowledgement','fraudulent','circumstances']
let word,final;

const genWord=()=>{
    return words[level-1];
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
        msg.innerHTML = `LEVEL ${level}<br><br>Guess the word : <span class="word">${final}</span>`;
    }
    else
    {
        if(guess.value==word)
        {
            if(level==words.length)
            {
                msg.innerHTML=`YAY you have done it! You have very good vocabulary!`;
                play = false;
                btn.classList.add("hidden");
                guess.classList.add("hidden");
            }
            else
            {
                msg.innerHTML="Yay you got it correct!<i class='fa fa-face-awesome' style='color: #f1be04;'></i>";
                play = false;
                btn.innerText = "NEXT LEVEL";
                guess.value="";
                guess.classList.add("hidden");
                level++;
            }
        }
        else
        {
            msg.innerText=` Its wrong!Please try again : ${final} `;
            guess.value="";
        }
    }
})