const video_player = document.querySelector("#video_player"),
  mainVideo = video_player.querySelector("#main-video"),
  progressAreaTime = video_player.querySelector(".progressAreaTime"),
  controls = video_player.querySelector(".controls"),
  progressArea = video_player.querySelector(".progress-area"),
  bufferedBar = video_player.querySelector(".bufferedBar"),
  progress_Bar = video_player.querySelector(".progress-bar"),
  rewind = video_player.querySelector(".fast-rewind"),
  play_pause = video_player.querySelector(".play_pause"),
  fast_forward = video_player.querySelector(".fast-forward"),
  volume = video_player.querySelector(".volume"),
  volume_range = video_player.querySelector(".volume_range"),
  current = video_player.querySelector(".current"),
  totalDuration = video_player.querySelector(".duration"),
  auto_play = video_player.querySelector(".auto-play"),
  settingsBtn = video_player.querySelector(".settingsBtn"),
  captionsBtn = video_player.querySelector(".captionsBtn"),
  picture_in_picutre = video_player.querySelector(".picture_in_picutre"),
  fullscreen = video_player.querySelector(".fullscreen"),
  settings = video_player.querySelector("#settings"),
  settingHome = video_player.querySelectorAll(
    "#settings [data-label='settingHome'] > ul > li"
  ),
  captions = video_player.querySelector("#captions"),
  caption_labels = video_player.querySelector("#captions ul"),
  playback = video_player.querySelectorAll(".playback li"),
  tracks = video_player.querySelectorAll("track"),
  loader = video_player.querySelector(".loader")

let duration = mainVideo.duration

// Video Play Function
function playVideo() {
  play_pause.innerHTML = "pause"
  play_pause.title = "pause"
  video_player.classList.add("paused")
  mainVideo.play()
}

// Video pause function
function pauseVideo() {
  play_pause.innerHTML = "play_arrow"
  play_pause.title = "play"
  video_player.classList.remove("paused")
  mainVideo.pause()
}

// Play Pause function call based on video status
play_pause.addEventListener("click", () => {
  const isPlayed = video_player.classList.contains("paused")
  isPlayed ? pauseVideo() : playVideo()
})

// First forward Function for 10 sec
fast_forward.addEventListener("click", () => {
  mainVideo.currentTime += 5
})

// Rewind Function for 10 sec
rewind.addEventListener("click", () => {
  mainVideo.currentTime -= 5
})

// Total video duration function
mainVideo.addEventListener("loadeddata", (e) => {
  let duration = e.target.duration
  let minute = Math.floor(duration / 60)
  let sec = Math.floor(duration % 60)

  sec < 10 ? (sec = `0${sec}`) : sec
  totalDuration.innerHTML = `${minute} : ${sec}`
})

// Current video duration function

mainVideo.addEventListener("timeupdate", (e) => {
  let currentDuration = e.target.currentTime
  let duration = e.target.duration
  let currentMinute = Math.floor(currentDuration / 60)
  let crrentSec = Math.floor(currentDuration % 60)

  crrentSec < 10 ? (crrentSec = `0${crrentSec}`) : crrentSec
  current.innerHTML = `${currentMinute} : ${crrentSec}`

  // if video duration and currentTime match change pause button into play and reset currentTime
  if (Math.floor(currentDuration) === Math.floor(duration)) {
    current.innerHTML = `0:00`
    play_pause.innerHTML = "play_arrow"
    play_pause.title = "play"
    video_player.classList.remove("paused")
  }

  // ProgressBar width
  let progressWidth = (currentDuration / duration) * 100
  progress_Bar.style.width = progressWidth + "%"
})

progressArea.addEventListener("click", (e) => {
  let videoDuration = mainVideo.duration
  let progressWithVal = progressArea.clientWidth
  let checkOffset = e.offsetX
  // console.log(videoDuration)

  mainVideo.currentTime = (checkOffset / progressWithVal) * videoDuration
})

// Volume control function
function VolumeControl() {
  mainVideo.volume = volume_range.value / 100
  if (volume_range.value == 0) {
    volume.innerHTML = "volume_off"
  } else if (volume_range.value < 40) {
    volume.innerHTML = "volume_down"
  } else {
    volume.innerHTML = "volume_up"
  }
}

volume_range.addEventListener("change", () => {
  VolumeControl()
})

function mute() {
  if (volume_range.value == 0) {
    volume_range.value = 80
    mainVideo.volume = 0.8
    volume.innerHTML = "volume_up"
  } else {
    volume_range.value = 0
    mainVideo.volume = 0
    volume.innerHTML = "volume_off"
  }
}

volume.addEventListener("click", () => {
  mute()
})
