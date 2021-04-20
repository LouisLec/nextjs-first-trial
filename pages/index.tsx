import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../components/chore/layout";
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { FC } from "react";

const supportLinks = [
  {
    name: "Sales",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: SupportIcon,
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: NewspaperIcon,
  },
];

const HeadingSection: FC<any> = (props) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-secondary-800">
        <div className="absolute inset-0">
          <Image
            src="/images/articonnex-vente-location-artisans-surplus-materiaux-1.webp"
            layout="fill"
            objectFit="cover"
          ></Image>
          <div
            className="absolute inset-0 bg-gradient-to-b from-secondary-200  from-opacity-0"
            style={{ mixBlendMode: "multiply" }}
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Support
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="bg-white rounded-2xl shadow-xl">
              <div className="relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Home: NextPage = ({}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <section>
          <HeadingSection></HeadingSection>
        </section>
      </main>
    </Layout>
  );
};
export default Home;
