let ctx1 = document.getElementById("um").getContext("2d");
let labels1 = ["A", "B"];
let colorHex1 = ["#42177e", "#f25c21"];
let um = new Chart(ctx1, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [21, 79],
        backgroundColor: colorHex1,
      },
    ],
    labels: labels1,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});

let ctx2 = document.getElementById("dois").getContext("2d");
let labels2 = ["A", "B", "C", "D", "E"];
let colorHex2 = ["#42177e", "#f25c21", "#df0c75", "#EFCA08", "#FB3640"];
let dois = new Chart(ctx2, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [7, 63, 13, 14, 3],
        backgroundColor: colorHex2,
      },
    ],
    labels: labels2,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: 5,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});

let ctx3 = document.getElementById("tres").getContext("2d");
let labels3 = ["A", "B", "C", "D"];
let colorHex3 = ["#42177e", "#f25c21", "#df0c75", "#EFCA08"];
let tres = new Chart(ctx3, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [30.1, 19.3, 36.1, 14.5],
        backgroundColor: colorHex3,
      },
    ],
    labels: labels3,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});

let ctx4 = document.getElementById("quatro").getContext("2d");
let labels4 = ["A", "B"];
let colorHex4 = ["#42177e", "#FB3640"];
let quatro = new Chart(ctx4, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [52.6, 47.4],
        backgroundColor: colorHex4,
      },
    ],
    labels: labels4,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});

let ctx5 = document.getElementById("cinco").getContext("2d");
let labels5 = ["A", "B", "C"];
let colorHex5 = ["#42177e", "#f25c21", "#df0c75"];
let cinco = new Chart(ctx5, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [22.7, 3.1, 74.1],
        backgroundColor: colorHex5,
      },
    ],
    labels: labels5,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});

let ctx6 = document.getElementById("seis").getContext("2d");
let labels6 = ["A", "B"];
let colorHex6 = ["#42177e", "#EFCA08"];
let seis = new Chart(ctx6, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [37, 63],
        backgroundColor: colorHex6,
      },
    ],
    labels: labels6,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});

let ctx7 = document.getElementById("sete").getContext("2d");
let labels7 = ["A", "B"];
let colorHex7 = ["#42177e", "#df0c75"];
let sete = new Chart(ctx7, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [34, 66],
        backgroundColor: colorHex7,
      },
    ],
    labels: labels7,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});

let ctx8 = document.getElementById("oito").getContext("2d");
let labels8 = ["A", "B"];
let colorHex8 = ["#42177e", "#df0c75"];
let oito = new Chart(ctx8, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [35, 65],
        backgroundColor: colorHex8,
      },
    ],
    labels: labels8,
  },
  options: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    plugins: {
      datalabels: {
        color: "#fafafa",
        anchor: "end",
        align: "start",
        offset: -10,
        borderWidth: 2,
        borderColor: "#fafafa",
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: "bold",
          size: "10",
        },
        formatter: (value) => {
          return value + " %";
        },
      },
    },
  },
});
