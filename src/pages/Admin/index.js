import { lazy } from "react";

import ContactContent from "../../content/ContactContent.json";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const AdminPage = lazy(() => import("./Menu"));
const ContactMessagePage = lazy(() => import("./Message"));
const ContentBlockPage = lazy(() => import("./Block"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Admin = () => {
  return (
    <Container>
      <ScrollToTop />
        <Tabs defaultActiveKey="1" onChange={callback} type="card">
            <TabPane tab="Tab 1" key="1">
                <AdminPage/>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                <ContentBlockPage/>
            </TabPane>
            <TabPane tab="Tab 3" key="3">
                <ContactMessagePage/>
            </TabPane>
        </Tabs>
    </Container>
  );
};

export default Admin;
