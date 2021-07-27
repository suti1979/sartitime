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

function chartDraw(datas) {
  datas = convertDataForChart(datas)
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

function convertDataForChart(datas) {
  let convertedData = []

  datas.forEach((row) => {
    let date = new Date(row.date)
    let r = {
      x: date.getDay(),
      y: date.getHours(),
      r: row.time / 10000,
    }
    convertedData.push(r)
  })

  return convertedData
}
