"use client";
import Logo from "@/common/Logo";
import { poppins } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();

  const navigationLinks = [
    {
      name: "Launchpad",
      icon: "/images/rocket_launch.svg",
      to: "/launchpad",
    },
    {
      name: "Analytics",
      icon: "/images/trending-up.svg",
      to: "/analytics",
    },
    {
      name: "Notifications",
      icon: "/images/bell.svg",
      to: "/notification",
    },
  ];
  return (
    <div>
      <div
        className="py-10 w-[12rem] h-screen fixed"
        style={{
          background: "#130712",
          // width: "15%",
        }}
      >
        <div className="px-4">
          <Logo height={30} />
        </div>
        <div className="flex flex-col py-10">
          {navigationLinks.map(({ name, to, icon }) => (
            <Link key={name} href={to} className={`${poppins.className} text-sm`}>
              <div
                className="flex gap-4 w-full text-white items-center px-4 py-3"
                style={{
                  margin: "1.25rem 0",
                  backgroundColor:
                    to === pathName ? "rgba(255, 199, 44, 0.12)" : "none",
                    borderRight:
                    to === pathName ? "4px solid #FFC72C" : "none",
                }}
              >
                <Image src={icon} alt="icons" height={20} width={20} />
                <p>{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SideBar;
