import { CardHeader } from 'reactstrap';
import { CardHeaderCollpaseProp } from '../../Types/Ui-Kits/UiKitsTypes';
import H4 from '../Headings/H4Element';
import { ChevronDown, ChevronUp } from 'react-feather'
import { Btn, H2 } from '../../AbstractElements'


const CardHeaderCollapse: React.FC<CardHeaderCollpaseProp> = ({title , isOpen , setIsOpen}) => {
  return (
    <>
    <CardHeader className={`d-flex justify-content-between pb-0`} onClick={() => setIsOpen(!isOpen)}>
        <Btn className='p-0' onClick={() => setIsOpen(!isOpen)}><H4 >{title}</H4></Btn>
        {isOpen ? <ChevronUp onClick={() => setIsOpen(!isOpen)}/> : <ChevronDown onClick={() => setIsOpen(!isOpen)}/>}
    </CardHeader>
    </>
  )
}

export default CardHeaderCollapse