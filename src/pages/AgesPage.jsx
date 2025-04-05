import React from 'react'
import MainLayout from '@layouts/MainLayout'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'

const AgesPage = () => {
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    <div>Ages Page</div>
    </MainLayout>
  )
}

export default AgesPage