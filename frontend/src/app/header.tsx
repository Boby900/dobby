"use client";


import { ModeToggle } from "./mode-toggle";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  
  return (
    <div className="border-b-2 border-slate-300 ">
      <div className="h-16  container  flex justify-between items-center ">
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Main Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={"/"}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/pricing"}>Pricing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/about"}>About</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Link href="/signup" className="link hidden  sm:block">
            SignUp
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-between  w-[10%]">
       
            
            <Link href="/dashboard" className="link hidden sm:block">
              Dashboard
            </Link>
            <Link href="/create" className="link hidden sm:block">
              Create
            </Link>
         
            <Link href="/about" className="link text-gray-100 hidden sm:block">
              About
            </Link>
            
            <Link href="/login" className="link hidden sm:block">
              Login
            </Link>
            <Link href="/logout" className="link hidden sm:block">
              LogOut
            </Link>
        
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
