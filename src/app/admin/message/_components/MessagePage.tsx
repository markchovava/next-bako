"use client"

import SpacerDefault from '@/_components/spacers/SpacerDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import HeadingDefault from '../../_components/headings/HeadingDefault'
import ButtonAdmin from '../../_components/buttons/ButtonAdmin'
import { useMessageStore } from '../_store/useMessageStore'
import TextInputAdminSearch from '../../_components/forms/inputs/TextInputAdminSearch'
import ButtonAdminSearch from '../../_components/buttons/ButtonAdminSearch'
import IconDefault from '@/_components/icons/IconDefault'
import ActionButtons from '../../_components/buttons/ActionButtons'



export default function MessagePage() {
    const { 
      isSearching, 
      search, 
      setSearch, 
      setToggleModal, 
    } = useMessageStore()

    const handleToggleModal = () => {
        setToggleModal(true)
    }

    const handleSearch = () => {}
    const handleDelete = () => {}

  return (
    <>
    <SpacerDefault />
    <HeadingDefault title="Messages" />
    <SpacerPrimary />

    <section className='container__primary bg-white drop-shadow-lg rounded-lg px-5 py-3 flex items-center justify-between'>
        <form onSubmit={handleSearch} className='lg:w-[60%] w-full flex items-center justify-start rounded-full border border-gray-300'>
            <TextInputAdminSearch 
                type='text'
                placeholder='Enter Search here...'
                onChange={setSearch}
                value={search}
            />
            <ButtonAdminSearch type="submit" status={isSearching} />
        </form>
        <ButtonAdmin
            onClick={handleToggleModal}
            name='Add' 
            css="px-8 py-3 text-white" 
        />
    </section>
    <SpacerPrimary />

    {/* DESKTOP */}
    <section className='container__primary hidden lg:block drop-shadow-lg'>
        {/* HEADER */}
        <div className='bg-gray-100 w-full border border-gray-300 flex items-center justify-start font-medium'>
            <div className='w-[30%] px-4 py-3 border-r border-gray-300'>EMAIL</div>
            <div className='w-[40%] px-4 py-3 border-r border-gray-300'>TITLE</div>
            <div className='w-[20%] px-4 py-3 border-r border-gray-300'>STATUS</div>
            <div className='w-[10%] px-4 py-3 '>ACTIONS</div>
        </div>
        {/* TABLE ROW */}
        <div className='w-full bg-white border-x border-b border-gray-300 flex items-center justify-start'>
            <div className='w-[30%] px-4 py-3 border-r border-gray-300'>The Data</div>
            <div className='w-[40%] px-4 py-3 border-r border-gray-300'>The Data</div>
            <div className='w-[20%] px-4 py-3 border-r border-gray-300'>The Data</div>
            <div className='w-[10%] px-4 py-3 '>
                <ActionButtons viewHref='/admin/message/1' onDelete={() => handleDelete()} />
            </div>
        </div>
        {/* TABLE ROW */}
        <div className='w-full bg-white border-x border-b border-gray-300 flex items-center justify-start'>
            <div className='w-[30%] px-4 py-3 border-r border-gray-300'>The Data</div>
            <div className='w-[40%] px-4 py-3 border-r border-gray-300'>The Data</div>
            <div className='w-[20%] px-4 py-3 border-r border-gray-300'>The Data</div>
            <div className='w-[10%] px-4 py-3 '>
                <ActionButtons viewHref='/admin/message/1' onDelete={() => handleDelete()} />
            </div>
        </div>
    </section>

    {/* MOBILE */}
    <section className='container__primary lg:hidden block '>
        {[...Array(4)].map((i, key) => (
            <div key={key} className='w-full drop-shadow-lg bg-white rounded-xl p-6 space-y-3 mb-6'>
                <div className='w-full flex items-start justify-between'>
                    <div className=''>
                        <p className='font-light'>Email</p>
                        <p>The text here</p>
                    </div>
                    <ActionButtons viewHref='/admin/message/1' onDelete={() => handleDelete()} />
                </div>
                <div className=''>
                    <p className='font-light'>Title</p>
                    <p>The text here</p>
                </div>
                <div className=''>
                    <p className='font-light'>Status</p>
                    <p>The text here</p>
                </div>
            </div>
        ))}
       
    </section>

    <SpacerPrimary />

    <section className='container__primary flex items-center justify-end gap-3'>
        <button type='button' className={`cursor-pointer rounded-full overflow-hidden border border-gray-300 px-8 py-2 
            flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-200 ease-initial transition-colors duration-200`}>
            <IconDefault css='' type='left' />
            Prev
        </button>
        <button type='button' className={`cursor-pointer rounded-full overflow-hidden border border-gray-300 px-8 py-2 
            flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-200 ease-initial transition-colors duration-200`}>
            Next
            <IconDefault css='' type='right' />
        </button>
    </section>

    <SpacerDefault />
    </>
  )
}
