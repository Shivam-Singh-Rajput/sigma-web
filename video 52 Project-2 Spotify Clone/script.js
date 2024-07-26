let currentSong = new Audio();
let Songs;
let currFolder;

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  // Calculate minutes and remaining seconds
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.floor(seconds % 60);

  // Format minutes and seconds as two-digit strings
  let formattedMinutes = String(minutes).padStart(2, '0');
  let formattedSeconds = String(remainingSeconds).padStart(2, '0');

  // Combine formatted minutes and seconds with a colon
  let formattedTime = `${formattedMinutes}:${formattedSeconds}`;
  return formattedTime;
}

async function getsong(folder) {
  currFolder = folder;
  let a = await fetch(`http://127.0.0.1:3000/Songs/`)
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  Songs = []  
  for (let index = 0; index < as.length; index++) {
    const element = as[index]
    if (element.href.endsWith(".mp3")) {
      Songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }

  // show all the song in the playlist
  let list = document.querySelector(".songlist").getElementsByTagName("ul")[0]
  list.innerHTML = ""
  for (const song of Songs) {
    list.innerHTML = list.innerHTML + `<li><img class="invert sign" src="music.svg" alt="">
                                <div class="info">
                                <div>${song.replaceAll("%20", " ")} </div>
                                <div>Shivam Rajput</div>
                            </div>
                            <div class="playnow">
                                <span>Play song</span>
                                <img class="invert" src="playnow.svg" alt="">
                            </div></li>`;
  }

  // Attach an event listener to each song
  Array.from(document.querySelector('.songlist').getElementsByTagName('li')).forEach(e => {
    e.addEventListener("click", element => { // Attach an event listener to each song that will trigger the playSong function when clicked on a specific song in the list of songs.
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
    })
  })
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("/Songs/" + track)
  currentSong.src = `/${currFolder}/` + track
  if (!pause) {
    currentSong.play()
    play.src = "pause.svg"
  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track)
  document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums(){
  let a = await fetch(`http://127.0.0.1:3000/Songs/`)
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a")
  let cardContainer = document.querySelector(".cardcontainer")
  let array = Array.from(anchors)
  for (let index = 0; index < array.length; index++) {
    const e = array[index];
    
    if(e.href.includes("/Songs")){
      (e.href.split("/").slice(-1)[0])
      
      //Get the metadata of the folder 
      let a = await fetch(`http://127.0.0.1:3000/Songs/info.json`)
      let response = await a.json();
      cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="ssr" class="card">
      <div class="playbutton">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              color="black">
              <path
                  d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" />
          </svg>
      </div>
      <img src="/Songs/image.jpeg" alt="">
      <h2>${response.title}</h2>
      <p>${response.description}</p>
  </div>`
    }
  }
  // Load the playlist whenever card is clicked
  Array.from(document.getElementsByClassName("card")).forEach(e => {
    e.addEventListener('click', async item => {
      Songs = await getsong(`Songs/${item.currentTarget.dataset.folder}`)
    })
  })
}

async function main() {
  // get all list of songs
  await getsong("Songs");
  playMusic(Songs[0], true);

  // display all the Albums on the page
  displayAlbums()

  // Attach an event listener to play next, previous and stop buttons.
  play.addEventListener('click', () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg"
    }
    else {
      currentSong.pause();
      play.src = "play.svg"
    }
  })

  // Listen for time update event
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`
    document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
  })

  // Add an eventlistener to seekbar
  document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent) / 100;
  })

  // Add an eventlistener to hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  })


  // Add an eventlistener for close button
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-110%";
  })

  // Add an eventlistener to previous click
  previous.addEventListener("click", () => {
    currentSong.pause()
    let index = Songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    if ((index - 1) >= 0) {
      playMusic(Songs[index - 1])
    }
  })

  // Add an eventlistener to next click
  next.addEventListener("click", () => {
    currentSong.pause()
    console.log("next Clicked");

    let index = Songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    if ((index + 1) < Songs.length) {
      playMusic(Songs[index + 1])
    }
  })

  // Add an event to Volume
  document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    ("setting volume to", e.target.value, "100")
    currentSong.volume = parseInt(e.target.value) / 100
  })

  // Add event listener for mute the volume
  document.querySelector(".volume > img").addEventListener("click", e=>{
  if(e.target.src.includes("volume.svg")){
    e.target.src = e.target.src.replace("volume.svg", "mute.svg")
    currentSong.volume = 0;
    document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
  }
  else{
    e.target.src = e.target.src.replace("mute.svg", "volume.svg")
    currentSong.volume = .10;
    document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
  }
  })

}
main() 