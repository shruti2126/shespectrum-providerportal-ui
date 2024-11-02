import {
  CreditCard,
  LayoutDashboard,
  Newspaper,
  Folders,
  Settings,
  User,
  Calendar,
  Smile,
  Calculator,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none border shadow-md md:min-w-[300px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard />
            <Link href={"/dashboard"}>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper />
            <Link href={"/posts"}>Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders />
            <Link href={"/categories"}>Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
