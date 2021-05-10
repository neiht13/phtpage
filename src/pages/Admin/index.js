import { lazy } from "react";

import ContactContent from "../../content/ContactContent.json";
import { Tabs } from 'antd';
import {TabPanel, TabView} from "primereact/tabview";

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const AdminPage = lazy(() => import("./Menu"));
const ContactMessagePage = lazy(() => import("./Message"));
const FooterPage = lazy(() => import("./Footer"));
const BlockContent = lazy(() => import("./BlockContent"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Admin = () => {
  return (
    <Container>
      <ScrollToTop />
        <Tabs defaultActiveKey="1" onChange={callback} type="card">
            <TabPane tab="Header" key="1">
                <AdminPage/>
            </TabPane>
            <TabPane tab="Footer" key="2">
                <FooterPage/>
            </TabPane>
            <TabPane tab="Block" key="3">
                <BlockContent/>
            </TabPane>
            <TabPane tab="Message" key="4">
                <ContactMessagePage/>
            </TabPane>
        </Tabs>
        <TabView>
            <TabPanel header="Header I">
                <AdminPage/>
            </TabPanel>
            <TabPanel header="Header II">
                <FooterPage/>
            </TabPanel>
            <TabPanel header="Header III">
                <ContactMessagePage/>
            </TabPanel>
        </TabView>
    </Container>
  );
};

export default Admin;
