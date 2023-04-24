import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {PageContainer, ProCard, ProTable} from '@ant-design/pro-components';
import { useRef } from 'react';
import axios from "axios";
import StarImgInfo from "./StarImgInfo.tsx";

type GithubIssueItem = {
    starID:string
    headImg:string
    starName:string
    professions:string
    starCustomTags:string
};

const columns: ProColumns<GithubIssueItem>[] = [
    {
        title:'ID',
        dataIndex: 'starID',
    },
    {
        title: '艺名',
        dataIndex: 'starName',
        render(i,_){
            console.log(i)
            return <StarImgInfo item={_}/>
        }
    },
    {
        title: ' 专业热度',
        dataIndex: 'f'
    },
    {
        title: '关注热度',
        dataIndex: 'g',
    },

    {
        title: '商业价值',
        dataIndex: 'a'
    },
    {
        title: '专业热度',
        dataIndex: 'b'
    },
    {
        title: '关注热度',
        dataIndex: 'c',
    },
    {
        title: '预测热度',
        dataIndex: 'd'
    },
    {
        title: '带货力',
        dataIndex: 'e',
    },
];

const StarList= () => {
    const actionRef = useRef<ActionType>();
    return (
        <PageContainer>
            <ProCard>
                <ProTable<GithubIssueItem>
                    columns={columns}
                    actionRef={actionRef}
                    request={async (params = {}) => {
                        return axios({
                            url:'/api/liststars',
                            method:'POST',
                            data:params
                        }).then(r=>{
                            return {
                                success:true,
                                data:r.data.data,
                                total:r.data.total,
                            }
                        })
                    }}
                    rowKey="id"
                    search={{
                        labelWidth: 'auto',
                        defaultCollapsed: false,
                    }}
                    pagination={{
                        defaultPageSize:10,
                        onChange: (page) => console.log(page),
                    }}
                />
            </ProCard>
        </PageContainer>
    );
};

export default StarList
