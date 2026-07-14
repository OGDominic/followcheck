import { ShieldAlert, Cpu, Database, Lock, Server, ArrowRight, ShieldCheck } from "lucide-react";

export default function PrivacySection() {
  const trustPoints = [
    { icon: Lock, text: "No Instagram password" },
    { icon: Cpu, text: "Local browser processing" },
    { icon: Database, text: "No follower database" },
  ];

  return (
    <section className="bg-navy text-soft-white py-16 sm:py-20 md:py-24 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Label */}
            <span className="text-xs font-bold text-electric bg-electric/10 border border-electric/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
              Privacy First
            </span>
            
            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Your Instagram data <br />
              stays with you.
            </h2>
            
            {/* Description */}
            <p className="text-base text-soft-white/70 max-w-lg leading-relaxed">
              Follower analysis happens locally in your browser. We don't ask for your Instagram password or build a database of your followers.
            </p>
            
            {/* Trust Points */}
            <div className="space-y-4 pt-4 border-t border-soft-white/10">
              {trustPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric/10 text-electric border border-electric/25">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-soft-white/90">{point.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Side: Visual Diagram */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-xs">
              
              {/* Central Flow Diagram */}
              <div className="flex flex-col items-center justify-center space-y-6">
                
                {/* Instagram Block */}
                <div className="w-full flex items-center justify-between bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-white text-xs">
                      IG
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/90">Instagram</p>
                      <p className="text-[10px] text-soft-white/50">Official API / Profile Data</p>
                    </div>
                  </div>
                  <Lock className="h-4 w-4 text-electric" />
                </div>
                
                {/* Arrow 1 */}
                <div className="flex flex-col items-center">
                  <div className="h-8 w-[1px] bg-dashed border-l border-dashed border-soft-white/20" />
                  <ArrowRight className="h-4 w-4 text-electric rotate-90 my-1" />
                </div>
                
                {/* Browser Extension Block */}
                <div className="w-full flex items-center justify-between bg-electric/10 border border-electric/25 rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(37,99,235,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-electric/20 flex items-center justify-center">
                      <Cpu className="h-4.5 w-4.5 text-electric" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Your Browser</p>
                      <p className="text-[10px] text-electric/80 font-medium">FollowCheck Chrome Extension</p>
                    </div>
                  </div>
                  <ShieldCheck className="h-4 w-4 text-electric" />
                </div>
                
                {/* Arrow 2 */}
                <div className="flex flex-col items-center">
                  <div className="h-8 w-[1px] bg-dashed border-l border-dashed border-soft-white/20" />
                  <ArrowRight className="h-4 w-4 text-electric rotate-90 my-1" />
                </div>
                
                {/* Results Block */}
                <div className="w-full flex items-center justify-between bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-white text-xs">
                      📊
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/90">Your Results</p>
                      <p className="text-[10px] text-soft-white/50">Displayed in Extension UI</p>
                    </div>
                  </div>
                  <Lock className="h-4 w-4 text-electric" />
                </div>
                
              </div>
              
              {/* "Our Server" separation visualizer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <div className="inline-flex items-center gap-2 rounded-lg bg-white/[0.02] border border-white/5 px-4 py-2">
                  <Server className="h-3.5 w-3.5 text-soft-white/40" />
                  <span className="text-[11px] font-bold tracking-wide text-soft-white/60 uppercase">
                    Our Server
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-soft-white/30" />
                  <span className="text-[11px] text-electric font-semibold">
                    0 Connections
                  </span>
                </div>
                <p className="text-xs text-soft-white/60 font-semibold mt-3">
                  Your Data Never Goes to Our Server
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
