"use client";

import { useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, IndianRupee, Calendar, BarChart3, PieChart } from "lucide-react";

function formatCurrency(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function calculateSIP(monthly, rate, years) {
  const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
  const n = Math.round(years * 12);
  const invested = monthly * n;
  const fv = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const estimatedReturns = fv - invested;
  return { invested: Math.round(invested), estimatedReturns: Math.round(estimatedReturns), totalValue: Math.round(fv) };
}

function DonutChart({ invested, estimatedReturns }) {
  const total = invested + estimatedReturns;
  if (total === 0) return null;
  const investedAngle = (invested / total) * 360;
  const returnsAngle = (estimatedReturns / total) * 360;
  const radius = 80;
  const cx = 100;
  const cy = 100;
  const strokeWidth = 32;
  const r = radius - strokeWidth / 2;

  function polarToCartesian(angle) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(startAngle, endAngle) {
    const start = polarToCartesian(startAngle);
    const end = polarToCartesian(endAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  }

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" strokeWidth={strokeWidth} />
      {invested > 0 && (
        <path d={arcPath(0, investedAngle)} fill="none" stroke="#2563EB" strokeWidth={strokeWidth} strokeLinecap="round" />
      )}
      {estimatedReturns > 0 && (
        <path d={arcPath(investedAngle, investedAngle + returnsAngle)} fill="none" stroke="#10B981" strokeWidth={strokeWidth} strokeLinecap="round" />
      )}
      <text x={cx} y={cy - 5} textAnchor="middle" className="font-semibold fill-primary" style={{ fontSize: "16px" }}>
        {formatCurrency(invested + estimatedReturns)}
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="fill-primary/50" style={{ fontSize: "8px" }}>
        Total Value
      </text>
    </svg>
  );
}

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(25000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const handleMonthlyChange = useCallback((value) => {
    const num = Number(value.replace(/[^0-9]/g, ""));
    setMonthly(num);
  }, []);

  const handleRateChange = useCallback((value) => {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0.5 && num <= 50) setRate(num);
  }, []);

  const handleYearsChange = useCallback((value) => {
    const num = parseInt(value);
    if (!isNaN(num) && num >= 1 && num <= 50) setYears(num);
  }, []);

  const result = useMemo(() => calculateSIP(monthly, rate, years), [monthly, rate, years]);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-border p-5 space-y-4">
            <label className="flex items-center justify-between text-sm font-medium text-primary">
              <span className="flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-accent" />
                Monthly Investment
              </span>
              <span className="text-lg font-bold text-accent">₹{Number(monthly).toLocaleString("en-IN")}</span>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={500}
                max={500000}
                step={500}
                value={Math.min(monthly, 500000)}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-gray-200 accent-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-md"
              />
              <input
                type="text"
                inputMode="numeric"
                value={monthly === 0 ? "" : monthly}
                onChange={(e) => handleMonthlyChange(e.target.value)}
                onBlur={() => { if (!monthly || monthly < 500) setMonthly(500); }}
                placeholder="Enter amount"
                className="w-28 h-10 px-3 text-sm text-right border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-5 space-y-4">
            <label className="flex items-center justify-between text-sm font-medium text-primary">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                Expected Returns (p.a.)
              </span>
              <span className="text-lg font-bold text-emerald-500">{rate}%</span>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0.5}
                max={50}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-gray-200 accent-emerald-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:shadow-md"
              />
              <input
                type="text"
                inputMode="decimal"
                value={rate}
                onChange={(e) => handleRateChange(e.target.value)}
                onBlur={() => { if (!rate || rate < 0.5) setRate(0.5); if (rate > 50) setRate(50); }}
                className="w-20 h-10 px-3 text-sm text-right border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-5 space-y-4">
            <label className="flex items-center justify-between text-sm font-medium text-primary">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-500" />
                Time Period
              </span>
              <span className="text-lg font-bold text-purple-500">{years} {years === 1 ? "Year" : "Years"}</span>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={1}
                max={50}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-gray-200 accent-purple-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:shadow-md"
              />
              <input
                type="text"
                inputMode="numeric"
                value={years}
                onChange={(e) => handleYearsChange(e.target.value)}
                onBlur={() => { if (!years || years < 1) setYears(1); if (years > 50) setYears(50); }}
                className="w-20 h-10 px-3 text-sm text-right border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 bg-white"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/50 rounded-xl border border-border p-6">
          <div className="w-full max-w-[240px] aspect-square">
            <DonutChart invested={result.invested} estimatedReturns={result.estimatedReturns} />
          </div>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-xs text-primary/60">Invested</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-primary/60">Returns</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-border p-4 text-center space-y-1">
          <p className="text-[11px] font-medium text-primary/40 uppercase tracking-wide">Invested Amount</p>
          <p className="text-base md:text-lg font-semibold text-accent">{formatCurrency(result.invested)}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-4 text-center space-y-1">
          <p className="text-[11px] font-medium text-primary/40 uppercase tracking-wide">Est. Returns</p>
          <p className="text-base md:text-lg font-semibold text-emerald-500">{formatCurrency(result.estimatedReturns)}</p>
        </div>
        <div className="bg-gradient-to-br from-accent/5 to-emerald-500/5 rounded-xl border border-accent/10 p-4 text-center space-y-1">
          <p className="text-[11px] font-medium text-primary/40 uppercase tracking-wide">Total Value</p>
          <p className="text-base md:text-lg font-semibold text-primary">{formatCurrency(result.totalValue)}</p>
        </div>
      </div>
    </div>
  );
}