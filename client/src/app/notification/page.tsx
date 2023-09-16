import NavTools from "@/common/navs/NavTools";
import SideBar from "@/common/navs/side/SideNavigation";
import NotificationTile from "@/components/NotificationTile";
import { notificationsData } from "@/data/notification";
import Link from "next/link";
import React from "react";

const Notification: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className=" w-[20dvw] h-screen">
        <SideBar />
      </div>
      <div className="w-[79dvw]  px-4 py-10">
        <div className="mx-5 text-white">
          <NavTools title="Notifications" isMenu={true} />
        </div>

        <div className="mx-10">
          <div className="flex justify-end mb-10 mt-14">
            <p className="text-primary">mark all as read</p>
          </div>

          {notificationsData.map(
            ({ title, message, duration, profile }, index) => (
              <div className="text-white">
              <NotificationTile
                key={index}
                title={title}
                message={message}
                time={duration}
                source={profile}
              />
              </div>
            ),
          )}

          <div className="flex justify-end mb-10 mt-14">
            <Link href="/marketplace">
              <p className="text-primary">Go to Marketplace</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
