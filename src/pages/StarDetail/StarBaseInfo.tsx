// import React from "react";

import StarImgInfo from "../StarSearch/StarImgInfo.tsx";
import {Col, Descriptions, Divider, Row, Statistic} from "antd";
import  dayjs from "dayjs";
import {css} from "@emotion/react";

const StarBaseInfo = ({data}) => {
    const item  = data
    return <div>
        <StarImgInfo item={item}/>
        <Divider/>
        <Descriptions column={2}>
            <Descriptions.Item label="生日">{dayjs(item.birthdayDate).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="国籍">{item.country}</Descriptions.Item>
            <Descriptions.Item label="民族">{item.nation}</Descriptions.Item>
            <Descriptions.Item label="出生地">{item.birthPlace}</Descriptions.Item>


            <Descriptions.Item label="星座">摩羯座</Descriptions.Item>
            <Descriptions.Item label="身高">{item.height}</Descriptions.Item>
            <Descriptions.Item label="体重">{item.weight}</Descriptions.Item>
            <Descriptions.Item label="毕业院校">{item.school}</Descriptions.Item>

            <Descriptions.Item label="经纪公司" span={2}>{item.brokerageFirm}</Descriptions.Item>
            <Descriptions.Item label="代表作" span={2}>{item.repWorks}</Descriptions.Item>
            <Descriptions.Item label="个人简介" span={2}>{item.describe}</Descriptions.Item>
        </Descriptions>
        <Divider/>
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="商业价值指数" value={112893} />
            </Col>
            <Col span={12}>
                <Statistic title="粉丝总数" value={112893} />
            </Col>
        </Row>
    </div>
}

export default StarBaseInfo
