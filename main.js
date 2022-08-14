const video_player = document.querySelector("#video_player"),
  mainVideo = video_player.querySelector("#main-video"),
  progressAreaTime = video_player.querySelector(".progressAreaTime"),
  controls = video_player.querySelector(".controls"),
  progressArea = video_player.querySelector(".progress-area"),
  bufferedBar = video_player.querySelector(".bufferedBar"),
  progress_Bar = video_player.querySelector(".progress-bar"),
  fast_rewind = video_player.querySelector(".fast-rewind"),
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

function playVideo() {
  play_pause.innerHTML = "pause"
  play_pause.title = "pause"
  video_player.classList.add("paused")
  mainVideo.play()
}

function pauseVideo() {
  play_pause.innerHTML = "play_arrow"
  play_pause.title = "play"
  video_player.classList.remove("paused")
  mainVideo.pause()
}

play_pause.addEventListener("click", () => {
  const isPlayed = video_player.classList.contains("paused")
  isPlayed ? pauseVideo() : playVideo()
})
