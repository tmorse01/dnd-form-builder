import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader: React.FC = () => {
  return (
    <Header className="header">
      <div className="logo">
        <Title level={3} style={{ color: "white", margin: 0 }}>
          Form Builder
        </Title>
      </div>
    </Header>
  );
};

export default AppHeader;
