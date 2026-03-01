/**
 * Site announcements & notifications.
 * To add a new notification: append a new object to the array below.
 * Use a new id (higher than previous). The badge will show until the user opens the panel.
 */

import type { ReactNode } from "react";

export interface NotificationItem {
  id: number;
  title: string;
  message: ReactNode;
  date: string;
  link?: string;
  linkLabel?: string;
}

export const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "Call for Papers Open",
    message: (
      <>
        STESI 2026 is now accepting paper submissions.
      </>
    ),
    date: "Jan 31, 2026",
    link: "/call-for-papers",
    linkLabel: "View details",
  },
  {
    id: 2,
    title: "Paper Submission Deadline Extended",
    message: (
      <>
        Good news! The paper submission deadline has been extended. The new{" "}
        <span className="font-semibold">hard deadline is March 15, 2026</span>.
      </>
    ),
    date: "March 01, 2026",
    link: "/call-for-papers",
    linkLabel: "Submit your paper",
  },
];
