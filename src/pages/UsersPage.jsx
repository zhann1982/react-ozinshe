import React from 'react'
import MainLayout from '@layouts/MainLayout'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'

const UsersPage = () => {
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    
    </MainLayout>
  )
}

export default UsersPage