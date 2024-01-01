import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <html>
    <body>{children}</body>
  </html>
)

export default Layout
