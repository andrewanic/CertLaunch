import Link from 'next/link';
import verticals from '@/data/verticals.json';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CL</span>
              </div>
              <span className="text-xl font-bold">
                Cert<span className="text-accent">Launch</span>
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              The smartest way to start a licensed career. Compare courses, skip the degree, and launch your future.
            </p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-blue-200">Careers</h3>
            <ul className="space-y-2">
              {verticals.map((v) => (
                <li key={v.slug}>
                  <Link href={`/careers/${v.slug}`} className="text-blue-100 hover:text-white text-sm transition-colors">
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular States */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-blue-200">Popular States</h3>
            <ul className="space-y-2">
              {['California', 'Florida', 'Texas', 'New York', 'Ohio', 'Illinois'].map((state) => (
                <li key={state}>
                  <Link
                    href={`/careers/real-estate/${state.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-100 hover:text-white text-sm transition-colors"
                  >
                    {state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-blue-200">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-100 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/about#how-we-make-money" className="text-blue-100 hover:text-white text-sm transition-colors">How We Make Money</Link></li>
              <li><a href="mailto:hello@certlaunch.com" className="text-blue-100 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">© {new Date().getFullYear()} CertLaunch. All rights reserved.</p>
          <p className="text-blue-300 text-xs">
            CertLaunch earns commissions from partner schools. This does not affect our rankings.
          </p>
        </div>
      </div>
    </footer>
  );
}
