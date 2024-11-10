import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./theme-btn";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b-2 backdrop-blur-[3px] z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Jeb Dhili</Link>
        </div>
        <ul className="hidden lg:flex space-x-4 items-center">
          <li>
            <Link
              href={"/"}
              className="hover:text-gray-400 transition-transform duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/developer"}
              className="hover:text-gray-400 transition-transform duration-300"
            >
              Developer
            </Link>
          </li>
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li className="">
            <UserButton showName />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
