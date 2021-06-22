const convertMilisToHrsMins = (mins) => {
  mins = Math.floor(mins / 60)
  let h = Math.floor(mins / 60)
  let m = mins % 60
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  return `${h}:${m}`
}

const changeToHourMinute = document.getElementById("milis")
//console.log(changeToHourMinute.innerText)
changeToHourMinute.innerText = convertMilisToHrsMins(
  changeToHourMinute.innerText
)
