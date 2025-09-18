import "./globals.css";
import { cn } from '@/lib/utils'
import { Outfit, Noto_Sans_Arabic } from 'next/font/google'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  display: 'swap',
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: 'Cronos - AI Site Intelligence Platform',
  description: 'AI-powered site intelligence platform for business insights.',
  icons: {
    icon: '/cronos_logo.png',
    shortcut: '/cronos_logo.png',
    apple: '/cronos_logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          outfit.variable,
          notoSansArabic.variable,
          'font-sans antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
