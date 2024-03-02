
export {
    userJoinData,
    userJoinOptions,
};

// 유저 월 별 가입자수 차트
let userJoinData = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
        {
            label: "2024년",
            lineTension: 0.3, // 선 휘는 정도
            pointRadius: 3, // 값에 해당하는 원의 반지름
            pointHoverRadius: 15, // 값에 포인터 접근시 원의 반지름
            pointHitRadius: 15, // 포인터 이벤트 발동 범위
            pointBorderWidth: 2, // 값 해당하는 원의 경계면 두께
            data: [
                0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000,
                25000, 41000,
            ],
        },
        {
            label: "2023년",
            lineTension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 15,
            pointHitRadius: 15,
            pointBorderWidth: 2,
            data: [
                0, 11000, 4000, 17000, 8000, 3000, 15000, 27000, 19000, 25000,
                24000, 43000,
            ],
        },
    ],
};
let userJoinOptions = {
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0,
            },
        },
        scales: {
            x: {
                // type: "time",
                ticks: {
                    // maxTicksLimit: 12, 축의 최대 틱수
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false, // drawBorder: true, (이전 버전)
                    color: "rgba(0, 0, 0, 0.5)",
                    width: 3,
                }
            },
            y: {
                ticks: {
                    // maxTicksLimit: 5, 축의 최대 틱수
                    padding: 10,
                    // y축의 각각의 tick에 넣을 값
                    callback: function (value) { // ,index,ticks) {
                        return `${value}명`;
                    },
                },
                grid: {
                    color: "rgb(234, 236, 244)",
                    borderDash: [2],
                },
                border: {
                    display: false, // drawBorder: false,(이전 버전)
                }
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            colors: {
                // enabled: false,
                forceOverride: true,
            },
            // 툴팁 (데이터에 포인터둘 때 뜨는 창)
            tooltip: {
                titleColor: "#858796", // 툴팁 제목 폰트 색 titleFontColor
                titleMarginBottom: 10,
                // titleFontSize: 14, // 미지원
                backgroundColor: "rgb(255, 255, 255)", // 툴팁 배경색
                bodyColor: "#858796", // 툴팁 내용 폰트 색
                borderColor: "#dddfeb", // 툴팁 경계선 
                borderWidth: 1, // 툴팁 경계 두께
                padding: {
                    x: 15,
                    y: 15,
                },
                displayColors: false,
                intersect: false,
                interaction: {
                    mode: "index",
                },
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem) {
                        let chart = tooltipItem.chart;
                        var datasetLabel = chart.data.datasets[tooltipItem.datasetIndex].label || "";
                        return `${datasetLabel} : ${tooltipItem.formattedValue}명 가입`;
                    },
                },
            },
        },
    };