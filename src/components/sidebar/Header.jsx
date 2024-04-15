import { useState } from "react";
import { Dialog, Transition, Switch } from "@headlessui/react";
import {
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import PopoverGroup from "./PopoverGroup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full text-sm lg:w-auto">
      <nav
        className="mb-4 flex flex-row-reverse justify-between lg:m-0 lg:h-full lg:flex-col"
        aria-label="Global"
      >
        <div>
          <div className="hidden items-center gap-1 rounded-md p-1 font-medium hover:cursor-pointer hover:bg-gray-200 lg:flex">
            <UserCircleIcon
              className={`h-10 w-10 self-start ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
              aria-hidden="true"
            />
            <p
              className={`flex flex-col text-lg ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
            >
              Emre Sabancı
              <span className="text-xs opacity-75">
                Frontend Software Engineer
              </span>
            </p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={classNames(
                isDarkTheme ? "text-white" : "text-stale",
                `text-stale -m-2.5 inline-flex items-center justify-center rounded-md p-2.5`,
              )}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-2 hidden gap-2 lg:flex lg:flex-col">
            <PopoverGroup isDarkTheme={isDarkTheme} />
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className={`text-end lg:ml-auto ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
        >
          {isDarkTheme ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      <div className="relative">
        <Transition
          show={mobileMenuOpen}
          enter="transition-opacity duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-10 bg-gray-900 opacity-75 transition-opacity"
          />
        </Transition>
        <Transition
          show={mobileMenuOpen}
          enter="transition-transform duration-300 ease-out"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transition-transform duration-300 ease-in"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
          className={`fixed bottom-0 left-0 z-20 flex w-full flex-col justify-end overflow-y-auto rounded-xl px-6 py-6 ${isDarkTheme ? "bg-gray-900" : "bg-gray-100"}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-1 rounded-md p-1 font-medium">
              <UserCircleIcon
                className={`h-10 w-10 self-start ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
                aria-hidden="true"
              />
              <p
                className={`flex flex-col text-lg ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
              >
                Emre Sabancı
                <span className="text-xs opacity-75">
                  Frontend Software Engineer
                </span>
              </p>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <PopoverGroup isDarkTheme={isDarkTheme} />
          </div>
        </Transition>
      </div>
    </header>
  );
}
