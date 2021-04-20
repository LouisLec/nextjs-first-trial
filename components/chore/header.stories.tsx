import React from "react";
import { Story, Meta } from "@storybook/react";

import { Header } from "./header";
import { HeaderProps } from "../typings/typings";

export default {
  title: "Layout / Appbar",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

const user = {
  firstname: "Tom",
  lastname: "Cook",
  email: "tom@example.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Team", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "#" },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export const Connecté = Template.bind({});
Connecté.args = {
  navigation: navigation,
  userNavigation: userNavigation,
  user: user,
};

export const NonConnecté = Template.bind({});
NonConnecté.args = {
  navigation: navigation,
  userNavigation: userNavigation,
};
