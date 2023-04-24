import {css} from "@emotion/react";
import {Space, Tag} from "antd";
import {FC} from "react";
import {ManOutlined, WomanOutlined} from "@ant-design/icons";
import  dayjs from "dayjs";
import {theme} from "antd";
import {useNavigate} from "react-router-dom";

const {useToken} = theme
const StarImgInfo:FC<any> = ({item}) => {
    const token = useToken()
    const nav = useNavigate()
  return <div  css={css`display: flex`} onClick={()=>{
      nav(`/star/${item.starID}`)
  }}>
      <img css={css`
        width: 70px;
        height: 70px;
        margin-right: 15px;
        border: 2px solid #dde3ea;
        padding: 2px;
        object-fit: cover;
        object-position: top;
        border-radius: 50%!important;
      `} src={item.headImg} alt=""/>

      <div>
          <Space css={css`margin-bottom: 3px`}>
              <span css={css`font-size: 16px`}>{item.starName}</span>
              {
                  item.starSex ==='男'?<ManOutlined css={css`color: ${token.token.blue}`} />:<WomanOutlined css={css`color: ${token.token.pink}`}/>
              }
              <Tag bordered color={item.starSex ==='男'?'blue':'pink'}>{(String(dayjs(item.birthdayDate).year())).split('')[2]+'0后'}</Tag>
          </Space>
          <div css={css`margin-bottom: 5px`}>{item.professions}</div>
          <div>
              {
                  (item.starCustomTags||'').split(',').map((i:string)=>{
                      return <Tag>{i}</Tag>
                  })
              }
          </div>
      </div>
  </div>
}

export default StarImgInfo
