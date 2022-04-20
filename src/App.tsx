import React, { useEffect } from "react";
import { Layout } from "antd";
import { HeaderLayout } from "./layouts/HeaderLayout";
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
        <Footer style={{ textAlign: 'center' }}>Calestru Catalin, CR-191</Footer>
      </Layout>
    </>
  );
}

export default App;
