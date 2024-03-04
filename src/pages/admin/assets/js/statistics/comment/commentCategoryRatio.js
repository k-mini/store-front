
export {
    commentCategoryRatioType,
    initCommentCategoryRatioData,
    commentCategoryRatioOptions,
}

// 댓글 작성 카테고리 별 비율
let commentCategoryRatioType = "doughnut";

function initCommentCategoryRatioData() {
  return {
    labels: ["전자 게시판", "의류 게시판","자유 게시판","공지사항 게시판"],
    datasets: [
      {
        data: [30,10,25,35],
      },
    ]
  }
}

let commentCategoryRatioOptions = {
  maintainAspectRatio: false,
  cutout: 90, // 도넛 모양 시 중앙 공간 자를 비율 
  plugins: {
    title: {
      display: false,
      text: '카테고리 댓글 비율',
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
        title: function (TooltipItems) {
          var TooltipItem = TooltipItems[0];
          return `${TooltipItem.label}`;
        },
        label: function (TooltipItem) {
          return `${TooltipItem.raw}%`;
        },
      },
    },
    legend: {
      display: true,
    },
  },
};