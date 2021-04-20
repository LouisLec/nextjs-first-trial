import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { NavigationList } from "../typings/typings";

const name = "Louis Lecs";
export const siteTitle = "Next.js Fisrt Trial";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

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

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jo</title>
      </Head>
      <header>
        <Header
          navigation={navigation}
          userNavigation={userNavigation}
        ></Header>
      </header>
      <div className="min-h-screen">{children}</div>
      <footer>
        <Footer navigationLists={navigationLists}></Footer>
      </footer>
    </div>
  );
}
