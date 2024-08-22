import React,{useState} from 'react'
import CommonModal from '../Ui-Kits/Modal/Common/CommonModal'
import { H3 } from '../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export interface PopupModal{
    children?: React.ReactNode;
    title:string;
    isOpen:boolean;
    size:string;
    backdrop:boolean;
    isClose:boolean;
    openModalToggle:() =>void;
} 

const Popup:React.FC<PopupModal> = ({title, isOpen, size,backdrop, isClose, openModalToggle, children}) => {
    console.log("=>"+(isOpen ?"yes":"no"));
    return (
        <CommonModal isOpen={isOpen}  toggle={openModalToggle} modalBodyClassName="p-0" size={size} backdrop={backdrop}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <div className="modal-header">
                    <H3 className="w-100 text-center"> {title}</H3>
                    {isClose ?? <div className='w-10 justify-content-end' onClick={openModalToggle}><FontAwesomeIcon icon={fas.faClose} size={`xl`} className='pe-2 pull-right'/></div>}
                </div>
                {children}
            </div>
        </CommonModal>
    )
}

export default Popup