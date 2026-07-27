import { Calculator, TrendingUp, PiggyBank, Home, Landmark, BarChart3, DollarSign, LineChart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const calculators = [
  { name: "SIP Calculator", href: "/calculator/sip", icon: TrendingUp, active: true },
  { name: "Lumpsum Calculator", href: "#", icon: DollarSign, active: false },
  { name: "Step-Up SIP Calculator", href: "#", icon: BarChart3, active: false },
  { name: "SWP Calculator", href: "#", icon: LineChart, active: false },
  { name: "CAGR Calculator", href: "#", icon: Calculator, active: false },
  { name: "EMI Calculator", href: "#", icon: Home, active: false },
  { name: "FD Calculator", href: "#", icon: Landmark, active: false },
  { name: "PPF Calculator", href: "#", icon: PiggyBank, active: false },
];

export default function PopularCalculators() {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <h3 className="text-base font-bold text-primary mb-5 flex items-center gap-2">
        <Calculator className="w-4 h-4 text-accent" />
        Popular Calculators
      </h3>
      <div className="space-y-1">
        {calculators.map((calc) => {
          const Icon = calc.icon;
          return (
            <Link
              key={calc.name}
              href={calc.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors",
                calc.active
                  ? "bg-accent/10 text-accent font-semibold"
                  : "text-primary/60 hover:text-primary hover:bg-muted"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{calc.name}</span>
              {calc.active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}