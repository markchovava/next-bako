import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import PageAdminPage from "./_components/PageAdminPage"



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 1, name: 'Pages', href: '/admin/page-admin'},
]


export default function page() {

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <PageAdminPage />

    </>
  )
}
