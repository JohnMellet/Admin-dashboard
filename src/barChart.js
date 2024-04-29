import Chart from "chart.js/auto";

(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const data1 = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
  ];

  new Chart(document.getElementById("myChart"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });

  new Chart(document.getElementById("monthlyStats"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });

  new Chart(document.getElementById("newChart"), {
    type: "bar",
    data: {
      labels: data1.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data1.map((row) => row.count),
        },
      ],
    },
  });
})();
