import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import AppHeader from "./components/Layout/Header";
import AppSidebar from "./components/Layout/Sidebar";
import AppRoutes from "./AppRoutes";

import "./App.css";

const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout style={{ height: "100vh", width: "100vw" }}>
        <AppSidebar collapsed={collapsed} />
        <Layout style={{ width: "100%" }}>
          <AppHeader />
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <AppRoutes />
            </div>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
