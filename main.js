import './main.scss'

let outerOrbitCircle = document.querySelector('.outer-orbit-first-circle')
let middleOrbitCircle = document.querySelector('.middle-orbit-circle')
let color = ["#FF5740", "#DFE4EC"];
let i = 0


const changeOrbitCircleColor = () => {
  //for (let i = 0; i < 3; i++) {
  i = i + 1
  if (i === 2) {
    i = 0
  }
  outerOrbitCircle.style.transition = "all 1.5s"
  outerOrbitCircle.style.backgroundColor = color[i]
  //}
}
setInterval(changeOrbitCircleColor, 3000);