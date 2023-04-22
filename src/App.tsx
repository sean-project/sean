import MainBox from "./layouts/MainBox.tsx";
import { FloatButton } from 'antd';

function App() {
  return (
      <div>
          <MainBox></MainBox>
          <FloatButton.BackTop />
      </div>
  )
}

export default App
