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
    </div>
}

export default FlowValueTabItem
