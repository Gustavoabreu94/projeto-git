function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const getProfileImage = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    getProfileImage.setAttribute("src", "./assests/avatar-light.png")
  } else {
    getProfileImage.setAttribute("src", "./assests/avatar-light.png")
  }
}
