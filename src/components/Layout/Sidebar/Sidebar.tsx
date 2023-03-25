import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, FormOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/", <NavLink to="/" />),
  getItem("Form Builder", "/form-builder", <NavLink to="/form-builder" />),
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
