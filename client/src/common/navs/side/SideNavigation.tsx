"use client";
import Logo from "@/common/Logo";
import { poppins } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";

interface SideBarProps {
  menuNav: () => void; // Define the prop type for menuNav
}

const SideBar: React.FC<SideBarProps> = ({ menuNav }) => {
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
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
      <div
        className="py-10 w-[11rem] laptop:w-[15rem] h-screen fixed"
        style={{
          background: "#130712",
          // width: "15%",
        }}
      >
        <div className="px-1 flex gap-3 laptop:gap-5 ">
          <div className="cursor-pointer" onClick={menuNav}>
            <AiOutlineMenu  className="h-6 w-6 items-center" />
          </div>
          
          <Logo height={30} />
        </div>
        <div className="flex flex-col py-10">
          {navigationLinks.map(({ name, to, icon }) => (
            <Link
              key={name}
              href={to}
              className={`${poppins.className} text-sm`}
            >
              <div
                className="flex gap-4 w-full text-white items-center px-4 py-3"
                style={{
                  margin: "1.25rem 0",
                  backgroundColor:
                    to === pathName ? "rgba(255, 199, 44, 0.12)" : "none",
                  borderRight: to === pathName ? "4px solid #FFC72C" : "none",
                }}
              >
                <Image src={icon} alt="icons" height={20} width={20} />
                <p>{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
