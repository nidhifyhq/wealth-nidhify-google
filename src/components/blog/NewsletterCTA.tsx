import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewsletterCTA() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-[#092042] to-[#1a3455] p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        Take Control of Your Financial Future
      </h3>
      <p className="mt-3 text-base text-white/70 max-w-xl mx-auto leading-relaxed">
        Join thousands of investors who trust Nidhify to manage and monitor
        their wealth.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <Button className="bg-accent hover:bg-accent/90 text-white px-6 h-11 text-base">
          <Download className="w-4 h-4" />
          Download the App
        </Button>
        <Link href="/">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white px-6 h-11 text-base"
          >
            Create Free Account
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
