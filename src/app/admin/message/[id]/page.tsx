import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import MessageEditModal from "./_components/MessageEditPage";

import MessageViewPage from "./_components/MessageViewPage"



interface PropInterface {
    params: Promise<{ 
      id: string
    }>
}


export default async function page({ params }: PropInterface) {
  const { id } = await params;
    
    const CrumbsData = [
        {id: 1, name: 'Admin', href: '/admin'},
        {id: 3, name: 'Messages', href: '/admin/message'},
        {id: 4, name: 'View Message', href: `/admin/message/${id}`},
    ]
  return (
    <>
        <BreadCrumbDefault data={CrumbsData} />
        {/*  */}
        <MessageViewPage id={id} />

        <MessageEditModal id={id} />

    </>
  )
}
