import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {PageContainer, ProCard, ProTable} from '@ant-design/pro-components';
import { Space, Tag } from 'antd';
import { useRef } from 'react';
import axios from "axios";
import {css} from "@emotion/react";
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
                    cardBordered
                    request={async (params = {}) => {
                        return axios({
                            url:'http://localhost:8080/liststars',
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
                    editable={{
                        type: 'multiple',
                    }}
                    columnsState={{
                        persistenceKey: 'pro-table-singe-demos',
                        persistenceType: 'localStorage',
                        onChange(value) {
                            console.log('value: ', value);
                        },
                    }}
                    rowKey="id"
                    search={{
                        labelWidth: 'auto',
                        defaultCollapsed: false,
                    }}
                    options={{
                        setting: {
                            listsHeight: 400,
                        },
                    }}
                    form={{
                        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
                        syncToUrl: (values, type) => {
                            if (type === 'get') {
                                return {
                                    ...values,
                                    created_at: [values.startTime, values.endTime],
                                };
                            }
                            return values;
                        },
                    }}
                    pagination={{
                        onChange: (page) => console.log(page),
                    }}
                    dateFormatter="string"
                />
            </ProCard>
        </PageContainer>
    );
};

export default StarList
