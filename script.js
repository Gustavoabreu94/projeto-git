function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const getProfileImage = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    getProfileImage.setAttribute("src", "./assets/avatar-light.png")
    getProfileImage.setAttribute("alt", "Imagem com oculos escuro")
  } else {
    getProfileImage.setAttribute("src", "./assets/avatar.png")
    getProfileImage.setAttribute("alt", "Imagem sem oculos")
  }
}
