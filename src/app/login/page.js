import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Login',
  description: 'Log in to your Nidhify account to manage your wealth and track your investments.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 gradient-bg items-center justify-center p-12">
        <div className="max-w-md text-white">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-8 h-8 text-secondary" />
            <span className="text-2xl font-bold">Nidhify</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome Back to Your Dashboard</h2>
          <p className="text-gray-300 text-lg">
            Track your investments, monitor your net worth, and stay on top of your financial goals.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <TrendingUp className="w-6 h-6 text-secondary" />
            <span className="text-xl font-bold gradient-text">Nidhify</span>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">Log in</h1>
          <p className="text-gray-600 mb-8">Welcome back! Please enter your credentials.</p>
          <form className="space-y-4">
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
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <a href="#" className="text-accent hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg bg-accent text-white px-6 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Log in
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-accent hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
