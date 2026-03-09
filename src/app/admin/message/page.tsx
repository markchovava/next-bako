import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import MessageAddModal from "./_components/MessageAddModal"
import MessagePage from "./_components/MessagePage"



const CrumbsData = [
    {id: 1, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Messages', href: '/admin/message'},
]


export default function page() {

  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        
        {/* PAGE */}
        <MessagePage />

        {/* MODAL */}
        <MessageAddModal />

    </>
  )
}
