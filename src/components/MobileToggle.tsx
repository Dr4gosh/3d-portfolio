import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
// import { NavigationSidebar } from "./navigation/navigation-sidebar";
// import { ServerSidebar } from "./server/ServerSidebar";

const MobileToggle = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex gap-0 p-0" side={"right"}>
          <div className="w-[72px]">{/* <NavigationSidebar /> */}</div>
          {/* <ServerSidebar serverId={serverId} /> */}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileToggle;
