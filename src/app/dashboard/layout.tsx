import React from 'react'


const DashboardLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <h1>Hello Dashboard Layout header</h1>
        {children}
    </div>
  )
}

export default DashboardLayout