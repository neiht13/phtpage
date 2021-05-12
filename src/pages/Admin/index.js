import {lazy} from "react";

import {TabPanel, TabView} from "primereact/tabview";

function callback(key) {
    console.log(key);
}

const AdminPage = lazy(() => import("./Menu"));
const SystemPage = lazy(() => import("./System"));
const ContactMessagePage = lazy(() => import("./Message"));
const FooterPage = lazy(() => import("./Footer"));
const BlockContent = lazy(() => import("./BlockContent"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Admin = () => {
    return (
        <Container>
            <ScrollToTop/>
                <TabView>
                    <TabPanel header="Hệ thống">
                        <SystemPage/>
                    </TabPanel>
                    <TabPanel header="Tiêu đề">
                        <AdminPage/>
                    </TabPanel>
                    <TabPanel header="Chân trang">
                        <FooterPage/>
                    </TabPanel>
                    <TabPanel header="Thành phần nội dung">
                        <BlockContent/>
                    </TabPanel>
                    <TabPanel header="Tin nhắn">
                        <ContactMessagePage/>
                    </TabPanel>
                </TabView>
        </Container>
    );
};

export default Admin;
