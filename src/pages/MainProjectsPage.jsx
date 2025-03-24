import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { isAdminLoggedIn } from '../sevices/isAdminLoggedIn'
import NoAdminLoggedIn from '../components/NoAdminLoggedIn'

const MainProjectsPage = () => {
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    <div>Main Projects Page</div>
    </MainLayout>
  )
}

export default MainProjectsPage