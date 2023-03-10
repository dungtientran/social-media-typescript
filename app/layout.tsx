import Header from '../components/Header/Header'
import '../styles/globals.css'


export const metadata = {
  title: 'Social',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Header */}
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
