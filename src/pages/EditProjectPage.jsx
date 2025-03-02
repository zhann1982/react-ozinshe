import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const EditProjectPage = () => {
    const params = useParams()
  return (
    <MainLayout>
    <div>EditProjectPage project id: {params.id}</div>
    </MainLayout>
  )
}

export default EditProjectPage