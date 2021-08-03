fetch("./sartitime/api_stat")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    chartDraw(data)
    document.getElementById("loader").style.display = "none"
  })
  .catch(function (err) {
    console.warn("Something went wrong sorry.", err)
  })

function chartDraw(datas) {
  datas = convertDataForChart(datas)
  const data = {
    datasets: [
      {
        label: "Best travel time / departure time",
        data: datas[0],
        borderColor: "darkgreen",
        backgroundColor: "lightgreen",
      },
      {
        label: "Worst travel time / departure time",
        data: datas[1],
        borderColor: "darkred",
        backgroundColor: "red",
      },
    ],
  }

  const weekDays = ["Sun", "Mon", "Thu", "Wen", "Tru", "Fri", "Sat"]
  const config = {
    type: "bubble",
    data: data,
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            callback: (val) => weekDays[val],
          },
        },
        y: {
          ticks: {
            callback: (val) => val + ":00",
          },
        },
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
  const worstTimes = convertedData.slice(lengthOfData - 50, lengthOfData)
  const bestTimes = convertedData.slice(10, 60)

  return [bestTimes, worstTimes]
}
