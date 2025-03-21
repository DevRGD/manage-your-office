import './globals.css';
import AllProviders from '@/components/AllProviders';

export const metadata = {
  title: 'Manage Your Office – Organize Tasks, Track Progress, and Boost Productivity',
  description:
    'Easily manage office tasks, assign work, and track progress in real-time. Perfect for employees, managers, and CEOs looking to boost efficiency and stay organized effortlessly.',
  keywords: [
    'Office Task Management',
    'Team Collaboration Software',
    'Project Tracking Tool',
    'Business Workflow Automation',
    'Task Management for Teams',
    'Work Assignment App',
    'Office Productivity Platform',
    'Employee Task Monitoring',
    'Project Planning Software',
    'HR & Task Automation',
  ],
  authors: [{ name: 'DevRGD', url: 'https://manage-your-office.vercel.app' }],
  creator: 'DevRGD',
  publisher: 'EncodePreneur',
  metadataBase: new URL('https://manage-your-office.vercel.app'),
  openGraph: {
    title: 'Manage Your Office – Stay Organized & Work Smarter',
    description:
      'A powerful yet easy-to-use office management tool that helps teams stay productive, manage tasks efficiently, and track progress in real-time.',
    url: 'https://manage-your-office.vercel.app',
    siteName: 'Manage Your Office',
    images: [
      {
        url: 'https://manage-your-office.vercel.app/images/project.png',
        width: 1200,
        height: 630,
        alt: 'Manage Your Office – Task Management Dashboard',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manage Your Office – Simplify Work, Stay Productive',
    description:
      'Easily manage office tasks, track progress, and boost team productivity. Get real-time updates and stay organized effortlessly.',
    images: ['https://manage-your-office.vercel.app/images/project.png'],
    creator: '@manageyouroffice',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://manage-your-office.vercel.app',
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Manage Your Office',
    url: 'https://manage-your-office.vercel.app',
    image: 'https://manage-your-office.vercel.app/images/project.png',
    description:
      'A powerful office management tool that helps teams stay productive, manage tasks efficiently, and track progress in real-time.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    author: {
      '@type': 'Organization',
      name: 'EncodePreneur',
    },
  },
  securityHeaders: [
    {
      key: 'Content-Security-Policy',
      value:
        "default-src 'self'; img-src 'self' data: https://manage-your-office.vercel.app; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://manage-your-office.vercel.app;",
    },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-XSS-Protection', value: '1; mode=block' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
  ],
  sitemap: 'https://manage-your-office.vercel.app/sitemap.xml',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <AllProviders>{children}</AllProviders>
    </html>
  );
}
