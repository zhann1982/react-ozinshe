import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { isAdminLoggedIn } from '../sevices/isAdminLoggedIn'
import NoAdminLoggedIn from '../components/NoAdminLoggedIn'

const EditProjectPage = () => {
    const params = useParams()
    if (!isAdminLoggedIn()) {
      return <NoAdminLoggedIn />
    } else return (
      <MainLayout>
      <div>EditProjectPage project id: {params.id}</div>
      </MainLayout>
    )
}

export default EditProjectPage