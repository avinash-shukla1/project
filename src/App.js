import React from 'react'
import Layout from './Components/Layout'
import ProtectedRoutes from './Components/ProtectedRoutes'

const App = () => {
  return (
    <>
    <Layout>
      <ProtectedRoutes/>
    </Layout>
    </>
  )
}

export default App