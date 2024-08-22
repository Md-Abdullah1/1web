import { useState, useEffect, ChangeEvent, useRef} from 'react'
import { CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap'
import { AccountCountry, RegistrationType,  } from '../../utils/Constant'
import Country from '../CommonInput/Country'
import { ErrorMessage, Formik } from 'formik'
import { registratinoFormInitialValue, registrationFormSchema } from '../../Data/RegistrationPlans/RegistrationValidation'
import { useGetPlansQuery } from '../../ReduxToolkit/RegistrationReducer/RegistrationApiSlice'
import { useGetCountryQuery } from '../../ReduxToolkit/TempApiSlice'
import { useGetRegistrationTypeQuery } from '../../ReduxToolkit/RegistrationReducer/RegistrationTypeApi'
import StaticPlanData from './StaticPlanData'
import DynamicPlanData from './DynamicPlanData'
import RegistrationTypes from '../CommonInput/RegistrationTypes'

export interface PlanDataType{
    id:number;
    package:string;
    price:number;
    content_life_cycle_mgt:boolean;
    live_tracking:boolean;
    email_marketing:boolean;
  }
  
  // Sample data
  const data_plans:PlanDataType[] = [
    { id: 1, package: 'Basic', price: 100, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,  },
    { id: 2, package: 'Pro', price: 200, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 3, package: 'Premium', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 4, package: 'Business', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 5, package: 'Pro 2', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 6, package: 'Business 2', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 7, package: 'Pro 3', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 8, package: 'Business 3', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 9, package: 'Pro 4', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 10, package: 'Business 4', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 11, package: 'Pro 5', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 12, package: 'Business 5', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 13, package: 'Pro 6', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 15, package: 'Business 6', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
  ];

export const multiWithHeaderData = [
    {name:"India"},
    {name:"US"},
    {name:"Canada"}
  ];

export const packgaeData ={
    plan:"Business",
    ndays:'500.00 USD $',
    tdays:'450.00 USD $/30 Days,',
    tdiscount:'(10% discount) If you pay 1350.00 USD $',
    etdays:'425.00 USD $/30 Days,',
    etdiscount:' (15% discount) If you pay 2550.00 USD $',
    anualdays:'400.00 USD $/30 Days,',
    anualdiscount:' (20% discount) If you pay 4800.00 USD $',
    followDiscount:'16%',
    manageStore:{
      active_branch:54,
      bulkBranchExcel:'check mark',
      publicContactInfo:'Red X'
    }
}
const PricingPlans = () => { 
    const [formData, setFormData] = useState<FormData>();
    const [country  , setCountry] = useState(101);
    // const [selectedRegistrationType  , setSeletedRegistrationType] = useState([1,2]);
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState(false);
    const [planStaticData , setPlanStaticData] = useState();
    const [registrationTypes, setRegistrationTypes] = useState([]);
    const Plans = useGetPlansQuery(formData); 
    

    const changeCountry = (county:string) =>{
        console.log("country==>"+county);
    }
    
    const groupedData = data_plans.reduce((acc, item) => {
        if (!acc[item.package]) {
          acc[item.package] = [];
        }
        acc[item.package].push(item);
        return acc;
      }, {});

      const handleResize = () => {
        console.log("inner widht"+window.innerWidth);
        setIsMobile(window.innerWidth > 415 ? false : true);
      }

    useEffect(()=>{       
        
        // console.log(plans);
        console.log("use effect call"+window.innerWidth);  
        setIsMobile(window.innerWidth > 415 ? false : true);
        window.addEventListener("resize", handleResize);
        // console.log("==>"+(data ? JSON.stringify(data) : "no data"));
        //get registration plan
        // fetchRegistrationPlan();
        if(Plans){
            setPlanStaticData(Plans?.data?.static);
        }
        

    },[]);

    const getRegistrationTypes = (registrationType:any) =>{
        let filter_types = registrationType?.data?.map((item:any) =>{
            return {name:item.country_name};
        })
        setRegistrationTypes(filter_types)
    }

    const fetchRegistrationPlan = async () => {
        try{

        }catch(error){
            console.error('Error fetching data:', error);
        }
    }

    const handleInputChange = (event :ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        //setFormData({...formData, [name]: value });
        console.log("acountry::"+formData);
    }

    const handleSignup = () =>{
        console.log("acountry::");
    }

    return (
    <CardBody className='pt-0 '>
        {/* {Plans ? JSON.stringify(Plans?.data?.data.static):("")} */}
        {Plans.data ? (
            <>
            
            <Row className='' >
                <Col md="6" sm="12" className='pt-2'>
                    <Row className=''>
                    <Formik initialValues={registratinoFormInitialValue} onSubmit={handleSignup} validationSchema={registrationFormSchema} >       
                    {({errors}) =>(
                        <Form className='d-flex'>
                        <Col md="5" lg="5" sm="12">
                            <Label>{AccountCountry}</Label>                         
                            <Country name="country" placeholder="Select Country" className={`${submitErrors && `${errors.country ? "is-invalid" : "is-valid"}`}`} isMulti={false} onChange={handleInputChange}/>
                            <ErrorMessage
                                name="country"
                                component="span"
                                className="invalid-feedback"
                                />
                        </Col>
                        <Col md="7" lg="7" sm="12" className='ps-1'>
                            <FormGroup>
                                <Label>{RegistrationType}</Label>
                                <RegistrationTypes name="registration_type"  placeholder="Select Registration Type" isMulti={true} formData={formData} />
                            </FormGroup>
                        </Col>
                        </Form>
                    )}
                    </Formik>
                    </Row>            
                </Col>

            </Row>

            
            
            <Row className='py-1'>
            {isMobile  ? (

                <Col md="12" className='d-flex ps-0'  style={{ overflowX:"auto"}}>
                <StaticPlanData staticData={Plans?.data?.data.static}/>
            
                {/* <div className='d-flex' style={{overflowX : 'auto'}}> */}
                <DynamicPlanData dData={Plans?.data?.data.dynamic}/>
                {/* </div> */}
                </Col>
                ):(
                <>
                
                <Col md="4" className='ps-0'>
                    <StaticPlanData staticData={Plans?.data?.data.static}/>
                </Col> 
                <Col md="8" >
                    <Row>
                        <Col md="12" className='d-flex w-100'  style={{ overflowX:"scroll", scrollbarWidth:'initial', scrollbarColor:'#000'}}>
                        <div className='d-flex w-auto'>
                            <DynamicPlanData dData={Plans?.data?.data.dynamic}/>                            
                        </div>
                        </Col>
                    </Row>
                </Col>  
                </>                
                )}
            </Row>
            </>
        ):("")}  
    </CardBody>
    )
}

export default PricingPlans