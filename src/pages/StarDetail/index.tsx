import { ProCard } from '@ant-design/pro-components';
import StarCoreInfo from "./StarCoreInfo";
import StarBaseInfo from "./StarBaseInfo.tsx";
const StarDetail = () => {
  return <div>
      <ProCard gutter={8}>
          <ProCard colSpan={8}>
              <StarBaseInfo/>
          </ProCard>
          <ProCard colSpan={16}>
              <StarCoreInfo/>
          </ProCard>
      </ProCard>
  </div>
}

export default StarDetail
