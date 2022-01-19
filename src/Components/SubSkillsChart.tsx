import ApexCharts from "react-apexcharts";

function SubSkillsChart() {

    return (
        <>
            <ApexCharts
                type="bar"
                series={[
                    {
                        data: [250, 300, 250, 450, 250, 200, 320, 400, 150],
                    }
                ]}
                options={{
                    chart: {
                        foreColor: "wheat",
                        fontFamily: "apple",
                        height: 450,
                    },
                    plotOptions: {
                        bar: {
                            barHeight: '100%',
                            distributed: true,
                            horizontal: true,
                            dataLabels: {
                                position: "bottom",
                            },
                        },
                    },
                    colors: ['#DE0000', '#DE6B1F', '#6AAD3E', '#F72404', '#A5978B', '#CB4525', '#1757B7', '#E373F6',
                        '#9494F7'],
                    dataLabels: {
                        enabled: false,
                        textAnchor: 'start',
                        style: {
                            colors: ['white']
                        },
                        offsetX: 10,
                        dropShadow: {
                            enabled: true
                        },
                        formatter: function (val, opt) {
                            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                        }
                    },
                    stroke: {
                        width: 1,
                        colors: ['#fff'],
                        show: true,
                    },
                    xaxis: {
                        categories: ['Java', 'JSP', 'Spring MVC', 'OracleDB', 'Linux', 'PowerPoint', 'Word', 'Premiere Pro', 'PhotoShop'],
                    },
                    yaxis: {
                        labels: {
                            show: true
                        }
                    },
                    title: {
                        text: 'Sub Skills',
                        align: 'center',
                        floating: true
                    },
                    subtitle: {
                        text: '하나 이상의 프로젝트로 경험 해본 언어 & 툴 입니다.',
                        align: 'center',
                    },
                    tooltip: {
                        theme: 'dark',
                        x: {
                            show: true
                        },
                        y: {
                            title: {
                                formatter: function () {
                                    return ''
                                }
                            }
                        }
                    },
                }}
            />
        </>
    );
}

export default SubSkillsChart;