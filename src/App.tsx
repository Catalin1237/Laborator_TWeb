import React, { useEffect } from "react";
import { Layout } from "antd";
import { HeaderLayout } from "./layouts/HeaderLayout";
import { Footer } from "antd/lib/layout/layout";
import { useLoginStore, useRootStore } from ".";

function App() {
  const rootStore = useRootStore()
  const loginS = useLoginStore();

  useEffect(() => {
      rootStore.setInitialStorageContents()
  }, [])

  useEffect(() => {
      loginS.setInitialStorageContents()
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
