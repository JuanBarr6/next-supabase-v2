"use client";

import { Input } from "@/components/ui/input";
import { Bell, Search, Menu } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "@/feature/protected/componets/molecule/themetoggle";

export default function TopNavBar() {
  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center justify-between w-full sm:w-auto gap-3">
        <div className="flex items-center gap-3">
          <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
          <h1 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white truncate">
            My profile
          </h1>
        </div>
      </div>

      <div className="w-full sm:max-w-md relative hidden md:flex">
        <Input
          type="text"
          placeholder="Search here..."
          className="w-full pl-10 pr-4 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white border dark:border-gray-700"
        />
        <Search className="w-4 h-4 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>

      <div className="flex items-center gap-3 justify-end w-full sm:w-auto">
        <ThemeToggle />
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
        <Image
          src="/hola.png"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>
    </header>
  );
}
