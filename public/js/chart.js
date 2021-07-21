const data = {
  //xLabels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Travel time / departure time",
      data: [
        { x: 0, y: 22, r: 4.4112 },
        { x: 1, y: 19, r: 4.3836 },
        { x: 2, y: 19, r: 4.4043 },
        { x: 3, y: 18, r: 4.2586 },
        { x: 5, y: 20, r: 4.0635 },
        { x: 4, y: 5, r: 4.3819 },
        { x: 6, y: 17, r: 4.4302 },
      ],
      backgroundColor: "blue",
    },
  ],
}

const config = {
  type: "bubble",
  data: data,
  options: {},
}

const chart = new Chart(document.getElementById("chart"), config)

// module.exports = {
//   actions: [],
//   config: config,
// }
