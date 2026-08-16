import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import SIPCalculator from "@/components/calculator/SIPCalculator";
import PopularCalculators from "@/components/calculator/PopularCalculators";
import DeviceCTA from "@/components/sections/DeviceCTA";

export const metadata = {
  title: "SIP Calculator - Free Systematic Investment Plan Calculator",
  description:
    "A SIP calculator is a simple tool that estimates returns on your mutual fund investments. Plan monthly investments and see your total invested amount, estimated returns, and maturity value instantly. Best SIP calculator for Indian investors.",
  keywords: [
    "SIP Calculator",
    "SIP Calculator India",
    "free SIP calculator",
    "monthly SIP calculator",
    "SIP return calculator",
    "mutual fund SIP calculator",
    "SIP investment calculator",
    "SIP plan calculator",
    "SIP maturity calculator",
    "SIP returns calculator India",
    "SIP calculator 2026",
    "best SIP calculator online",
    "SIP calculator Groww",
  ],
  alternates: {
    canonical: "https://nidhify.com/calculator/sip",
  },
  openGraph: {
    title: "SIP Calculator — Free Systematic Investment Plan Calculator | Nidhify",
    description:
      "A SIP calculator is a simple tool that estimates returns on your mutual fund investments. Plan monthly investments and see your total invested amount, estimated returns, and maturity value instantly. Best SIP calculator for Indian investors.",
    url: "https://nidhify.com/calculator/sip",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SIP Calculator - Nidhify",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIP Calculator — Free Online SIP Return Calculator | Nidhify",
    description:
      "Calculate your SIP investment returns with our free SIP calculator. Plan monthly investments and see your total invested amount, estimated returns, and maturity value instantly.",
    images: ["/og-image.png"],
  },
};

export default function SIPCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "SIP Calculator",
            url: "https://nidhify.com/calculator/sip",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description:
              "Free SIP calculator to estimate mutual fund investment returns. Calculate monthly SIP investment growth, total invested amount, estimated returns, and maturity value.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a SIP calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A SIP calculator is a free online tool that estimates the maturity value of your monthly mutual fund investments. It uses the compound interest formula to calculate the total value based on your monthly investment amount, expected rate of return, and investment tenure.",
                },
              },
              {
                "@type": "Question",
                name: "How is SIP return calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SIP returns are calculated using the future value of annuity formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r), where P is the monthly investment, r is the monthly rate of return (annual rate divided by 12), and n is the total number of months.",
                },
              },
              {
                "@type": "Question",
                name: "Is 12% return realistic for SIP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, 12% annual return is a realistic long-term expectation for equity mutual fund SIPs in India. Historically, equity mutual funds have delivered 12-15% returns over 10+ year periods. However, past performance does not guarantee future returns.",
                },
              },
              {
                "@type": "Question",
                name: "How much should I invest in SIP per month?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A common rule of thumb is to invest 15-25% of your monthly income in SIPs for long-term financial goals. Start with whatever amount is comfortable — even ₹500 per month builds the investment habit. You can increase the amount gradually as your income grows.",
                },
              },
              {
                "@type": "Question",
                name: "What is the minimum SIP amount in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The minimum SIP amount in India is typically ₹500 per month for most mutual funds. Some funds may have higher minimums of ₹1,000 or ₹5,000. ELSS tax-saving funds also start at ₹500 per month.",
                },
              },
              {
                "@type": "Question",
                name: "Can I lose money in SIP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Since SIPs invest in market-linked instruments like mutual funds, they carry market risk. However, SIP reduces risk through rupee-cost averaging — you buy more units when markets are low and fewer when markets are high. Over long periods (7+ years), the probability of positive returns is very high.",
                },
              },
              {
                "@type": "Question",
                name: "How much can I invest in a SIP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SIPs have no maximum investment cap. The minimum is typically ₹500 per month, making it accessible for all investors. You can invest any amount above this threshold.",
                },
              },
              {
                "@type": "Question",
                name: "What is the maximum tenure of a SIP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no upper limit on SIP tenure. Many investors run SIPs for 15-20+ years to maximize compounding. A 3-year horizon is the recommended minimum for equity SIPs.",
                },
              },
              {
                "@type": "Question",
                name: "Are SIPs similar to mutual funds?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A mutual fund is the investment pool, while SIP is simply the method of purchasing units periodically. SIP is the payment plan; the mutual fund is the product.",
                },
              },
              {
                "@type": "Question",
                name: "Can I modify my SIP amount?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, most fund houses let you increase or decrease your SIP contribution online. It is recommended to review your SIP amount annually and increase it as your income grows.",
                },
              },
              {
                "@type": "Question",
                name: "What are the types of SIPs available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Indian mutual funds offer Step-up SIP (auto-increase), Perpetual SIP (no end date), Trigger SIP (activated by market conditions), and Flexible SIP (variable installment amounts).",
                },
              },
              {
                "@type": "Question",
                name: "Can I pause my SIP investments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, many AMCs allow you to skip installments or pause the SIP temporarily. This skip feature helps during cash crunches without requiring cancellation.",
                },
              },
            ],
          }),
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <ArrowLeft size={20} />
            <Image src="/transBlackLogo.png" alt="Nidhify" width={80} height={22} className="h-6 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          <DeviceCTA />
        </div>
      </header>

      <main className="pt-16">
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                SIP Calculator
              </h1>
              <p className="text-base md:text-lg text-primary/60 max-w-2xl mx-auto">
                Plan your mutual fund investments with our free SIP calculator. 
                Estimate your monthly investment growth, total returns, and maturity 
                value in seconds.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SIPCalculator />
              </div>
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-28">
                  <PopularCalculators />
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  SIP Calculator – Systematic Investment Plan Calculator
                </h2>
                <p className="text-sm text-primary/60 leading-relaxed mb-4">
                  Many investors assume SIPs and mutual funds are the same thing. In reality, a Systematic 
                  Investment Plan (SIP) is simply a method of investing in mutual funds — the alternative 
                  being a lump sum investment. A SIP calculator helps you estimate the returns you could 
                  earn when investing regularly in mutual funds through this route. SIP allows you to invest 
                  a fixed amount at weekly, monthly, or quarterly intervals, making it one of the most 
                  disciplined approaches to wealth building.
                </p>

                <h3 className="text-lg font-semibold text-primary mb-3 mt-6">
                  What is a SIP Calculator?
                </h3>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  A SIP calculator is a free online tool that estimates the potential returns on your 
                  mutual fund investments made through a Systematic Investment Plan. SIPs have become 
                  especially popular among millennial investors in India who prefer a disciplined, 
                  hassle-free approach to investing.
                </p>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  These mutual fund SIP calculators are designed to give investors a reasonable estimate 
                  of their investment growth over time. Keep in mind that actual returns from any mutual 
                  fund scheme depend on market conditions, fund performance, and other factors. The 
                  calculator does not account for exit loads, expense ratios, or taxes — it provides a 
                  projected figure based on the inputs you provide.
                </p>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  This calculator shows your wealth gain and expected returns for any monthly SIP 
                  investment, giving you a clear picture of the maturity amount based on a projected 
                  annual return rate.
                </p>

                <h3 className="text-lg font-semibold text-primary mb-3 mt-6">
                  How Can a SIP Return Calculator Help You?
                </h3>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  Financial experts often recommend SIPs over lump sum investments for long-term wealth 
                  creation. SIPs instill financial discipline and build a savings habit that pays off 
                  significantly over time.
                </p>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  A free SIP calculator online is a practical tool that shows the estimated returns 
                  you can expect after your chosen investment tenure. Key benefits include:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-primary/60 leading-relaxed mb-4">
                  <li>Helps you decide the ideal monthly investment amount based on your financial goals.</li>
                  <li>Shows the total amount you will have invested over the entire tenure.</li>
                  <li>Provides an estimated value of the returns your investment could generate.</li>
                  <li>Lets you compare different scenarios by adjusting the amount, rate, or duration.</li>
                </ul>

                <h3 className="text-lg font-semibold text-primary mb-3 mt-6">
                  How Do SIP Calculators Work?
                </h3>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  A SIP plan calculator works on the future value of annuity formula:
                </p>
                <div className="bg-muted rounded-lg px-5 py-4 mb-4 font-mono text-sm text-primary text-center">
                  M = P × ({'{'}[1 + i]<sup>n</sup>{'}'} – 1 / i) × (1 + i)
                </div>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  Where <strong>M</strong> is the maturity amount, <strong>P</strong> is the monthly 
                  investment, <strong>n</strong> is the total number of payments, and <strong>i</strong> 
                  is the periodic rate of interest.
                </p>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  A common mistake is to simply divide the annual return by 12 to get the monthly rate. 
                  For example, assuming 12% annual return means 12 ÷ 12 = 1% per month is incorrect 
                  because returns compound. The correct way to convert annual return into monthly 
                  return is:
                </p>
                <div className="bg-muted rounded-lg px-5 py-4 mb-4 font-mono text-sm text-primary text-center">
                  Monthly Return = {'{('}(1 + Annual Return)<sup>1/12</sup>{'}'} – 1
                </div>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  For a 12% annual return, the effective monthly return comes to approximately 0.95%, 
                  not 1%. Compounding 0.95% over 12 months yields 12% annually, while assuming 1% 
                  monthly would inflate the results. Our calculator uses this accurate method to give 
                  you reliable estimates.
                </p>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  For example, if you invest ₹1,000 per month for 12 months at 12% annual returns:
                  <br />
                  M = 1,000 × ({'{'}[1 + 0.0095]<sup>12</sup> – 1{'}'} / 0.0095) × (1 + 0.0095) ≈ ₹12,766
                </p>
                <p className="text-sm text-primary/60 leading-relaxed">
                  Note that SIP returns depend on market conditions and may vary. Always consult a 
                  financial advisor before making investment decisions.
                </p>

                <h3 className="text-lg font-semibold text-primary mb-3 mt-6">
                  How to Use This SIP Calculator
                </h3>
                <p className="text-sm text-primary/60 leading-relaxed mb-3">
                  Using this systematic investment plan calculator is straightforward:
                </p>
                <ol className="list-decimal pl-6 space-y-1.5 text-sm text-primary/60 leading-relaxed mb-4">
                  <li>Enter your monthly investment amount (use the slider or type directly).</li>
                  <li>Set the expected annual rate of return based on your risk appetite.</li>
                  <li>Choose the number of years you plan to stay invested.</li>
                  <li>The calculator instantly shows your invested amount, estimated returns, and total value.</li>
                </ol>

                <h3 className="text-lg font-semibold text-primary mb-3 mt-6">
                  Advantages of Using This SIP Calculator
                </h3>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-primary/60 leading-relaxed mb-4">
                  <li>Plan your investments based on amount and tenure that suits your financial goals.</li>
                  <li>Get an instant estimate of the total value at the end of your SIP tenure.</li>
                  <li>Accurate results powered by the standard SIP formula — no manual calculations needed.</li>
                  <li>Visual donut chart shows the breakdown of invested amount versus estimated returns.</li>
                  <li>100% free to use with no sign-up or login required.</li>
                </ul>
              </section>

<section>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is a SIP calculator?",
                      a: "A SIP (Systematic Investment Plan) calculator is a free online financial tool that estimates the future value of your monthly mutual fund investments. It uses the power of compounding to project how your regular investments can grow over time based on an expected annual rate of return.",
                    },
                    {
                      q: "How does this SIP calculator work?",
                      a: "Our SIP calculator uses the standard future value of annuity formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r). Here, P is your monthly investment amount, r is the monthly rate of return (annual rate divided by 12), and n is the total number of months. The calculator instantly shows your total invested amount, estimated returns, and final maturity value.",
                    },
                    {
                      q: "What is a good expected return for SIP?",
                      a: "For long-term equity mutual fund SIPs in India, 12% per annum is a commonly used benchmark based on historical market performance. Conservative investors may use 10-11%, while aggressive investors might assume 13-15%. Returns vary based on market conditions and fund selection.",
                    },
                    {
                      q: "Is the SIP calculator accurate?",
                      a: "This calculator provides a close estimate based on the compound interest formula. Actual returns may vary due to market fluctuations, expense ratios, exit loads, and timing of investments. Use it as a planning tool, not a guarantee of future returns.",
                    },
                    {
                      q: "What is the minimum SIP amount?",
                      a: "In India, most mutual funds allow SIP investments starting from as low as ₹500 per month. Some funds may have higher minimums. Our calculator lets you plan with any amount starting from ₹500.",
                    },
                    {
                      q: "How much can I invest in a SIP?",
                      a: "SIPs have no maximum investment cap — you can put in as much as you want each month. The entry barrier is low at ₹500 monthly, making it accessible for beginners while allowing high-net-worth individuals to deploy larger sums systematically.",
                    },
                    {
                      q: "What is the maximum tenure of a SIP?",
                      a: "You can run a SIP indefinitely with no upper time limit. Many investors continue their SIPs for 15-20 years or more to maximize compounding. For equity-focused SIPs, a 3-year horizon is generally considered the minimum to smooth out market volatility.",
                    },
                    {
                      q: "Are SIPs similar to mutual funds?",
                      a: "Not exactly. A mutual fund is the underlying investment pool, while a SIP is simply the method of purchasing units in that fund at regular intervals. Think of it like this: the mutual fund is the product, and SIP is the payment plan you choose to buy it.",
                    },
                    {
                      q: "Can I modify my SIP amount?",
                      a: "Absolutely. Most fund houses let you raise or lower your SIP contribution online without any paperwork. It is a good practice to review your SIP amount annually and bump it up as your income grows.",
                    },
                    {
                      q: "Do SIPs allow only equity mutual fund investments?",
                      a: "Not at all. While equity mutual fund SIPs are most common, you can also start a SIP in debt funds, liquid funds, hybrid funds, and even exchange-traded funds (ETFs) where supported. The investment vehicle works the same way regardless of the underlying asset class.",
                    },
                    {
                      q: "What are the types of SIPs available?",
                      a: "Indian mutual funds offer several SIP variants: Step-up SIP automatically increases your contribution by a fixed amount or percentage each year. Perpetual SIP continues until you explicitly stop it. Trigger SIP activates based on predefined market conditions like a specific NIFTY level. Flexible SIP lets you modify the installment amount at your discretion.",
                    },
                    {
                      q: "Can I renew a SIP?",
                      a: "Yes, most providers offer auto-renewal so your SIP continues seamlessly beyond the initial tenure. You can opt out of auto-renewal if you prefer to review and manually restart at the end of each tenure.",
                    },
                    {
                      q: "Can I pause my investments in a SIP?",
                      a: "Many asset management companies allow you to skip a few installments or pause the SIP entirely for a defined period. This skip feature is helpful during temporary cash crunches without requiring you to cancel and restart the plan.",
                    },
                  ].map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-xl border border-border overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium text-primary hover:text-accent transition-colors [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <span className="ml-2 shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-muted group-open:bg-accent group-open:text-white transition-colors">
                          <svg
                            className="w-3 h-3 group-open:rotate-180 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-5 pb-4 text-sm text-primary/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Nidhify. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}