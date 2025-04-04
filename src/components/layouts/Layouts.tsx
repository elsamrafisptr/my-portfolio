"use client";

import { ReactNode, useEffect, useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import MenuBar from "../elements/menu-bar";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useScreenSize();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden rounded-lg bg-background dark:bg-black/75 md:shadow-xl">
      {!isMobile && (
        <InteractiveGridPattern
          className={cn("opacity-50 [mask-image:radial-gradient(720px_circle_at_center,white,transparent)]")}
          width={20}
          height={20}
          squares={[80, 80]}
          squaresClassName="hover:fill-blue-500"
        />
      )}
      <div className="relative z-10 flex w-full flex-col justify-center lg:flex-row lg:gap-5">
        <MenuBar />
        <main
          className="no-scrollbar h-full w-full scroll-smooth bg-white px-5 shadow-2xl shadow-gray-200 transition-all duration-300 dark:bg-black/75 dark:shadow-gray-600 lg:min-h-screen lg:max-w-[720px] lg:px-12"
          role="main"
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
