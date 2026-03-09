import BreadCrumbDefault from './_components/bread-crumbs/BreadCrumbDefault'
import AdminPage from './AdminPage'



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
]


export default function page() {

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />

        <AdminPage />

        
    </>
  )
}
