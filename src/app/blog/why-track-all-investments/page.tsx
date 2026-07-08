import { ChevronDown } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata = {
  title: "Why Every Indian Should Track All Investments in One Place (Complete Guide for 2026)",
  description:
    "Track mutual funds, fixed deposits, digital gold, insurance, and more in one place. Learn why an investment tracker can simplify your finances and help you stay organized.",
  openGraph: {
    title: "Why Every Indian Should Track All Investments in One Place (Complete Guide for 2026)",
    description:
      "Track mutual funds, fixed deposits, digital gold, insurance, and more in one place. Learn why an investment tracker can simplify your finances and help you stay organized.",
    url: "https://nidhify.com/blog/why-track-all-investments",
    type: "article",
    publishedTime: "2026-07-08T00:00:00.000Z",
    authors: ["Nidhify Wealth Team"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why Every Indian Should Track All Investments in One Place (Complete Guide for 2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Every Indian Should Track All Investments in One Place (Complete Guide for 2026)",
    description:
      "Track mutual funds, fixed deposits, digital gold, insurance, and more in one place. Learn why an investment tracker can simplify your finances and help you stay organized.",
    images: ["/og-image.png"],
  },
  keywords: ["investment tracker India", "track all investments", "personal finance tracker", "investment portfolio tracker", "wealth tracker India", "net worth tracker", "track mutual funds", "fixed deposit tracker", "digital gold tracker", "insurance tracker", "financial dashboard"],
  alternates: {
    canonical: "https://nidhify.com/blog/why-track-all-investments",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const post = blogPosts.find((p) => p.slug === "why-track-all-investments");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "Nidhify" },
    publisher: {
      "@type": "Organization",
      name: "Nidhify",
      logo: { "@type": "ImageObject", url: "https://nidhify.com/logo192px.png" },
    },
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    image: "https://nidhify.com/og-image.png",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://nidhify.com/blog/why-track-all-investments" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogLayout
        title={post.title}
        description={post.description}
        category={post.category}
        author={post.author}
        date={post.date}
        readingTime={post.readingTime}
        slug="why-track-all-investments"
      >
        <section>
          <p className="leading-relaxed">
            Managing money has become easier than ever, but keeping track of investments has become more complicated.
          </p>
          <p className="leading-relaxed">
            Today, many Indians invest in <strong>mutual funds, fixed deposits (FDs), digital gold, insurance policies, Public Provident Fund (PPF), Employee Provident Fund (EPF),</strong> and other financial products. The challenge is that each investment is usually managed through a different app, bank, or provider.
          </p>
          <p className="leading-relaxed">
            Over time, it becomes difficult to remember where all your investments are, when an FD matures, when an insurance policy needs renewal, or how much your total wealth has grown.
          </p>
          <p className="leading-relaxed">
            Instead of switching between multiple platforms, having all your investments organized in one place can make personal finance much easier to manage.
          </p>
          <p className="leading-relaxed">
            This guide explains why tracking all your investments matters and how an <strong>investment tracker</strong> can help you stay organized.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Why Tracking Investments Matters</h2>
          <p className="leading-relaxed">
            Many people begin investing with a single product, such as a fixed deposit or a mutual fund. As the years go by, they often add more investments without realizing how scattered everything has become.
          </p>
          <p className="leading-relaxed">Some common challenges include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
            <li>Using multiple apps for different investments.</li>
            <li>Maintaining accounts with several banks.</li>
            <li>Forgetting Fixed Deposit maturity dates.</li>
            <li>Missing insurance renewal reminders.</li>
            <li>Not knowing the total value of all investments.</li>
            <li>Finding it difficult to calculate overall net worth.</li>
          </ul>
          <p className="leading-relaxed">
            While these issues don't necessarily affect the value of your investments, they can make financial organization more difficult.
          </p>
          <p className="leading-relaxed">
            Keeping everything organized helps you understand your financial picture without needing to check multiple platforms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Common Investments Indians Own</h2>
          <p className="leading-relaxed">Most people own more than one type of investment.</p>
          <div className="overflow-x-auto my-6 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/5">
                  <th className="text-left p-4 font-semibold text-primary">Investment</th>
                  <th className="text-left p-4 font-semibold text-primary">Usually Tracked Where</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="p-4 font-medium text-gray-700">Mutual Funds</td><td className="p-4 text-gray-600">AMC Apps or Investment Platforms</td></tr>
                <tr><td className="p-4 font-medium text-gray-700">Fixed Deposits</td><td className="p-4 text-gray-600">Bank</td></tr>
                <tr><td className="p-4 font-medium text-gray-700">Digital Gold</td><td className="p-4 text-gray-600">Gold Platform</td></tr>
                <tr><td className="p-4 font-medium text-gray-700">Insurance Policies</td><td className="p-4 text-gray-600">Insurance Company</td></tr>
                <tr><td className="p-4 font-medium text-gray-700">PPF</td><td className="p-4 text-gray-600">Bank or Post Office</td></tr>
                <tr><td className="p-4 font-medium text-gray-700">EPF</td><td className="p-4 text-gray-600">EPFO Portal</td></tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed">
            Since every investment has its own platform, getting a complete picture of your finances can become time-consuming.
          </p>
          <p className="leading-relaxed">
            Instead of opening several apps or websites, many people prefer having a single dashboard that helps them keep everything organized.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Benefits of Tracking Everything in One Place</h2>
          <p className="leading-relaxed">
            Using an <strong>investment tracker</strong> is less about making investment decisions and more about staying organized.
          </p>
          <p className="leading-relaxed">Some practical benefits include:</p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Better Visibility</h3>
          <p className="leading-relaxed">
            Viewing all your investments together makes it easier to understand where your money is allocated.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Easier Net Worth Tracking</h3>
          <p className="leading-relaxed">
            Instead of calculating everything manually, you can quickly see your overall financial position.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Never Miss Important Dates</h3>
          <p className="leading-relaxed">
            Keeping track of Fixed Deposit maturity dates and insurance renewals helps reduce the chances of missing important deadlines.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Simplified Portfolio Monitoring</h3>
          <p className="leading-relaxed">
            Rather than switching between different apps, you can review your investments from one dashboard.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Better Financial Organization</h3>
          <p className="leading-relaxed">
            When all investment records are stored in one place, it becomes easier to maintain accurate financial information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">What Should an Investment Tracker Include?</h2>
          <p className="leading-relaxed">
            A good investment tracker should help organize your financial information rather than provide investment advice.
          </p>
          <p className="leading-relaxed">Useful features may include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
            <li>Mutual Fund tracking</li>
            <li>Fixed Deposit tracking</li>
            <li>Digital Gold tracking</li>
            <li>Insurance policy management</li>
            <li>Other asset tracking</li>
            <li>Net worth overview</li>
            <li>Portfolio summary</li>
            <li>Investment history</li>
            <li>Important reminders</li>
            <li>Secure dashboard</li>
          </ul>
          <p className="leading-relaxed">
            The goal is to make it easier to understand your overall financial picture.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">How Nidhify Helps</h2>
          <p className="leading-relaxed">
            <strong>Nidhify</strong> is designed to help users organize multiple investments in one simple dashboard.
          </p>
          <p className="leading-relaxed">
            Instead of checking different platforms every day, you can keep track of various financial assets in one place, making it easier to understand your overall portfolio.
          </p>
          <p className="leading-relaxed">With Nidhify, you can organize information related to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
            <li>Mutual Funds</li>
            <li>Fixed Deposits</li>
            <li>Digital Gold</li>
            <li>Insurance</li>
            <li>Other Financial Assets</li>
          </ul>
          <p className="leading-relaxed">
            Whether you're just getting started or already have investments across different platforms, having a centralized dashboard can simplify financial organization.
          </p>
          <div className="mt-6 p-5 bg-secondary/5 border border-secondary/20 rounded-xl text-center">
            <p className="text-base font-semibold text-primary">Create your free Nidhify account:</p>
            <a href="https://wealth.nidhify.com" className="text-accent hover:underline font-medium">https://wealth.nidhify.com</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Tips for Keeping Your Investment Records Organized</h2>
          <p className="leading-relaxed">
            Regardless of which investment products you own, staying organized is an important part of managing personal finances.
          </p>
          <p className="leading-relaxed">Here are a few simple habits that can help:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
            <li>Update your investment records regularly.</li>
            <li>Keep nominee information up to date.</li>
            <li>Track maturity dates for Fixed Deposits.</li>
            <li>Save investment documents securely in digital format.</li>
            <li>Review your portfolio periodically.</li>
            <li>Maintain records of insurance policies.</li>
            <li>Keep all investment information in one accessible location.</li>
          </ul>
          <p className="leading-relaxed">
            These practices can help you maintain a clearer view of your finances over time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Conclusion</h2>
          <p className="leading-relaxed">
            Building wealth isn't only about investing — it is also about staying organized.
          </p>
          <p className="leading-relaxed">
            Tracking all your investments in one place can help you better understand your financial position, monitor your progress, and reduce the hassle of managing multiple accounts across different platforms.
          </p>
          <p className="leading-relaxed">
            Whether you have recently started investing or already own multiple financial products, organizing your investment information can make managing personal finances much simpler.
          </p>
          <p className="leading-relaxed">
            If you're looking for a simple way to organize your investments, you can create a free account on <strong>Nidhify</strong> and manage your financial assets from a single dashboard.
          </p>
          <div className="mt-6 p-5 bg-secondary/5 border border-secondary/20 rounded-xl text-center">
            <p className="text-base font-semibold text-primary">Get started today:</p>
            <a href="https://wealth.nidhify.com" className="text-accent hover:underline font-medium">https://wealth.nidhify.com</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Disclaimer</h2>
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 leading-relaxed">
            <strong>Educational Purpose Only</strong>
            <br /><br />
            This article is published for <strong>educational and informational purposes only</strong>. The information provided should <strong>not</strong> be considered financial, investment, tax, legal, or professional advice.
            <br /><br />
            Nidhify is an investment tracking platform designed to help users organize and monitor their financial information. It does <strong>not</strong> recommend, endorse, or advise users to buy, sell, or hold any investment product.
            <br /><br />
            The author of this article is <strong>not a SEBI-registered investment adviser, certified financial planner, tax consultant, or financial advisor</strong>. Before making any financial or investment decisions, readers should conduct their own research and, where appropriate, consult a qualified professional.
            <br /><br />
            While every effort has been made to ensure the accuracy of the information, Nidhify and the author make no warranties regarding its completeness, reliability, or suitability for any particular purpose.
          </div>
        </section>

        <section id="frequently-asked-questions" className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
                Why should I track all my investments in one place?
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Tracking all your investments together gives you a clearer picture of your overall financial position and reduces the need to switch between multiple apps and platforms.
              </p>
            </details>
            <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
                What investments can be tracked?
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Depending on the platform, you may be able to track Mutual Funds, Fixed Deposits, Digital Gold, Insurance Policies, PPF, EPF, and other financial assets.
              </p>
            </details>
            <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
                Is an investment tracker only for experienced investors?
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                No. An investment tracker can be useful for anyone who wants to organize and monitor their financial information, regardless of investment experience.
              </p>
            </details>
            <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
              <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
                Does an investment tracker provide investment advice?
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Most investment trackers focus on organizing and displaying your financial information. They are different from financial advisory services.
              </p>
            </details>
          </div>
        </section>
      </BlogLayout>
    </>
  );
}
