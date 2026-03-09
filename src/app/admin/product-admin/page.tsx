import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import ProductAdminPage from "./_components/ProductAdminPage"



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 1, name: 'Product Information', href: '/admin/product-admin'},
]


export default function page() {

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <ProductAdminPage />

    </>
  )
}
