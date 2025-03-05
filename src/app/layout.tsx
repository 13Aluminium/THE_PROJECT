import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import { ThemeProvider } from 'next-themes';
import DarkModeToggle from '@/components/DarkModeToggle'

export const metadata: Metadata = {
  title: 'Hindu Scriptures',
  description: 'Explore ancient Hindu texts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors">
        {/* Wrap everything in Providers so the theme context is available */}
        <ThemeProvider attribute="class">
          <Providers>
            <nav className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="text-xl font-bold">Hindu Scriptures</div>
              <DarkModeToggle />
            </nav>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
