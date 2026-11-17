/**
 * STESI Site Announcements & Notifications.
 */
import type { ReactNode } from "react";

export interface NotificationItem {
  id: number;
  title: string;
  category?: "Announcement" | "Call for Papers" | "Important Dates" | "Registration" | "Archive";
  message: ReactNode;
  date: string;
  link?: string;
  linkLabel?: string;
}

export const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "STESI 2026 Archive & Gallery Live",
    category: "Archive",
    message: (
      <>
        Browse conference proceedings, Best Paper awards, 7 plenary keynote talks, and the photo gallery from the inaugural 2026 edition.
      </>
    ),
    date: "Nov 17, 2026",
    link: "/stesi-2026",
    linkLabel: "Explore 2026 Archive",
  },
];
