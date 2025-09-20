import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Notifications } from "@/components/Notifications";
const Placeholder = ({ className }) => (
  <div className={cn("bg-muted/20 rounded-md", className)} />
);

const siteEvents = [
  {
    name: "Site Inspection.pdf",
    body: "Inspection report for Zone A. All safety protocols followed. Minor debris found near entrance, flagged for cleanup.",
  },
  {
    name: "Material_Delivery.xlsx",
    body: "Delivery log for concrete and steel beams. All materials accounted for and checked in by supervisor.",
  },
  {
    name: "Progress_Photo.jpg",
    body: "Photo captured by drone at 10:30am. Shows foundation work 80% complete. No anomalies detected.",
  },
  {
    name: "Worker_Log.csv",
    body: "Attendance and shift log for all on-site personnel. No absences or incidents reported.",
  },
  {
    name: "Task_Update.txt",
    body: "Electrical wiring for Level 2 initiated. Estimated completion: 2 days. Awaiting inspection sign-off.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Real-Time Site Records",
    description: "CRONOS automatically collects and organizes site documents, photos, and logs as work progresses.",
    href: "#",
    cta: "See details",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute top-10 flex gap-3 overflow-x-auto p-1 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        {siteEvents.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 shrink-0 overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs line-clamp-4">{f.body}</blockquote>
          </figure>
        ))}
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "AI Alerts & Insights",
    description: "Get instant notifications for anomalies, delays, or safety issues detected by CRONOS agents.",
    href: "#",
    cta: "How it works",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
        <Notifications />
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Seamless Integrations",
    description: "Connect with your ERP, sensors, and project management tools for unified site intelligence.",
    href: "#",
    cta: "View integrations",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Placeholder className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Timeline & Scheduling",
    description: "Visualize project milestones, filter events by date, and track real-time progress.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "See timeline",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2024, 5, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
