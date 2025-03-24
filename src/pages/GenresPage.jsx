import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { isAdminLoggedIn } from '../sevices/isAdminLoggedIn'
import NoAdminLoggedIn from '../components/NoAdminLoggedIn'

const GenresPage = () => {
  if (!isAdminLoggedIn()) {
    return <NoAdminLoggedIn />
  } else return (
    <MainLayout>
    <div>Genres Page</div>
    </MainLayout>
  )
}

export default GenresPage