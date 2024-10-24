//menuItems.tsx

import React from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  route?: any,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    route,
    children,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem("Home", "0", <HomeOutlined />, "/"),
  getItem("Events Hub", "1", <PieChartOutlined />, "/event"),
  getItem("Presenters", "2", <DesktopOutlined />, "/presenters"),
  getItem("About", "3", <FileOutlined />, "/about"),
  getItem("Day Pass", "4", <UsergroupAddOutlined />, "/register/1"),
];

export const MenuKeys: any = {
  "/home": "0",
  "/event": "1",
  "/presenters": "2",
  "/about": "3",
  "/register": "4",
};
