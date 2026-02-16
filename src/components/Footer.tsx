import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo className="h-7" />
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              The verified marketplace for licensing education. Compare schools, save money, launch your career.
            </p>
          </div>

          {/* Licenses */}
          <div>
            <h4 className="font-semibold text-sm text-neutral-900 mb-3">Licenses</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-neutral-700">Real Estate</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">MLO / Mortgage</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">Appraisal</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">Insurance</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">Home Inspection</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm text-neutral-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-neutral-700">About</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">How We Earn</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">Editorial Policy</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm text-neutral-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-neutral-700">Licensing Guides</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">State Requirements</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">Blog</Link></li>
              <li><Link href="#" className="hover:text-neutral-700">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-neutral-400">© 2026 CertLaunch. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-neutral-400">
            <Link href="#" className="hover:text-neutral-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-600">Terms of Service</Link>
            <Link href="#" className="hover:text-neutral-600">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
