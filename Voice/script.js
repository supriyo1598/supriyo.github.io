const btn=document.querySelector('.btn');
const content=document.querySelector('.content');

//
const greetings=[
    'Im good you little piece of love',
    'Doing good homeboi',
    'leave me alone'
];
const weather=['Weather is fine','You need a tan'];

const SpeechRecognition=window.speechRecognition||window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.onstart=function(){
console.log("Voice Activated");
};

recognition.onresult=function (event){
  const current=event.resultIndex;
  
  const transcript = event.results[current][0].transcript;  
  say(transcript);
};


btn.addEventListener('click',()=>{
    recognition.start();
});

function say(message){
    const speech=new SpeechSynthesisUtterance();

    speech.text='I dont know What you said';
    
    if(message.includes('who are you')){
        speech.text='I am a simple assistant  Supriyo created me';
    }
    if(message.includes('who is he')){
        speech.text='He is a student of computer science   He love coding';
    }
    if(message.includes('tell me more')){
        speech.text='He is a graduate in computer science   he want to be a full stack developer ';
    }
    if(message.includes('inspiration')){
        speech.text='His inspiration is biswajit saha who changed supriyos life';
    }
    if(message.includes('how')){
        speech.text='Supriyo dont want to say it but he is just like supriyos own brother';
    }
    if(message.includes('thank you')){
        speech.text="My pleasure";        
    }
    if(message.includes('motivational quote')){
        speech.text="Give yourself an even greater challenge than the one you are trying to master and you will develop the powers necessary to overcome the original difficulty";        
    }
    if(message.includes('joke')){
        speech.text="Two guys stole a calendar  They got six months each  hahaha";        
    }
    if(message.includes('love')){
        speech.text="You’re so wonderful that you made me forget my reply to your I love you";        
    }
    if(message.includes('hello')){
        speech.text="Welcome beautiful people";        
    }
            
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);
}

