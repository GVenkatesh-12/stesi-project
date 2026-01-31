/**
 * Site announcements & notifications.
 * To add a new notification: append a new object to the array below.
 * Use a new id (higher than previous). The badge will show until the user opens the panel.
 */

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  date: string;
  link?: string;
  linkLabel?: string;
}

export const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "Call for Papers Open",
    message: "STESI 2026 is now accepting paper submissions. Submit your research by February 15, 2026.",
    date: "Jan 31, 2026",
    link: "/call-for-papers",
    linkLabel: "View details",
  },
  // Add new notifications below. Use the next id (e.g. 2, 3, 4...).
  // {
  //   id: 2,
  //   title: "Your announcement title",
  //   message: "Your message here.",
  //   date: "Jan 31, 2026",
  //   link: "/optional-page",
  //   linkLabel: "Learn more",
  // },
];
