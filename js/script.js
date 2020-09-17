let ctx = document.getElementById("myChart").getContext("2d");
let labels = ["Sim", "Não"];
let colorHex = ["#3d297e", "#f25c21"];
let myChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [21, 79],
        backgroundColor: colorHex,
      },
    ],
    labels: labels,
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

let ctx2 = document.getElementById("segundo2").getContext("2d");
let labels2 = [
  "Felicidade/bem-estar",
  "Respeito mútuo",
  "Satisfação",
  "Cooperação",
  "Liberdade civis",
];
let colorHex2 = ["#3d297e", "#f25c21", "#FB3640", "#EFCA08", "#df0c75"];
let segundo2 = new Chart(ctx2, {
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

let ctx3 = document.getElementById("terceiro3").getContext("2d");
let labels3 = [
  "Cultivar virtudes",
  "Agir de tal modo, que minha ação torne-se um modelo de moralidade",
  "Combinar a imparcialidade da regra de ouro e a maximização da felicidade",
  "Nenhuma das alternativas anteriores",
];
let colorHex3 = ["#3d297e", "#EFCA08", "#df0c75","#f25c21" ];
let terceiro3 = new Chart(ctx3, {
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

let ctx4 = document.getElementById("quarto4").getContext("2d");
let labels4 = ["Raciocínio “automático”", "Raciocínio “manual”"];
let colorHex4 = ["#FB3640", "#3d297e"];
let quarto4 = new Chart(ctx4, {
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

let ctx5 = document.getElementById("quinto5").getContext("2d");
let labels5 = [
  "Uma criança próxima",
  "Crianças pobres em terras distantes",
  "Devemos agir por obrigação moral em ambos os casos",
];
let colorHex5 = ["#3d297e", "#EFCA08", "#df0c75"];
let terceiro5 = new Chart(ctx5, {
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

let ctx6 = document.getElementById("sexto6").getContext("2d");
let labels6 = ["Sim, eu sei", "Não, eu não sei"];
let colorHex6 = ["#EFCA08", "#3d297e"];
let quarto6 = new Chart(ctx6, {
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

let ctx7 = document.getElementById("setimo7").getContext("2d");
let labels7 = ["Sim", "Não"];
let colorHex7 = ["#df0c75", "#3d297e"];
let quarto7 = new Chart(ctx7, {
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

let ctx8 = document.getElementById("oitavo8").getContext("2d");
let labels8 = ["Sim", "Não"];
let colorHex8 = ["#df0c75", "#3d297e"];
let quarto8 = new Chart(ctx8, {
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