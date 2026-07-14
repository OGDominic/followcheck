import { Lock, ShieldCheck, Sparkles } from "lucide-react";

export default function TrustRow() {
  const items = [
    { icon: Lock, text: "No password required" },
    { icon: ShieldCheck, text: "Private analysis" },
    { icon: Sparkles, text: "Free to use" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-navy/5">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy/70">
            <Icon className="h-4 w-4 text-electric flex-shrink-0" />
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}
