console.log("welcome to spotify");
//initialise the variables
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs =[
    {
        songName:"Aarambh hai prachand", filePath: "songs/1.mp3",coverPath: "covers/maxresdefault.jpg"
    },
    {
        songName:"Tum hi ho", filePath: "songs/2.mp3",coverPath: "covers/maxresdefault (1).jpg"
    },
    {
        songName:"Chahun mai ya naa", filePath: "songs/3.mp3",coverPath: "covers/chahun main ya naa lyrics.jpeg"
    },
    {
        songName:"Hum mar jayenge", filePath: "songs/4.mp3",coverPath: "covers/hum mar jayenge.jpg"
    },
    {
        songName:"Bhula dena ", filePath: "songs/5.mp3",coverPath: "covers/bhula dena.jpg"
    },
    {
        songName:"Feeling proud indian army", filePath: "songs/6.mp3",coverPath: "covers/feeling proud.jpg"
    },
    {
        songName:"Ravan Ravan hun mai", filePath: "songs/7.mp3",coverPath: "covers/ravan ravan hu.jpg"
    },
]

songitem.forEach((element,i) => {
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
});

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play(); 
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity = 1;
    }
    else{
        audioElement.pause(); 
       masterPlay.classList.remove('fa-circle-pause');
       masterPlay.classList.add('fa-circle-play');
       gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeallplays=()=>{
    //e.target.classList.add('fa-circle-pause');
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })

    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})