import React from 'react'
import MainLayout from '@layouts/MainLayout'
import { isAdminLoggedIn } from '@services/isAdminLoggedIn'
import NoAdminLoggedIn from '@components/NoAdminLoggedIn'

const CategoriesPage = () => {
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    <div>Categories Page</div>
    </MainLayout>
  )
}

export default CategoriesPage