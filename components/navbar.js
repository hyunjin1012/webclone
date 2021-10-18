import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = [{id: 1, link: "Pricing", url: "/pricing"},{id: 2, link: "Embed Widgets", url: "/"}, {id: 3, link: "Sign In", url: "/signIn"}];

  return (
    <div className="fixed z-10 w-full bg-white bg-opacity-90 dark:bg-trueGray-800">
      <nav className=" container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-tertiary-color dark:text-gray-100">
                    <span>
                      <img
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Nextly</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-tertiary-color focus:text-tertiary-color focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden text-center">
                  <>
                    {navigation.map(props => (
                      <Link key={props.id} href={props.url}>
                        <a className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-tertiary-color focus:text-tertiary-color focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                          {props.link}
                        </a>
                      </Link>
                    ))}
                    <Link href="/signUp">
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-primary-color rounded-md lg:ml-5">
                        Sign Up
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="flex flex-row">
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map(props => (
                <li className="mr-3 nav__item" key={props.id}>
                  <Link href={props.url}>
                    <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-tertiary-color focus:text-tertiary-color focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      {props.link}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link href="/signUp">
              <a className="px-6 py-2 text-white bg-primary-color rounded-md md:ml-5">
                Sign Up
              </a>
            </Link>

            <ThemeChanger />
          </div>
        </div>
      </nav>
    </div>
  );
}
