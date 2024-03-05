
export {
    initCategoryData,
    categoryOptions,
}

function initCategoryData() {
    return {
        labels: ["10대", "20대", "30대", "40대", "50대", "60대", "70대"],
        datasets: [
            {
                label: "월별 카테고리별 작성 수",
                data: [56, 170, 245, 120, 98, 49, 10],
                // backgroundColor: "#38ABF2",
            },
        ],
    }
}

let categoryOptions = {
    maintainAspectRatio: false,
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
            // time: {
            //     unit: "month",
            // },
            ticks: {
                maxTicksLimit: 7,
            },
            grid: {
                display: false,
            },
            border: {
                display: false,
            },
            maxBarThickness: 25,
        },
        y: {
            ticks: {
                min: 0,
                max: 15000,
                maxTicksLimit: 5,
                padding: 10,
                callback: function (value) { // ,index,ticks) {
                    return `${value}명`;
                },
            },
            grid: {
                color: "rgb(234, 236, 244)",
                borderDash: [2],
            },
            border: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            titleMarginBottom: 10,
            titleColor: "#6e707e",
            backgroundColor: "rgb(255,255,255)",
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
                label: function (tooltipItem) {
                    let chart = tooltipItem.chart;
                    var datasetLabel = chart.data.datasets[tooltipItem.datasetIndex].label || "";
                    return `${datasetLabel} : ${tooltipItem.raw}명`;
                },
            },
        },
    }
};