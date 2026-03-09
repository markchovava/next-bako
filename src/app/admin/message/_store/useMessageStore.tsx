"use client"

import { create } from "zustand";
import { MessageEntity, MessageInterface } from "../_data/entity/MessageEntity"



interface PropInterface{
    data: MessageInterface,
    preData: MessageInterface,
    errors: MessageInterface,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    search: string,
    isSearching: boolean,
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    setError: (name: string, value: string) => void,
    setData: (data: MessageInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (str: string) => void,
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateForm: () => { isValid: boolean; errors: MessageInterface },
    // getData: () => Promise<void>
}


export const useMessageStore = create<PropInterface>((set, get) => ({ 
    data: MessageEntity,
    preData: MessageEntity,
    errors: MessageEntity,
    message: "",
    search: "",
    isSearching: false,
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    setSearch: (e) => {
        const { value } = e.target;
        set({
            search: value
        })
    },
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    },
    setToggleModal: (i) => {
        set({
            toggleModal: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setData: (i) => {
        set({
            data: i ? i : MessageEntity,
            preData: i ? i : MessageEntity,
            isLoading: false,
        })
    },
    setError: (name, value) => {
        const currentErrors = get().errors;
        set({
            errors: { ...currentErrors, [name]: value }
        })
    },
    resetData: () => {
        set({
            data: MessageEntity,
            preData: MessageEntity,
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    },
    clearErrors: () => {
        set({
            errors: MessageEntity,
        })
    },
    validateField: (name, value) => {
        let error = ""
        switch(name){
            case "name":
                if(!value.trim()){
                    error = "Name is required.";
                } 
                break;
            case "email":
                if(!value.trim()){
                    error = "Email is required.";
                } 
                break;
            case "message":
                if(!value.trim()){
                    error = "Message is required.";
                } 
                break;
            default:
                break;
        }
        return error
    },
    validateForm: () => { 
        const { data } = get();
        let errors = { ...MessageEntity };
        let hasError = false;
        // Validate NAME
        const nameError = get().validateField("name", data.name);
        if (nameError) {
            errors.name = nameError;
            hasError = true;
        }
        // Validate EMAIL
        const emailError = get().validateField("phone", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate EMAIL
        const messageError = get().validateField("message", data.message);
        if (messageError) {
            errors.message = messageError;
            hasError = true;
        }
        
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },


}))