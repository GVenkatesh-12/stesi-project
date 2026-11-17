import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  ExternalLink,
  Megaphone,
  CheckCheck,
  Calendar,
  ChevronRight,
  X,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { notifications, NotificationItem } from "@/data/notifications";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "stesi_notification_last_seen_id";
const documentLinkPattern = /\.(pdf|docx|pptx|xlsx|zip)$/i;

function getLastSeenId(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw != null ? parseInt(raw, 10) : 0;
  } catch {
    return 0;
  }
}

function setLastSeenId(id: number): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(id));
  } catch {
    // ignore
  }
}

const categoryStyles: Record<
  string,
  { badge: string; text: string }
> = {
  Announcement: {
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
  },
  "Call for Papers": {
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
  },
  "Important Dates": {
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    text: "text-amber-600 dark:text-amber-400",
  },
  Registration: {
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  Archive: {
    badge: "bg-primary/10 text-primary border-primary/20",
    text: "text-primary",
  },
};

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [lastSeenId, setLastSeenIdState] = useState(getLastSeenId);

  const maxId = notifications.length
    ? Math.max(...notifications.map((n) => n.id))
    : 0;

  const unreadCount = notifications.filter((n) => n.id > lastSeenId).length;
  const hasUnread = unreadCount > 0;

  useEffect(() => {
    if (open) setLastSeenIdState(getLastSeenId());
  }, [open]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const markAllAsRead = () => {
    if (maxId > 0) {
      setLastSeenId(maxId);
      setLastSeenIdState(maxId);
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "relative h-12 w-12 rounded-full border border-border/80 bg-background/95 shadow-xl backdrop-blur-md",
              "hover:bg-primary/10 hover:border-primary/40 hover:scale-105 active:scale-95",
              "transition-all duration-300 flex items-center justify-center group"
            )}
            aria-label="View announcements"
          >
            <Bell className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          side="top"
          align="end"
          sideOffset={14}
          className="w-[min(calc(100vw-2rem),360px)] p-0 border border-border/80 shadow-2xl rounded-2xl overflow-hidden bg-card/95 backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Megaphone className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-sm text-foreground">Announcements</h3>
            </div>

            <div className="flex items-center gap-1">
              {hasUnread && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                  title="Mark all as read"
                >
                  <CheckCheck className="h-3.5 w-3.5" />
                  <span>Mark read</span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="h-7 w-7 rounded-full text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Notifications Scroll Area */}
          <ScrollArea className="max-h-[min(70vh,380px)]">
            <div className="divide-y divide-border/40">
              {[...notifications].reverse().map((item) => {
                const isUnread = item.id > lastSeenId;
                const isDocumentLink =
                  item.link &&
                  documentLinkPattern.test(
                    decodeURIComponent(item.link).split(/[?#]/)[0]
                  );
                const categoryStyle = (item.category && categoryStyles[item.category]) || categoryStyles.Archive;

                return (
                  <div
                    key={item.id}
                    className={cn(
                      "p-4 transition-colors relative hover:bg-muted/40",
                      isUnread && "bg-primary/[0.03]"
                    )}
                  >
                    {isUnread && (
                      <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary" />
                    )}

                    <div className="space-y-2 pr-3">
                      {/* Top category pill & date */}
                      <div className="flex items-center gap-2 text-xs">
                        {item.category && (
                          <span
                            className={cn(
                              "px-2 py-0.5 rounded-full text-[10px] font-semibold border",
                              categoryStyle.badge
                            )}
                          >
                            {item.category}
                          </span>
                        )}
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                      </div>

                      {/* Title & Message */}
                      <h4 className="font-semibold text-sm text-foreground leading-snug">
                        {item.title}
                      </h4>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {item.message}
                      </div>

                      {/* Action Link Button */}
                      {item.link && (
                        <div className="pt-1">
                          {item.link.startsWith("/") && !isDocumentLink ? (
                            <Link
                              to={item.link}
                              onClick={() => {
                                markAllAsRead();
                                setOpen(false);
                              }}
                              className="text-xs font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1 group/link"
                            >
                              <span>{item.linkLabel ?? "Learn more"}</span>
                              <ChevronRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </Link>
                          ) : (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                markAllAsRead();
                                setOpen(false);
                              }}
                              className="text-xs font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1 group/link"
                            >
                              <span>{item.linkLabel ?? "Open link"}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
