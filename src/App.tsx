import React from "react";
import { Layout } from "antd";
import { HeaderLayout } from "./layouts/HeaderLayout";
import { ContentLayout } from "./layouts/ContentLayout";
import { Footer } from "antd/lib/layout/layout";


function App() {

  return (
    <>
      <Layout>
        <HeaderLayout />
        <ContentLayout />
        <Footer style={{ textAlign: 'center' }}>Calestru Catalin, CR-191</Footer>
      </Layout>
    </>
  );
}

export default App;
