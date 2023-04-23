import {css} from "@emotion/react";
import {Card, theme} from 'antd'
import ReactECharts from 'echarts-for-react';
const {useToken} = theme
const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }
    ]
};


// 六芒星
const option_liu = {
    title: {
        text: 'Basic Radar Chart'
    },
    legend: {
        data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: 'Allocated Budget'
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: 'Actual Spending'
                }
            ]
        }
    ]
};
const FlowValueTabItem = () => {
    const token = useToken()
    return <div>
        <div css={css`border-left: 3px solid ${token.token.colorPrimary};line-height: 1;padding-left: 10px;font-size: 15px`}>
            数据概览
        </div>

        <div css={css`display: flex;justify-content: space-between`}>
            {
                [1,1,1,1].map(item=>{
                    return <Card css={css`flex: 1`}>ss</Card>
                })
            }
        </div>
        <ReactECharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />


        {/*六芒星*/}
        <ReactECharts
            option={option_liu}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />

    </div>
}

export default FlowValueTabItem
