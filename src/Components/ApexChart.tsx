import ApexCharts from "react-apexcharts";

interface IChartProps {
    logo: string,
    percent: number,
    color: string
}

function ApexChart({ logo, percent, color }: IChartProps) {
    return (
        <ApexCharts
            type="radialBar"
            series={[percent]}
            options={{
                chart: {
                    foreColor: "wheat",
                    fontFamily: "NeoDunggeunmo",
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '50%',
                            image: `${logo}`,
                            imageClipped: false,
                            imageHeight: 70,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                offsetY: 50,
                                fontSize: '18px',
                            },
                        },
                    }
                },
                colors: [`${color}`],
            }}
        />
    );
}

export default ApexChart;