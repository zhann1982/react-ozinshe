import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { isAdminLoggedIn } from '../sevices/isAdminLoggedIn'
import NoAdminLoggedIn from '../components/NoAdminLoggedIn'

const UsersPage = () => {
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    <div>Users Page</div>
    </MainLayout>
  )
}

export default UsersPage