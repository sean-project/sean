import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import FlowValueTabItem from "./FlowValueTabItem.tsx";
import WeiboAnalysisTabItem from "./WeiboAnalysisTabItem.tsx";

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `商业价值分析`,
        children: <FlowValueTabItem/>,
    },
    {
        key: '2',
        label: `微博分析`,
        children: <WeiboAnalysisTabItem/>,
    },
];

const StarCoreInfo = ()=>{
    return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}

export default StarCoreInfo
