import { ChevronDown } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata = {
  title: "Fixed Deposits Explained: How FDs Work & Their Features",
  description:
    "Understand what fixed deposits are, how they work, different types, features, benefits, taxation, and key differences from savings accounts.",
  openGraph: {
    title: "Fixed Deposits Explained: How FDs Work & Their Features",
    description:
      "Understand what fixed deposits are, how they work, different types, features, benefits, taxation, and key differences from savings accounts.",
    url: "https://nidhify.com/blog/fixed-deposits-explained",
    type: "article",
    publishedTime: "2026-06-29T00:00:00.000Z",
    authors: ["Nidhify Wealth Team"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fixed Deposits Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixed Deposits Explained: How FDs Work & Their Features",
    description:
      "Understand what fixed deposits are, how they work, different types, features, benefits, taxation, and key differences from savings accounts.",
    images: ["/og-image.png"],
  },
  keywords: [
    "what is fixed deposit",
    "fixed deposit explained",
    "how FD works",
    "types of fixed deposits",
  ],
  alternates: {
    canonical: 'https://nidhify.com/blog/fixed-deposits-explained',
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const post = blogPosts.find((p) => p.slug === "fixed-deposits-explained");

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Organization', name: 'Nidhify' },
    publisher: {
      '@type': 'Organization',
      name: 'Nidhify',
      logo: { '@type': 'ImageObject', url: 'https://nidhify.com/logo192px.png' },
    },
    datePublished: '2026-06-29',
    dateModified: '2026-06-29',
    image: 'https://nidhify.com/og-image.png',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://nidhify.com/blog/fixed-deposits-explained' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogLayout
      title={post.title}
      description={post.description}
      category={post.category}
      author={post.author}
      date={post.date}
      readingTime={post.readingTime}
      slug="fixed-deposits-explained"
    >
      <section id="what-is-a-fixed-deposit" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="what-is-a-fixed-deposit" className="text-2xl font-bold text-primary mt-12 mb-4">
          What Is a Fixed Deposit?
        </h2>
        <p>
          A Fixed Deposit (FD) is a financial instrument offered by banks, Non-Banking Financial Companies (NBFCs), and other financial institutions that allows you to deposit a lump sum of money for a fixed period at a predetermined interest rate. In return, the institution guarantees to pay you interest at that rate for the entire tenure, regardless of how market interest rates move during that period.
        </p>
        <p>
          FDs are among the most popular investment choices in India because of their simplicity and safety. When you open an FD, you lock in an interest rate for the duration you choose — typically ranging from 7 days to 10 years. At the end of the tenure, you receive your original principal amount plus the accrued interest. Some FDs also offer the option to receive interest payouts at regular intervals instead of at maturity.
        </p>
        <p>
          Fixed deposits are classified as fixed-income investments because they provide predictable, guaranteed returns. Unlike market-linked investments such as stocks or mutual funds, the interest rate on an FD does not fluctuate with market conditions. This predictability makes FDs a cornerstone of conservative investment portfolios across India.
        </p>
      </section>

      <section id="how-does-an-fd-work" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="how-does-an-fd-work" className="text-2xl font-bold text-primary mt-12 mb-4">
          How Does an FD Work?
        </h2>
        <p>
          The process of opening a fixed deposit is straightforward. You choose an amount you wish to invest — most banks have a minimum deposit requirement, often starting at ₹1,000. You then select a tenure that suits your financial goals, ranging from a few days to several years. The bank offers an interest rate based on the tenure and amount deposited. Generally, longer tenures and larger deposit amounts attract higher interest rates.
        </p>
        <p>
          Once the FD is opened, the interest rate is locked for the entire duration. This means that even if the bank revises its interest rates upwards or downwards, your FD continues to earn the rate that was applicable at the time of booking. Interest is calculated either on a simple interest basis or compounded at regular intervals (quarterly in most Indian banks).
        </p>
        <p>
          At maturity, you have several options. You can withdraw the entire amount (principal plus interest), renew the FD for another term (possibly at a new interest rate), or have the matured amount automatically credited to your savings account. Many banks also offer auto-renewal facilities where the FD is renewed for the same tenure at the prevailing rate if you do not provide instructions before maturity.
        </p>
      </section>

      <section id="different-types-of-fixed-deposits" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="different-types-of-fixed-deposits" className="text-2xl font-bold text-primary mt-12 mb-4">
          Different Types of Fixed Deposits
        </h2>
        <h3 id="cumulative-fixed-deposit" className="text-xl font-semibold text-primary mt-8 mb-3">
          Cumulative Fixed Deposit
        </h3>
        <p>
          In a cumulative FD, the interest is compounded periodically (usually quarterly) and paid out along with the principal at maturity. This type of FD is ideal for investors who do not need regular income and want to maximize their returns through the power of compounding. The effective yield on a cumulative FD is higher than the stated interest rate because interest earns interest over the tenure.
        </p>
        <h3 id="non-cumulative-fixed-deposit" className="text-xl font-semibold text-primary mt-8 mb-3">
          Non-Cumulative Fixed Deposit
        </h3>
        <p>
          A non-cumulative FD pays interest at regular intervals — monthly, quarterly, half-yearly, or annually — depending on your preference. The interest rate on non-cumulative FDs is slightly lower than cumulative FDs because the bank does not retain the interest for reinvestment. These are particularly popular among retirees and individuals who rely on investment income for their regular expenses.
        </p>
        <h3 id="tax-saver-fixed-deposit" className="text-xl font-semibold text-primary mt-8 mb-3">
          Tax-Saver Fixed Deposit
        </h3>
        <p>
          Tax-saver FDs offer a tax deduction of up to ₹1.5 lakh per financial year under Section 80C of the Income Tax Act. However, they come with a mandatory lock-in period of 5 years, during which premature withdrawal is not allowed. The interest earned on these FDs is still taxable as per your income tax slab. These are only available from banks, not NBFCs.
        </p>
        <h3 id="senior-citizen-fixed-deposit" className="text-xl font-semibold text-primary mt-8 mb-3">
          Senior Citizen Fixed Deposit
        </h3>
        <p>
          Most banks offer higher interest rates to senior citizens, typically 0.25% to 0.75% above the standard FD rates. Senior citizen FDs are designed to provide better returns for older individuals who often rely on fixed-income investments for their living expenses. The eligibility age is usually 60 years and above, though some banks set it at 55 years.
        </p>
        <h3 id="corporate-fixed-deposit" className="text-xl font-semibold text-primary mt-8 mb-3">
          Corporate Fixed Deposit
        </h3>
        <p>
          Corporate FDs are offered by companies rather than banks. They typically offer higher interest rates than bank FDs because they carry higher risk. Unlike bank deposits, corporate FDs are not insured by the DICGC. It is essential to check the credit rating assigned by rating agencies such as CRISIL, ICRA, or CARE before investing in corporate FDs.
        </p>
      </section>

      <section id="features-of-fixed-deposits" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="features-of-fixed-deposits" className="text-2xl font-bold text-primary mt-12 mb-4">
          Features of Fixed Deposits
        </h2>
        <p>
          <strong>Fixed Returns:</strong> The most significant feature of an FD is that the interest rate is fixed at the time of investment and does not change for the entire tenure. This provides certainty about the returns you will earn, which is rare in most other investment options.
        </p>
        <p>
          <strong>Tenure Flexibility:</strong> You can choose a tenure that matches your financial needs, from as short as 7 days to as long as 10 years. This flexibility allows you to align your FD investments with your financial goals.
        </p>
        <p>
          <strong>Loan Against FD:</strong> Most banks allow you to take a loan or overdraft against your fixed deposit, typically up to 70% to 90% of the deposit amount. The interest rate on such loans is usually 1% to 2% above the FD rate, making it a cost-effective borrowing option.
        </p>
        <p>
          <strong>Auto-Renewal:</strong> Many banks offer automatic renewal of FDs at maturity. This ensures that your money continues to earn interest even if you forget to provide renewal instructions.
        </p>
        <p>
          <strong>Nomination Facility:</strong> You can nominate a person who will receive the FD proceeds in case of your demise. This simplifies the claim process for your family.
        </p>
      </section>

      <section id="potential-benefits-of-fixed-deposits" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="potential-benefits-of-fixed-deposits" className="text-2xl font-bold text-primary mt-12 mb-4">
          Potential Benefits of Fixed Deposits
        </h2>
        <p>
          <strong>Capital Protection:</strong> FDs are one of the safest investment options available. The principal amount is protected, and you are guaranteed to receive it back at maturity (subject to the creditworthiness of the institution).
        </p>
        <p>
          <strong>Guaranteed Returns:</strong> Unlike market-linked investments, the interest rate on an FD is locked at the time of investment. You know exactly how much you will earn at maturity, making financial planning easier.
        </p>
        <p>
          <strong>Flexible Tenures:</strong> With options ranging from a few days to several years, FDs can be tailored to fit short-term, medium-term, and long-term financial goals.
        </p>
        <p>
          <strong>No Market Volatility:</strong> FD returns are unaffected by stock market movements, economic cycles, or geopolitical events. This makes them an excellent choice for risk-averse investors and for funds that need to be preserved.
        </p>
      </section>

      <section id="things-to-keep-in-mind" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="things-to-keep-in-mind" className="text-2xl font-bold text-primary mt-12 mb-4">
          Things to Keep in Mind
        </h2>
        <p>
          <strong>Lock-In Period:</strong> Once you invest in an FD, your money is locked in for the chosen tenure. While premature withdrawal is usually allowed, it attracts penalties and may result in lower returns than anticipated.
        </p>
        <p>
          <strong>Penalty on Premature Withdrawal:</strong> Most banks charge a penalty of 0.5% to 1% if you withdraw your FD before maturity. Additionally, interest is recalculated at the rate applicable for the actual period the deposit was held, which is often lower than the contracted rate.
        </p>
        <p>
          <strong>Inflation Risk:</strong> The interest rate on FDs may not always keep pace with inflation. If inflation is higher than your FD interest rate, the purchasing power of your money effectively decreases over time. This is an important consideration for long-term FDs.
        </p>
        <p>
          <strong>Reinvestment Risk:</strong> When your FD matures, you may have to reinvest at lower interest rates if the prevailing rates have fallen since you opened the FD. This can reduce your income if you rely on FDs for regular earnings.
        </p>
      </section>

      <section id="taxation-basics" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="taxation-basics" className="text-2xl font-bold text-primary mt-12 mb-4">
          Taxation Basics
        </h2>
        <p>
          Interest earned on fixed deposits is fully taxable. It is added to your total income for the financial year and taxed according to the income tax slab you fall under. Banks are required to deduct Tax Deducted at Source (TDS) at 10% if the total interest income from all FDs with that bank exceeds ₹40,000 in a financial year. For senior citizens, this threshold is ₹50,000.
        </p>
        <p>
          If your total income is below the taxable limit, you can submit Form 15G (for individuals below 60 years) or Form 15H (for senior citizens) to the bank to request that TDS not be deducted. It is important to note that submitting these forms does not exempt you from paying tax — it only prevents TDS. You are still required to declare the interest income in your tax return and pay any applicable tax.
        </p>
        <p>
          Tax-saver FDs under Section 80C provide a deduction on the principal amount invested (up to ₹1.5 lakh), but the interest earned remains taxable. These general principles apply across all types of fixed deposits, but individual circumstances may vary.
        </p>
      </section>

      <section id="fd-vs-savings-account" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="fd-vs-savings-account" className="text-2xl font-bold text-primary mt-12 mb-4">
          FD vs Savings Account
        </h2>
        <p>
          Savings accounts and fixed deposits both offer safety and liquidity, but they serve different purposes. Savings accounts offer easy access to your money at any time but pay relatively low interest rates, typically 2.5% to 4% per annum. Fixed deposits lock your money for a specified period but offer significantly higher interest rates, often between 5% and 8% depending on the tenure and institution.
        </p>
        <p>
          Savings accounts are ideal for emergency funds and money you need to access frequently. FDs are better suited for surplus funds that you do not need immediately and can set aside for a fixed period to earn higher returns. Both are covered by DICGC insurance up to ₹5 lakh per depositor per bank, though the combined limit applies across all accounts with the same bank.
        </p>
        <p>
          A common strategy is to maintain a savings account with 3 to 6 months of living expenses for emergencies and park the rest of your surplus in FDs with staggered maturities to earn better returns while maintaining some liquidity.
        </p>
      </section>

      <section id="common-questions-about-fds" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="common-questions-about-fds" className="text-2xl font-bold text-primary mt-12 mb-4">
          Common Questions About FDs
        </h2>
        <p>
          Many investors wonder whether it is better to invest in multiple smaller FDs or one large FD. Staggering your investments across multiple FDs with different tenures — a strategy called FD laddering — gives you regular access to portions of your money at different intervals while keeping the rest locked in at higher rates.
        </p>
        <p>
          Another common question is about the safety of online-only banks or small finance banks. Small finance banks are regulated by the Reserve Bank of India (RBI) and deposits up to ₹5 lakh are covered by DICGC insurance, just like with large commercial banks. However, it is always wise to check the financial health and ratings of any institution before depositing large sums.
        </p>
        <p>
          Some investors ask if FDs are better than recurring deposits (RDs). The key difference is that FDs require a lump sum investment upfront, while RDs allow you to build a corpus through monthly instalments. Both offer fixed returns, but FDs generally offer slightly higher interest rates than RDs for comparable tenures.
        </p>
      </section>

      <section id="final-thoughts" className="space-y-8 text-gray-700 leading-relaxed">
        <h2 id="final-thoughts" className="text-2xl font-bold text-primary mt-12 mb-4">
          Final Thoughts
        </h2>
        <p>
          Fixed deposits remain a fundamental building block of personal finance in India. Their simplicity, safety, and predictability make them an excellent choice for capital preservation, emergency funds, short-term goals, and as a stable component of a diversified portfolio.
        </p>
        <p>
          However, FDs are not a one-size-fits-all solution. For long-term goals like retirement, the returns from FDs may not be sufficient to outpace inflation. A balanced approach that combines FDs with other investment options aligned with your risk tolerance and time horizon is generally the most effective strategy.
        </p>
        <p>
          Understanding the features, benefits, and limitations of FDs empowers you to make informed decisions about where to park your money. Whether you are building an emergency fund, saving for a near-term goal, or looking for stable income in retirement, fixed deposits can play a valuable role in your financial plan.
        </p>
      </section>

      <section id="frequently-asked-questions" className="mt-16">
        <h2 id="frequently-asked-questions" className="text-2xl font-bold text-primary mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
              What is the minimum and maximum tenure for a fixed deposit?
              <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Most banks and NBFCs in India offer FD tenures ranging from 7 days to 10 years. Short-term FDs can be as brief as 7 to 14 days, while long-term FDs typically go up to 5 or 10 years. The interest rate offered generally varies with the tenure — longer tenures often attract higher rates, though the relationship is not always linear.
            </p>
          </details>
          <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
              Can I add more money to an existing fixed deposit?
              <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              No, a fixed deposit is a one-time investment. You cannot add additional funds to an existing FD. If you have more money to invest, you need to open a new fixed deposit separately. Some banks offer flexible FD products that allow multiple deposits, but these are different from standard FDs.
            </p>
          </details>
          <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
              What happens if I want to break my FD before maturity?
              <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Premature withdrawal is allowed by most banks and NBFCs, but it usually attracts a penalty. The penalty is typically 0.5% to 1% of the interest rate. Additionally, the interest will be recalculated at the rate applicable for the actual period the deposit was held, which may be lower than the contracted rate.
            </p>
          </details>
          <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
              Are fixed deposits completely safe?
              <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Fixed deposits with banks are considered one of the safest investment options in India. Deposits up to ₹5 lakh per depositor per bank are insured by the Deposit Insurance and Credit Guarantee Corporation (DICGC). However, FDs with NBFCs and corporate FDs carry higher risk and are not covered by DICGC insurance. It is important to check the credit rating of the institution before investing.
            </p>
          </details>
          <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
              How is interest from fixed deposits taxed?
              <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Interest earned on fixed deposits is added to your total income and taxed as per your income tax slab rate. Banks deduct TDS at 10% if the total interest income exceeds ₹40,000 in a financial year (₹50,000 for senior citizens). If you do not have a PAN card, TDS is deducted at 20%. You can submit Form 15G or 15H if your total income is below the taxable limit to avoid TDS.
            </p>
          </details>
          <details className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm transition-all">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary">
              What is the difference between cumulative and non-cumulative FDs?
              <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              In a cumulative FD, the interest is compounded and paid out at maturity along with the principal. This is ideal for investors who do not need regular income and want to maximize returns. In a non-cumulative FD, interest is paid out at regular intervals — monthly, quarterly, half-yearly, or annually — providing a steady income stream. Non-cumulative FDs are preferred by retirees and those seeking regular cash flow.
            </p>
          </details>
        </div>
      </section>
    </BlogLayout>
    </>
  );
}
