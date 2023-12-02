const li2 = document.querySelectorAll('nav:nth-child(2)>ul>li')
const selectionBar2 = document.querySelector('nav:nth-child(2)>.selector-bar')

window.onload = () => {
  li2.forEach((e, i) => {
    e.addEventListener('mouseover', () => {
      selectionBar2.style = `left: calc(${i * 16}% + 8px)`
    })
  })
}