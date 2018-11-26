const loader = document.querySelector('#loader')
const app = document.querySelector('#app')
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const social = document.getElementById("social")
let { aboutInactive, projectsInactive, currentInactive, socialInactive } = false

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.classList.add('fade--out')
    app.classList.remove('app__no-scroll')
    setTimeout(() => {
      loader.classList.add('remove')
    }, 1000)
  }, 1000)
})

const isVisible = e => {
  let rect = e.getBoundingClientRect()
  return (rect.bottom >= 300 && rect.top <= (window.innerHeight - 300))
}

const animateOnScroll = () => {
  !aboutInactive && isVisible(about) ? about.classList.add("fade--in") : null
  !projectsInactive && isVisible(projects) ? projects.classList.add("fade--in") : null
  !socialInactive && isVisible(social) ? social.classList.add("fade--in") : null

  if(aboutInactive && projectsInactive && employerInactive && socialInactive) {
    window.removeEventListener("scroll", animateOnScroll)
  }
}

window.addEventListener("scroll", animateOnScroll)
animateOnScroll()
