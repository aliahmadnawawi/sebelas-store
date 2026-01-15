import './globals.css';
import { Sora, Space_Grotesk } from 'next/font/google';

const heading = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700']
});

const body = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600']
});

export const metadata = {
  title: 'Sebelas Store Admin',
  description: 'Omnichannel commerce control room.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body bg-haze text-ink antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_45%),radial-gradient(circle_at_left,_rgba(190,242,100,0.18),_transparent_45%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
