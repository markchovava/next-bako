"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useMessageStore } from '../_store/useMessageStore';
import { toast } from 'react-toastify';
import ButtonAdminClose from '../../_components/buttons/ButtonAdminClose';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import HeadingSecondary from '../../_components/headings/HeadingSecondary';
import TextInputDefault from '../../_components/forms/inputs/TextInputDefault';
import { ButtonAdminSubmit } from '../../_components/buttons/ButtonAdminSubmit';
import SelectAdminDefault from '../../_components/forms/selects/SelectAdminDefault';
import { MessageStatusData } from '../_data/sample/MessageData';
import TextAreaInputDefault from '../../_components/forms/textareas/TextAreaInputDefault';



const title = "Add Message"


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


export default function MessageAddModal() {
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
                validation.errors.message || validation.errors.title
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            email: data.email,
            level: data.title,
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