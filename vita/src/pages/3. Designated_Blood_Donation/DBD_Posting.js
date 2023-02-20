import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import General from '../../components/DBD_General';
import Hospital from '../../components/DBD_Hospital';

function DbdGanner() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="일반 사용자">
        <General />
      </Tab>
      <Tab eventKey="profile" title="병원">
        <Hospital />
      </Tab>
    </Tabs>
  );
}

export default DbdGanner;
