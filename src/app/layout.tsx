import { Providers } from './providers'

export const metadata = {
  title: 'wagmi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin: 100}}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}