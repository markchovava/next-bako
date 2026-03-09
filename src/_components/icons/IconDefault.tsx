"use client"
import { GiMountaintop } from "react-icons/gi";
import { SiMaterialdesignicons } from "react-icons/si";
import { IoPersonCircleOutline, IoDocumentsOutline } from "react-icons/io5";
import { AiOutlineDashboard, AiOutlineDatabase } from "react-icons/ai";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleRight, FaRegEye, FaImages } from "react-icons/fa";
import { MdOutlineDescription, MdOutlineGroups, MdInfoOutline, MdOutlineDesignServices, MdOutlineVideoLibrary,
    MdBorderAll, MdOutlineMessage, MdOutlineProductionQuantityLimits, MdOutlineCategory
} from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { TiMediaPlay } from "react-icons/ti";
import { IoIosPricetags } from "react-icons/io";
import { FaAngleLeft, FaUpload, FaRegHandshake } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";


interface PropsInterface{
    type: string
    css?: string
}

export default function IconDefault({
    type, 
    css=""
}: PropsInterface ) {

    switch(type) {
        case 'add':
            return (
                <IoAddCircleOutline className={css} />
            )
        case 'remove':
            return (
                <IoMdRemoveCircleOutline className={css} />
            )
        case 'client':
            return (
                <MdOutlinePersonAddAlt className={css} />
            )
        case 'partner':
            return (
                <FaRegHandshake className={css} />
            )
        case 'delete':
            return (
                <RiDeleteBin2Fill className={css} />
            )
        case 'eye':
            return (
                <FaRegEye className={css} />
            )
        case 'eye-closed':
            return (
                <LuEyeClosed className={css} />
            )
        case 'upload':
            return (
                <FaUpload className={css} />
            )
        case 'document':
            return (
                <IoDocumentsOutline className={css} />
            )
        case 'video':
            return (
                <MdOutlineVideoLibrary className={css} />
            )
        case 'tag':
            return (
                <IoIosPricetags className={css} />
            )
        case 'image':
            return (
                <FaImages className={css} />
            )
        case 'category':
            return (
                <MdOutlineCategory className={css} />
            )
        case 'home':
            return (
                <IoHomeOutline className={css} />
            )
        case 'role':
            return (
                <MdOutlineGroups className={css} />
            )
        case 'page':
            return (
                <MdOutlineDescription className={css} />
            )
        case 'meta':
            return (
                <AiOutlineDatabase className={css} />
            )
        case 'info':
            return (
                <MdInfoOutline className={css} />
            )
        case 'media':
            return (
                <TiMediaPlay className={css} />
            )
        case 'message':
            return (
                <MdOutlineMessage className={css} />
            )
        case 'product':
            return (
                <MdOutlineProductionQuantityLimits className={css} />
            )
        case 'project':
            return (
                <VscProject className={css} />
            )
        case 'service':
            return (
                <MdOutlineDesignServices className={css} />
            )
        case 'order':
            return (
                <MdBorderAll className={css} />
            )
        case 'settings':
            return (
                <IoSettingsOutline className={css} />
            )
        case 'down':
            return (
                <FaAngleDown className={css} />
            )
        case 'right':
            return (
                <FaAngleRight className={css} />
            )
        case 'left':
            return (
                <FaAngleLeft className={css} />
            )
        case 'mount':
            return (
                <GiMountaintop className={css} />
            )
        case 'dashboard':
            return (
                <AiOutlineDashboard className={css} />
            )
        case 'person':
            return (
                <IoPersonCircleOutline className={css} />
            )
        default:
            return (
                <SiMaterialdesignicons className={css} />
            )
    }

    
  return (
    <div>IconDefault</div>
  )
}
