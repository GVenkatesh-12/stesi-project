/**
 * STESI 2027 Site Announcements & Notifications.
 */
import type { ReactNode } from "react";

export interface NotificationItem {
  id: number;
  title: string;
  category: "Announcement" | "Call for Papers" | "Important Dates" | "Registration" | "Archive";
  message: ReactNode;
  date: string;
  link?: string;
  linkLabel?: string;
  isUrgent?: boolean;
}

export const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "2nd STESI 2027 Announced",
    category: "Announcement",
    message: (
      <>
        The 2nd International Conference on Smart Technologies for Energy, Sustainability &amp; Industry (STESI 2027) will take place on{" "}
        <span className="font-semibold text-foreground">August 5–6, 2027</span> at Manipal University Jaipur, India.
      </>
    ),
    date: "Dec 01, 2026",
    link: "/about",
    linkLabel: "About STESI 2027",
  },
  {
    id: 2,
    title: "First Call for Papers Released",
    category: "Call for Papers",
    message: (
      <>
        Authors are invited to submit original, unpublished research papers across our{" "}
        <span className="font-semibold text-foreground">7 conference tracks</span> via Microsoft CMT.
      </>
    ),
    date: "Dec 01, 2026",
    link: "/call-for-papers",
    linkLabel: "View Tracks & Topics",
  },
  {
    id: 3,
    title: "Submission Deadline: March 15, 2027",
    category: "Important Dates",
    message: (
      <>
        Last date for full manuscript submission is{" "}
        <span className="font-semibold text-primary">March 15, 2027</span>. Prepare papers adhering to the standard IEEE double-column format.
      </>
    ),
    date: "Dec 01, 2026",
    link: "/call-for-papers",
    linkLabel: "Submission Guidelines",
  },
  {
    id: 4,
    title: "Notification of Acceptance: April 15, 2027",
    category: "Important Dates",
    message: (
      <>
        Double-blind review decisions and author feedback will be communicated on{" "}
        <span className="font-semibold text-foreground">April 15, 2027</span>, followed by camera-ready submissions due April 30, 2027.
      </>
    ),
    date: "Dec 01, 2026",
    link: "/camera-ready",
    linkLabel: "Camera-Ready Info",
  },
  {
    id: 5,
    title: "Registration Schedule Announced",
    category: "Registration",
    message: (
      <>
        Author and delegate registration opens on{" "}
        <span className="font-semibold text-foreground">May 5, 2027</span> and closes on{" "}
        <span className="font-semibold text-foreground">July 5, 2027</span>. Standard IEEE member discounts apply.
      </>
    ),
    date: "Dec 01, 2026",
    link: "/registration",
    linkLabel: "View Fee Structure",
  },
  {
    id: 6,
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
