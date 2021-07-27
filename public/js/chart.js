fetch("./sartitime/api")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    chartDraw(data)
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err)
  })

// SAMPLE
// { x: 4, y: 8, r: 4.3819 },
// { x: 6, y: 17, r: 9.4302 },

function chartDraw(datas) {
  //console.log(datas)
  const data = {
    yLabels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Travel time / departure time",
        data: datas,
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
}

// module.exports = {
//   actions: [],
//   config: config,
// }
