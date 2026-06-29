import Link from 'next/link';
import { TrendingUp, Check } from 'lucide-react';

export const metadata = {
  title: 'Sign Up',
  description:
    'Create your Nidhify account and start tracking your wealth with India\'s smartest personal finance platform.',
};

const benefits = [
  'Track all investments in one place',
  'Monitor your net worth in real-time',
  'Smart goal planning & SIP management',
  'Secure & private platform',
];

export default function SignupPage() {
  return (
    <main className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 gradient-bg items-center justify-center p-12">
        <div className="max-w-md text-white">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-8 h-8 text-secondary" />
            <span className="text-2xl font-bold">Nidhify</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Start Your Wealth Journey Today</h2>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <TrendingUp className="w-6 h-6 text-secondary" />
            <span className="text-xl font-bold gradient-text">Nidhify</span>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">Create your account</h1>
          <p className="text-gray-600 mb-8">Get started with Nidhify — it&apos;s free.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                placeholder="Create a strong password"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg bg-accent text-white px-6 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-accent hover:underline font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
