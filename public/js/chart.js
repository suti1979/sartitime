fetch("./sartitime/api_stat")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    chartDraw(data)
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err)
  })

function chartDraw(datas) {
  console.log(datas)
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
