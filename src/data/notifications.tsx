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
  {
    id: 3,
    title: "Paper Submission Closed",
    message: (
      <>
        Paper submissions for STESI 2026 are now{" "}
        <span className="font-semibold text-red-600">closed</span>. Thank you to
        everyone who submitted their work.
      </>
    ),
    date: "March 16, 2026",
  },
  {
    id: 4,
    title: "Decision Notification",
    message: (
      <>
        Acceptance decisions are expected to be communicated{" "}
        <span className="font-semibold">from April 25, 2026 onwards</span>.
      </>
    ),
    date: "March 16, 2026",
  },
  {
    id: 5,
    title: "Registration is Now Open!",
    message: (
      <>
        Registration for STESI 2026 is now{" "}
        <span className="font-semibold text-green-600">open</span>. Complete
        your camera-ready paper submission and registration before the deadline
        on <span className="font-semibold">May 30, 2026</span>.
      </>
    ),
    date: "April 24, 2026",
    link: "/registration",
    linkLabel: "Register now",
  },
  {
    id: 7,
    title: "Poster Template Uploaded",
    message: (
      <>
        The official{" "}
        <span className="font-semibold">
          A0 size (2.76×3.90 feet) poster template
        </span>{" "}
        is now available under{" "}
        <span className="font-semibold">Authors → Templates</span>.
      </>
    ),
    date: "May 20, 2026",
    link: "/templates",
    linkLabel: "Download template",
  },
];
