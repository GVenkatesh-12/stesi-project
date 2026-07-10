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
        on <s><span className="font-semibold">May 30, 2026</span></s>{" "}
        <s><span className="font-semibold">June 15, 2026</span></s>{" "}
        <span className="font-semibold">June 22, 2026</span>.
      </>
    ),
    date: "April 24, 2026",
    link: "/registration",
    linkLabel: "Register now",
  },
  {
    id: 8,
    title: "Deadline Extended!",
    message: (
      <>
        The registration and camera-ready paper submission deadline has been
        extended to{" "}
        <span className="font-semibold">June 22, 2026</span>. Complete your
        submission and registration before the new deadline.
      </>
    ),
    date: "June 01, 2026",
    link: "/registration",
    linkLabel: "Register now",
  },
  {
    id: 9,
    title: "PPT Template Uploaded",
    message: (
      <>
        The official{" "}
        <span className="font-semibold">
          STESI PPT template
        </span>{" "}
        is now available under{" "}
        <span className="font-semibold">Authors → Templates</span>.
      </>
    ),
    date: "June 16, 2026",
    link: "/templates",
    linkLabel: "Download template",
  },
  {
    id: 10,
    title: "Registration Closed",
    message: (
      <>
        Registration is now{" "}
        <span className="font-semibold text-red-600">CLOSED</span>. The list of accepted and registered papers shall be updated soon.
      </>
    ),
    date: "June 23, 2026",
    link: "/accepted-papers",
    linkLabel: "View papers page",
  },
  {
    id: 11,
    title: "Accepted Papers Uploaded",
    message: (
      <>
        The list of{" "}
        <span className="font-semibold">accepted and registered papers</span>{" "}
        has been uploaded.
      </>
    ),
    date: "June 30, 2026",
    link: "/accepted-papers",
    linkLabel: "Download list",
  },
  {
    id: 12,
    title: "Program Schedule Uploaded",
    message: (
      <>
        The <span className="font-semibold">STESI 2026 program schedule</span>{" "}
        is now available.
      </>
    ),
    date: "July 09, 2026",
    link: "/program%20schedule_STESI2026.pdf",
    linkLabel: "Download schedule",
  },
  {
    id: 13,
    title: "Technical Session Schedule Uploaded",
    message: (
      <>
        The{" "}
        <span className="font-semibold">
          STESI 2026 technical session schedule
        </span>{" "}
        is now available.
      </>
    ),
    date: "July 10, 2026",
    link: "/Detail_Technical%20Session_STESI2026.pdf",
    linkLabel: "Download schedule",
  },
];
