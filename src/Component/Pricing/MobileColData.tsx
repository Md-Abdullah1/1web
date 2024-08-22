import React,{useState, useEffect} from 'react'
import { Col } from 'reactstrap'

export interface ColDataProps{
    value:string ;
    i_index:number;
    d_index:number;
}

const MobileColData = ( props: ColDataProps) => {
    const {value, i_index, d_index} = props;
    const [mobileLineClass, setMobileLineClass] = useState('');
    useEffect(()=>{
        if(d_index == 0 && i_index == 0){
            setMobileLineClass('plan-text-line2 plan-text-height3')
        }else if(d_index == 1 && i_index == 1){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 1 && i_index == 3){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 1 && i_index == 4){
            setMobileLineClass('plan-text-line2 plan-text-height3')
        }else if(d_index == 1 && i_index == 5){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 1 && i_index == 6){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 1 && i_index == 7){
            setMobileLineClass('plan-text-line2 plan-text-height3')
        }else if(d_index == 1 && i_index == 11){
            setMobileLineClass('plan-text-line2 plan-text-height mb-1')
        }else if(d_index == 2 && i_index == 0){
            setMobileLineClass('plan-text-line2 plan-text-height3')
        }else if(d_index == 2 && i_index == 1){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 2 && i_index == 1){
            setMobileLineClass('plan-text-line2 plan-text-height3')
        }else if(d_index == 2 && i_index == 3){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 2 && i_index == 4){
            setMobileLineClass('plan-text-line2 plan-text-height3')
        }else if(d_index == 2 && i_index == 5){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 2 && i_index == 6){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 2 && i_index == 7){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 3 && i_index == 0){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 3 && i_index == 1){
            setMobileLineClass('plan-text-line2 plan-text-height mb-1')
        }else if(d_index == 4 && i_index == 3){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }else if(d_index == 5 && i_index == 1){
            setMobileLineClass('plan-text-line2 plan-text-height')
        }
    },[])
    return (
        <Col md="12" className={mobileLineClass} >{value}</Col>
    )
}

export default MobileColData