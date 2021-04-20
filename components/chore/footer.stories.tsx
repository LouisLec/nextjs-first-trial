import React from "react";
import { Story, Meta } from "@storybook/react";

import { Footer } from "./footer";
import { FooterProps, NavigationList } from "../../typings/typings";

const navigationLists: NavigationList[] = [
  {
    title: "solutions",
    navigationItems: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Jojo", href: "#" },
    ],
  },
  {
    title: "support",
    navigationItems: [
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" },
    ],
  },
  {
    title: "company",
    navigationItems: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  {
    title: "legal",
    navigationItems: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
];

export default {
  title: "Layout/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const FooterExample = Template.bind({});
FooterExample.args = {
  navigationLists: navigationLists,
};
