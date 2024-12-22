"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChartLine, CreditCard, LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="SheSpectrum" width={40} />
      </Link>
      <div className="flex items-center">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-black">SS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut />
              <Link
                href="/auth"
                onClick={() => localStorage.removeItem("provider")}
              >
                Logout
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              <Link href="/billing">Subscription and Billing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ChartLine />
              <Link href="/analytics">Analytics</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
