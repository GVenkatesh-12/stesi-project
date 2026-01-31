import { useState, useEffect } from "react";
import { Bell, ExternalLink, Megaphone } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { notifications } from "@/data/notifications";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "stesi_notification_last_seen_id";

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

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [lastSeenId, setLastSeenIdState] = useState(getLastSeenId);

  const maxId = notifications.length
    ? Math.max(...notifications.map((n) => n.id))
    : 0;
  const hasUnread = maxId > lastSeenId;

  // Re-read from storage when popover opens (e.g. another tab might have updated)
  useEffect(() => {
    if (open) setLastSeenIdState(getLastSeenId());
  }, [open]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen && maxId > 0) {
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
              "h-12 w-12 rounded-full border-2 bg-background/95 shadow-lg backdrop-blur-sm",
              "hover:bg-primary/10 hover:border-primary/30 hover:scale-105",
              "transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-label="View announcements"
          >
            <Bell className="h-5 w-5 text-primary" strokeWidth={2} />
            {hasUnread && (
              <span
                className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-destructive ring-2 ring-background"
                aria-hidden
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={12}
          className="w-[min(calc(100vw-2rem),380px)] p-0 border shadow-xl rounded-xl overflow-hidden"
        >
          <div className="sticky top-0 z-10 flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
            <Megaphone className="h-5 w-5 text-primary shrink-0" />
            <h3 className="font-semibold text-foreground">Announcements</h3>
          </div>
          <ScrollArea className="max-h-[min(70vh,320px)]">
            <ul className="divide-y">
              {[...notifications].reverse().map((item) => (
                <li key={item.id} className="px-4 py-3 hover:bg-muted/30 transition-colors">
                  <div className="space-y-1">
                    <p className="font-medium text-sm text-foreground leading-tight">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {item.message}
                    </p>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className="text-xs text-muted-foreground">
                        {item.date}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          onClick={() => setOpen(false)}
                          className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {item.linkLabel ?? "View"}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
