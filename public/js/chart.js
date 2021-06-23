const data = {
  datasets: [
    {
      label: "Utazási idő",
      data: [
        {
          x: 20,
          y: 30,
          r: 15,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
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
