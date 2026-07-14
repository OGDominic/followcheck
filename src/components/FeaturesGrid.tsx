import { UserMinus, UserCheck, UserPlus, Zap } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Not Following Back",
      desc: "See everyone you follow who doesn't follow you back.",
      icon: UserMinus,
    },
    {
      title: "Mutual Followers",
      desc: "Quickly find your mutual Instagram connections.",
      icon: UserCheck,
    },
    {
      title: "You Don't Follow Back",
      desc: "Discover followers you may have forgotten to follow.",
      icon: UserPlus,
    },
    {
      title: "Fast Local Analysis",
      desc: "Analyze your connection data directly in your browser.",
      icon: Zap,
    },
  ];

  return (
    <section id="features" className="bg-transparent py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-2xl space-y-4 mb-14 md:mb-16">
          <span className="text-xs font-bold text-electric bg-electric/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Everything You Actually Need.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 bg-white border border-navy/5 rounded-2xl hover:shadow-[0_4px_20px_rgba(11,18,32,0.02)] hover:border-navy/10 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-white border border-navy/5 text-electric group-hover:scale-105 transition-transform duration-200">
                  <Icon className="h-5 w-5" />
                </div>
                
                {/* Title & Description */}
                <h3 className="mt-5 text-lg font-bold text-navy">{feature.title}</h3>
                <p className="mt-2 text-sm font-medium text-navy/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
