"use client"

import React from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useMessageStore } from '../../_store/useMessageStore';
import ButtonAdminClose from '@/app/admin/_components/buttons/ButtonAdminClose';
import HeadingSecondary from '@/app/admin/_components/headings/HeadingSecondary';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import TextInputDefault from '@/app/admin/_components/forms/inputs/TextInputDefault';
import SelectAdminDefault from '@/app/admin/_components/forms/selects/SelectAdminDefault';
import { ButtonAdminSubmit } from '@/app/admin/_components/buttons/ButtonAdminSubmit';
import { toast } from 'react-toastify';
import TextAreaInputDefault from '@/app/admin/_components/forms/textareas/TextAreaInputDefault';
import { MessageStatusData } from '../../_data/sample/MessageData';




const title = "Edit Message"


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}


interface PropInterface{
    id: string | number
}


export default function MessageEditModal({ id }: PropInterface) {
    const { 
        data, 
        errors,
        toggleModal,
        isSubmitting,
        setData, 
        setInputValue, 
        setToggleModal, 
        clearErrors,
        setIsSubmitting,
        validateForm,
    } = useMessageStore()

    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

 

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError =  validation.errors.name || 
                validation.errors.email || validation.errors.title
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            email: data.email,
            title: data.title,
            message: data.message,
            status: data.status,
           
        } 
        setIsSubmitting(false);
        console.log('FORM DATA: ', formData)
    }

   
    return (
        <AnimatePresence>
            {toggleModal && (
                <motion.section
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`w-screen h-screen fixed top-0 left-0 z-200 overflow-y-auto`}>
                    <div className='absolute z-0 top-0 left-0 w-full h-full bg-black opacity-40'></div>
                    <div className='w-full h-full absolute z-10 overflow-auto scroll__width py-24'>
                        <section className='mx-auto lg:w-[60%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                            <div className='flex items-center justify-end'>
                                <ButtonAdminClose onClick={handleToggleModal} />
                            </div>

                            <form onSubmit={handleSubmit}>
                                <HeadingSecondary title={title} css='text-center' />
                                <SpacerPrimary />
                                <hr className="w-full border-b border-gray-100" />
                                <SpacerPrimary />
                                
                                <TextInputDefault
                                    label='Name:' 
                                    name='name' 
                                    type="text"
                                    value={data.name} 
                                    placeholder='Enter your Name...'
                                    onChange={setInputValue} 
                                    error={errors.name}
                                />
                                <SpacerPrimary />
                            
                                <TextInputDefault
                                    label='Title:' 
                                    name='title' 
                                    type="text"
                                    value={data.title} 
                                    placeholder='Enter your Title.'
                                    onChange={setInputValue} 
                                    error={errors.title}
                                />
                                <SpacerPrimary />

                                <TextAreaInputDefault
                                    label='Message:' 
                                    name='message' 
                                    value={data.message} 
                                    placeholder='Enter your Message.'
                                    onChange={setInputValue} 
                                    error={errors.message}
                                />
                                <SpacerPrimary />
                            
                                <TextInputDefault
                                    label='Email' 
                                    name='email' 
                                    type="text"
                                    value={data.email} 
                                    placeholder='Enter your Email...'
                                    onChange={setInputValue} 
                                    error={errors.email}
                                />
                                <SpacerPrimary />
                                
                                <SelectAdminDefault
                                    label='Status' 
                                    name='status' 
                                    data={MessageStatusData}
                                    value={data.status} 
                                    onChange={setInputValue} 
                                    error={errors.status}
                                />
                                <SpacerPrimary />  
                                                            
                                <div className='flex items-center justify-center'>
                                    <ButtonAdminSubmit 
                                        title='Submit' 
                                        css='px-12 text-white py-4' 
                                        status={isSubmitting} 
                                    />
                                </div>
                                <SpacerPrimary />
                            </form>
                        </section>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}