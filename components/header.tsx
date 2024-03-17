"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { HeaderList } from "@/const/header-list";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex py-7 px-3 gap-5 overflow-scroll scrollbar-hide bg-[#2E2E37]">
      {HeaderList.map((item) => (
        <div className="px-3" key={item.id}>
          <span
            onClick={() => router.push(item.pathname)}
            className={cn(
              "text-md lg:text-xl text-white font-bold truncate cursor-pointer border-b-2 p-3 ",
              pathname === item.pathname ? "border-[#E631A1]" : "border-none"
            )}
          >
            {item.title || ""}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Header;
