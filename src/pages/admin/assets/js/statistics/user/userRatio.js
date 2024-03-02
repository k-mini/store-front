
export {
  userRatioType,
    userRatioData,
    userRatioOptions,
}

// 유저 남녀 성비 차트

let userRatioType = "doughnut";

let userRatioData = {
    labels: ["남", "여"],
    datasets: [
      {
        data: [55, 45],
      },
    ],
};

let userRatioOptions = {
    maintainAspectRatio: false,
    cutout: 90, // 도넛 모양 시 중앙 공간 자를 비율 
    plugins: {
      title: {
        display: true,
        text: '남/여',
      },
      tooltip: {
        backgroundColor: "rgb(255,255,255)",
        titleColor: "#858796",
        bodyColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        padding: {
          x: 15,
          y: 15,
        },
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          title: function(TooltipItems) {
            var TooltipItem = TooltipItems[0];
            return `${TooltipItem.label + '자'}`;
          },
          label: function (TooltipItem) {
            return `${TooltipItem.raw}%`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };