import './main.scss'

let outerOrbitCircle = document.querySelector('.outer-orbit-first-circle')
let middleOrbitCircle = document.querySelector('.middle-orbit-circle')
let color = ["#FF5740", "#ECABA7 "];

const changeOuterOrbitCircleColor = () => {
  //outerOrbitCircle.style.transition = "all 2s"
  outerOrbitCircle.style.backgroundColor = "#FF5740"
}

const changeMiddleOrbitCircleColor = () => {
  //middleOrbitCircle.style.transition = "all 2.5s"
  middleOrbitCircle.style.backgroundColor = "#ECABA7"
}
setInterval(changeOuterOrbitCircleColor, 2000);
setInterval(changeMiddleOrbitCircleColor, 2500);