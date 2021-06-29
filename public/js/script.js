const convertMilisToHrsMins = (mins) => {
  mins = Math.floor(mins / 60)
  let h = Math.floor(mins / 60)
  let m = mins % 60
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  return `${h}:${m}`
}

const changeToHourMinute = document.querySelectorAll("#milis")
changeToHourMinute.forEach((e) => {
  e.innerText = convertMilisToHrsMins(e.innerText)
})

const day = [
  "vasárnap",
  "hétfő",
  "kedd",
  "szerda",
  "csütörtök",
  "péntek",
  "szombat",
]

const changeDay = document.querySelectorAll("#day")
changeDay.forEach((e) => {
  e.innerText = day[e.innerText]
})

// <% friday.forEach(f => {%>
//   <div><%= f.date.getDay() %> <span id="milis"><%= f.time %></span></div>
//   <%})%>
