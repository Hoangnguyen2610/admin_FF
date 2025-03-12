"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoBell, GoGift } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { HiOutlineChatAlt } from "react-icons/hi";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainNav = () => {
  const router = useRouter();

  return (
    <div className="jb w-full gap-4 py-8">
      <Link href={"/"}>
        <Avatar>
          <AvatarImage src="https://res.cloudinary.com/dpubnzap3/image/upload/v1738821741/ic45aqy23c7ynle7yemv.png" />
          <AvatarFallback>FLashFood</AvatarFallback>
        </Avatar>
      </Link>

      <Input
        type="email"
        placeholder="Search here..."
        className="bg-white flex-1"
      />
      <div className=" jb gap-8 ">
        <div className="jb gap-4 max-md:hidden">
          <div className="w-10 aspect-square rounded-xl relative cc bg-info-100 shadow-md shadow-info-300 hover-sd">
            <GoBell className="text-info-500" />
            <Badge
              className="absolute -top-1 -right-1 border-2 border-white text-[0.5rem] px-[0.14rem] py-[0.1rem] bg-info-500"
              variant="default"
            ></Badge>
          </div>
          <div className="w-10 aspect-square rounded-xl relative cc bg-primary-100 shadow-md shadow-primary-300 hover-sd">
            <HiOutlineChatAlt className="text-primary-500" />
            <Badge
              className="absolute -top-1 -right-1 border-2 border-white text-[0.5rem] px-[0.14rem] py-[0.1rem] bg-primary-500"
              variant="default"
            ></Badge>
          </div>
          <div
            onClick={() => router.push("/promotions")}
            className="w-10 aspect-square rounded-xl relative cc bg-success-100 shadow-md shadow-success-300 hover-sd cursor-pointer"
          >
            <GoGift className="text-success-700" />
            <Badge
              className="absolute -top-1 -right-1 border-2 border-white text-[0.5rem] px-[0.14rem] py-[0.1rem] bg-success-700"
              variant="default"
            ></Badge>
          </div>
          <div className="w-10 aspect-square rounded-xl relative cc bg-danger-100 shadow-md shadow-danger-300 hover-sd">
            <FiSettings className="text-danger-500" />
            <Badge
              className="absolute -top-1 -right-1 border-2 border-white text-[0.5rem] px-[0.14rem] py-[0.1rem] bg-danger-500"
              variant="default"
            ></Badge>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="bg-neutral-400 py-4 max-md:hidden"
        />
        <div className="jb gap-2">
          <h5 className="max-md:hidden">
            Hello, <span className="font-semibold">Admin</span>
          </h5>
          <Avatar>
            <AvatarImage src="https://res.cloudinary.com/dpubnzap3/image/upload/v1738811319/itrjvcocagj8irjbpnmd.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
