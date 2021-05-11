import {lazy} from "react";

import {TabPanel, TabView} from "primereact/tabview";

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
            <ScrollToTop/>
                <TabView>
                    <TabPanel header="Header">
                        <AdminPage/>
                    </TabPanel>
                    <TabPanel header="Footer">
                        <FooterPage/>
                    </TabPanel>
                    <TabPanel header="Block">
                        <BlockContent/>
                    </TabPanel>
                    <TabPanel header="Message">
                        <ContactMessagePage/>
                    </TabPanel>
                </TabView>
        </Container>
    );
};

export default Admin;
