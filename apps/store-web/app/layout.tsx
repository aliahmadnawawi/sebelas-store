import './globals.css';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700']
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600']
});

export const metadata = {
  title: 'Sebelas Storefront',
  description: 'Modern commerce storefront for every store slug.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-sand text-midnight">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(255,122,89,0.18),_transparent_40%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
