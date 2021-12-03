import './main.scss'

let outerFirstOrbitCircle = document.querySelector('.outer-orbit-first-circle')
let middleOrbitCircle = document.querySelector('.middle-orbit-circle')
let innerOrbitCircle = document.querySelector('.inner-orbit-circle')
let SecondOuterOrbitCircle = document.querySelector('.outer-orbit-second-circle')
let color = ["#FF5740", "#ECABA7", "#E5C8CA", "#F97362"];

const changeFisrtOuterOrbitCircleColor = () => {
  //outerOrbitCircle.style.transition = "all 2s"
  outerFirstOrbitCircle.style.backgroundColor = "#FF5740"
}
const changeSecondOuterOrbitCircleColor = () => {
  //middleOrbitCircle.style.transition = "all 2.5s"
  SecondOuterOrbitCircle.style.backgroundColor = "#E5C8CA"
}
const changeMiddleOrbitCircleColor = () => {
  //middleOrbitCircle.style.transition = "all 2.5s"
  middleOrbitCircle.style.backgroundColor = "#ECABA7"
}
const changeInnerOrbitCircleColor = () => {
  //middleOrbitCircle.style.transition = "all 2.5s"
  innerOrbitCircle.style.backgroundColor = "#F97362"
}

setInterval(changeFisrtOuterOrbitCircleColor, 1500);
setInterval(changeSecondOuterOrbitCircleColor, 3000);
setInterval(changeMiddleOrbitCircleColor, 2500);
setInterval(changeInnerOrbitCircleColor, 2000);