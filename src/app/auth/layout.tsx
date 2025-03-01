import React from 'react'

type Props = {}

const AuthLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <h1>Hello Auth Layout header</h1>
        {children}
    </div>
  )
}

export default AuthLayout