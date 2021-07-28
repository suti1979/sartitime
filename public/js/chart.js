fetch("./sartitime/api_stat")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    chartDraw(data)
  })
  .catch(function (err) {
    console.warn("Something went wrong sorry.", err)
  })

function chartDraw(datas) {
  datas = convertDataForChart(datas)
  const data = {
    labels: [{ 0: "Sun", 1: "Mon" }],
    datasets: [
      {
        label: "Best travel time / departure time",
        data: datas[0],
        borderColor: "darkblue",
        backgroundColor: "lightblue",
      },
      {
        label: "Worst travel time / departure time",
        data: datas[1],
        borderColor: "darkred",
        backgroundColor: "red",
      },
    ],
  }

  const config = {
    type: "bubble",
    data: data,
    options: {
      responsive: true,
      scales: {
        x: ["Sun", "Mon", "Thu", "Wen", "Tru", "Fri", "Sat"],
      },
    },
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
  const lengthOfData = convertedData.length
  const worstTimes = convertedData.slice(lengthOfData - 40, lengthOfData)
  const bestTimes = convertedData.slice(10, 50)

  return [bestTimes, worstTimes]
}
