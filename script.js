console.log("Welcome to Spotify");
//initialise the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mastersongname = document.getElementById('mastersongname');
let myProgressBar = document.getElementById('myProgressBar')

let songs = [
    {SongName:"Satranga-Arijit Singh" , filePath: "songs/1.mp3",coverPath:"covers/sa.mp3"},
    {SongName:"Phele Bhi Main" , filePath: "songs/2.mp3",coverPath:"covers/sa1.mp3"},
    {SongName:"Phela Pyar" , filePath: "songs/3.mp3",coverPath:"covers/sa2.mp3"},
    {SongName:"Kaise Hua" , filePath: "songs/4.mp3",coverPath:"covers/sa3.mp3"},
    {SongName:"Udaarian" , filePath: "songs/5.mp3",coverPath:"covers/sa4.mp3"},
    {SongName:"Manjha" , filePath: "songs/6.mp3",coverPath:"covers/sa5.mp3"},
    {SongName:"O Soniyee" , filePath: "songs/7.mp3",coverPath:"covers/sa6.mp3"},
    {SongName:"Chal Tere Ishq Mein" , filePath: "songs/8.mp3",coverPath:"covers/sa7.mp3"}

]

//audioElement.play();
//handle play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //updateseekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress');
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{  
        console.log(e.target);
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex-1].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>8){
        songIndex = 0;
    }
    else{
        songIndex+=1;

    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex-1].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex = 0;
    }
    else{
        songIndex-=1;

    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex-1].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})