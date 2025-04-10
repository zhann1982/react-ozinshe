import React from 'react'
import MainLayout from '@layouts/MainLayout'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'

const RolesPage = () => {
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
      <div>Roles Page</div>
    </MainLayout>
  )
}

export default RolesPage