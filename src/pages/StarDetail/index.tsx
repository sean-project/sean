import { ProCard } from '@ant-design/pro-components';
import StarCoreInfo from "./StarCoreInfo";
import StarBaseInfo from "./StarBaseInfo.tsx";
import {useRequest} from "ahooks";
import axios from "axios";
import {useParams} from "react-router-dom";
const StarDetail = () => {
    const pam = useParams()
    const {starId} = pam
    const {data} = useRequest(()=>{
        return axios.get(`/api/star/${starId}`).then(res=>res.data)
    })

  return <div>
      {data &&       <ProCard gutter={8}>

          <ProCard colSpan={8}>
              <StarBaseInfo data={data}/>
          </ProCard>
          <ProCard colSpan={16}>
              <StarCoreInfo/>
          </ProCard>
      </ProCard>}

  </div>
}

export default StarDetail
