/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import React, { FC, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderProps } from "../../typings/typings";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header: FC<HeaderProps> = ({
  user,
  navigation,
  userNavigation,
  children: _children,
}) => {
  const router = useRouter();
  return (
    <Disclosure as="header" className="bg-secondary-800 shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative h-16 flex justify-between">
              {/* Logo */}
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto sm:hidden"
                    src="/images/articonnex-sm-dark.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden sm:block lg:hidden h-8 w-auto"
                    src="/images/articonnex-md-dark.svg"
                    alt="Workflow"
                  />
                  <img
                    className=" h-8 w-auto hidden lg:block"
                    src="/images/articonnex-lg-dark.svg"
                    alt="Workflow"
                  />
                </div>
              </div>

              {/* Searchbar */}
              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Rechercher
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon
                        className="h-5 w-5 text-secondary-500"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-secondary-200 focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      placeholder="Rechercher"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="relative z-10 flex items-center lg:hidden">
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-secondary-100 hover:bg-secondary-900 hover:text-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                {/* Notification bell */}
                {/* {!!user && (
                  <button className="flex-shrink-0 bg-white rounded-full p-1 text-secondary-100 hover:text-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                )} */}

                {/* Profile dropdown */}
                {!!user ? (
                  <Menu as="div" className="flex-shrink-0 relative ml-4">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={`${user.avatarUrl}`}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={`${item.name}`}>
                                {({ active }) => (
                                  <a
                                    href={`${item.href}`}
                                    className={classNames(
                                      active ? "bg-secondary-900" : "",
                                      "block py-2 px-4 text-sm text-secondary-800"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ) : (
                  <>
                    <div className="hidden lg:flex space-x-2">
                      <Link href="/connexion">
                        <a className="bg-primary-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                          Connexion
                        </a>
                      </Link>
                      <Link href="/inscription">
                        <a className="bg-primary-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                          Inscription
                        </a>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:py-2 lg:flex lg:space-x-8"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <Link href={`${item.href}`} key={`${item.name}-mobile-nav`}>
                  <a
                    className={classNames(
                      item.href === router.pathname
                        ? "bg-secondary-900 text-secondary-100"
                        : "text-secondary-100 hover:bg-gray-50 hover:text-secondary-900",
                      "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                    )}
                    aria-current={
                      item.href === router.pathname ? "page" : undefined
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="pt-2 pb-3 px-2 space-y-1">
              {navigation.map((item) => (
                <Link key={`${item.name}`} href={`${item.href}`}>
                  <a
                    className={classNames(
                      item.href === router.pathname
                        ? "bg-secondary-900 text-secondary-200"
                        : "text-secondary-100 hover:bg-secondary-900 hover:text-secondary-200",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                    aria-current={
                      item.href === router.pathname ? "page" : undefined
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            {!!user ? (
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="px-4 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`${user.avatarUrl}`}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.firstname} {user.lastname}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-secondary-100 hover:text-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <a
                      key={`${item.name}`}
                      href={`${item.href}`}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-secondary-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className=" lg:hidden flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pb-4">
                  <Link href="/connexion">
                    <a className="bg-primary-500 border border-transparent rounded-md py-1 px-3 mx-5 text-sm font-normal text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center justify-center  ">
                      Connexion
                    </a>
                  </Link>
                  <Link href="/inscription">
                    <a className="bg-primary-500 border border-transparent rounded-md py-1 px-3 mx-5 text-sm font-normal text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center justify-center  ">
                      Inscription
                    </a>
                  </Link>
                </div>
              </>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
