import "./globals.css";
import { cn } from '@/lib/utils'
import { Outfit, Noto_Sans_Arabic } from 'next/font/google'
import { themeScript } from '@/lib/theme-script'

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
    <html lang="en" suppressHydrationWarning>
    <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={cn(
          outfit.variable,
          notoSansArabic.variable,
          'font-sans antialiased app-bg'
        )}
      >
        {children}
      </body>
    </html>
  );
}
