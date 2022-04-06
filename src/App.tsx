import React, { useEffect } from "react";
import { Layout } from "antd";
import { HeaderLayout } from "./layouts/HeaderLayout";
import { ContentLayout } from "./layouts/ContentLayout";
import { Footer } from "antd/lib/layout/layout";
import { useRootStore } from ".";


function App() {

  const rootStore = useRootStore()

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])

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
