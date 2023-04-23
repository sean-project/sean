// import React from "react";

import StarImgInfo from "../StarSearch/StarImgInfo.tsx";
import {Col, Descriptions, Divider, Row, Statistic} from "antd";
import  dayjs from "dayjs";
import {css} from "@emotion/react";

const StarBaseInfo = () => {
    const item = {
        "_id": "64434f79ba05d998849f1d22",
        "starID": 2364429,
        "starCustomTags": "演技派,童星,国民弟弟",
        "starName": "韩昊霖",
        "starAge": 14,
        "starSex": "男",
        "height": "140 cm(成长中)",
        "weight": "",
        "birthdayDate": "2009-09-27T16:00:00.000Z",
        "country": "中国",
        "birthPlace": "浙江省宁波市",
        "nation": "汉族",
        "bloodType": "A型",
        "headImg": "https://bkimg.cdn.bcebos.com/pic/8b82b9014a90f603bae6845a3612b31bb051ed5d?x-bce-process=image/resize,m_lfit,w_268,limit_1",
        "professions": "演员",
        "fans": 996267,
        "school": "",
        "repWorks": "我和我的祖国,约定,爹地",
        "brokerageFirm": "",
        "describe": "韩昊霖，2009年9月28日出生于浙江省宁波市，中国内地男演员。2015年9月，因参演古装仙侠剧《蜀山战纪之剑侠传奇》而正式出道。2017年1月，出演古装剧《大唐荣耀》。2019年9月，参演电影《我和我的祖国》。2020年5月，参加湖南卫视六一晚会《未来可期·六一趣味运动会特别直播》；2020年10月，参演喜剧片《我和我的家乡》。",
        "wbID": "",
        "dyID": "4029701",
        "xhsID": "",
        "bilibiliID": ""
    }
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
