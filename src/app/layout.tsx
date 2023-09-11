import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import { ApolloWrapper } from './lib/apollo-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick and Morty Random Character Generator',
  description: 'Created by decentraluis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ApolloWrapper>
      </body>
    </html>
  )
}
