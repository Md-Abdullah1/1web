import { Link } from "react-router-dom";
import { Btn, Image } from "../../../../../AbstractElements";
import { Col, Input, Label, Row } from "reactstrap";
import { useState , TouchEvent, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import { ArrowLeft, ArrowRight } from 'react-feather';
import { dynamicImage } from "../../../../../Service";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";

const filterBadges =[
    {title:"Products"},
    {title:"Services"},
    {title:"Users"},
    {title:"Keywords"},
];

const keywords = ["Umbrella Costle" , "Grocery Costle", "Delivery Costle", "keyword Costle","Umbrella" , "Grocery", "Delivery", "keyword","Delivery Costle", "keyword Costle","Umbrella" , "Grocery", "Delivery", "keyword"];
const users = ["James","Super Admin", "Admin","James","Super Admin", "Admin"];
const services = ["Online","Delivery","Fuel","Grocery","James","Super Admin", "Admin","Super Admin", "Admin","Super Admin", "Admin"];
const products = ["Van", "Umbrella","Caravan","Tent","Decore","James","SuperAdmin James Mark", "Admin","Decore","James","Super Admin", "Admin","Decore","James","Super Admin", "Admin"    ];

const DefaultFilter = () => {
    const { mobileView } = useAppSelector((state) => state.layout);
    const [currentPageName, setCurrentPageName] = useState("All");
    const [showSlider, setShowSlider] = useState("All");
    const [sliderWidth, setSliderWidth] = useState(mobileView ? "82%" : "90%");
    const [sliderPixel, setSliderPixel] = useState(mobileView ? 180 : 166);
    const [itemCount, setItemCount] = useState(mobileView ? 3 : 12);
    const [sliderMargin , setSliderMargin] = useState({"Products":0,"Services":0, "Users":0, "Keywords":0});
    const [isAllSelected , setIsAllSelected] = useState(false);
    const changePageName = (title:string) =>{        
        setCurrentPageName(title);
        setShowSlider(title);
    }


    const playSlide =(sliderName:string, slideType:string) =>{
        let slide:number = 0;
        let visibleItem:number = itemCount;
        let maxMargin:number = 0;
        // slide = sliderName == showSlider ? sliderMargin : 0;        
        // setShowSlider(sliderName == showSlider ? showSlider : sliderName)
        // slide = slideType == "left" ? (slide + 20) : (slide -20);
        // setSliderMargin(slide);  
        if(sliderName =="Products" &&  products.length > visibleItem ){
            console.log("products slide");
            slide = sliderMargin.Products;
            slide = slideType == "left" ? (slide + 60) : (slide - 60);
            maxMargin = (sliderPixel * (products.length - visibleItem));
            maxMargin = maxMargin - (2 * maxMargin);
            slide = slide < maxMargin || slide > 0 ? (slideType == "left" ? (slide - 60) : (slide + 60)) : slide;
            setSliderMargin({...sliderMargin , Products:slide});
            setShowSlider("Products");
        }else if(sliderName =="Services" &&  services.length > visibleItem){
            slide = sliderMargin.Services;
            slide = slideType == "left" ? (slide + 60) : (slide - 60);
            maxMargin = (sliderPixel * (services.length - visibleItem));
            maxMargin = maxMargin - (2 * maxMargin);
            slide = slide < maxMargin || slide > 0 ? (slideType == "left" ? (slide - 60) : (slide +60)) : slide;
            setSliderMargin({...sliderMargin , Services:slide});
            setShowSlider("Services");
        }else if(sliderName =="Users" &&  users.length > visibleItem){
            slide = sliderMargin.Users;
            slide = slideType == "left" ? (slide + 60) : (slide -60);
            maxMargin = (sliderPixel * (users.length - visibleItem));
            maxMargin = maxMargin - (2 * maxMargin);
            slide = slide < maxMargin || slide > 0 ? (slideType == "left" ? (slide - 60) : (slide +60)) : slide;
            setSliderMargin({...sliderMargin , Users:slide});
            setShowSlider("Users");
        }else if(sliderName =="Keywords" &&  keywords.length > visibleItem){
            slide = sliderMargin.Keywords;
            slide = slideType == "left" ? (slide + 60) : (slide -60);
            maxMargin = (sliderPixel * (keywords.length - visibleItem));
            maxMargin = maxMargin - (2 * maxMargin);
            slide = slide < maxMargin || slide > 0 ? (slideType == "left" ? (slide - 60) : (slide +60)) : slide;
            setSliderMargin({...sliderMargin , Keywords:slide});
            setShowSlider("Keywords");
        }        
    }

    //not use - variable used in carausel
    const responsive ={
        desktop: {
            breakpoint: { max: 1900, min: 512 },
            items: 10,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    useEffect(() => {
        setSliderWidth(mobileView ? "82%" : "90%");
        setSliderPixel(mobileView ? 150 : 80 );
        setItemCount(mobileView ? 2: 9);
      });

   //touch slide functions
   const touchStart =(e: TouchEvent) =>{
    console.log("touch start call"+e.nativeEvent.touches[0].pageY);
    playSlide("Products","left")
   }

   const touchMove =(e: TouchEvent) =>{
    console.log("touch move call"+e.nativeEvent.touches[0].pageY);
    playSlide("Products","left")
   }

   const touchEnd =(e: TouchEvent) =>{
    console.log("touch end call"+e.nativeEvent.touches[0].pageY);
    playSlide("Products","left")
   }
    
  return (
    <>
    <Row className="pb-2 ps-3">
        <Col md="12">
        <div>
            <div className="badge-spacing">
                <div className="form-check form-check-inline checkbox checkbox-dark mb-0 ">
                    <Input id="inline-1" type="checkbox" defaultChecked={isAllSelected} onClick={()=>{setIsAllSelected(!isAllSelected);changePageName(!isAllSelected ? "All":"Products");}}/>
                    <Label check for='inline-1'>
                    {`All`}
                    </Label>
                </div>
                {filterBadges.map((data, index) => (
                <Link to={``} className="text-capitalize" key={index}>
                    <Btn  color={currentPageName == data.title ? 'info':''} className={`text-capitalize ${currentPageName == data.title ? 'text-light':'text-dark border'}`} key={index} onClick={()=>changePageName(data.title)}>
                        {data.title}
                    </Btn>
                </Link>
                ))}
            </div>
        </div>
        </Col>
    </Row>
    
    <Row className="pb-2 bg-white">            
        {isAllSelected || showSlider == "Products" ?(<>
            {/* Product Slider */}
            <Col md="12" sm="12" >
                <div className="d-flex w-100 justify-content-start pt-2 pb-2">
                    <div className="d-flex align-items-center pt-3 z-3 bg-white" >
                        <ArrowLeft className="bg-info rounded-circle " onClick={()=>playSlide("Products","left")}/>
                    </div>
                    <div className={`me-2 ms-2`} style={{width:sliderWidth}}>
                        <div className={`d-flex overflow-hidden`} style={{marginLeft:sliderMargin.Products}} onTouchStart={(e)=>touchStart(e)} onTouchMove={(e)=>touchMove(e)} onTouchEnd={(e)=>touchEnd}>
                        {products.map((keyword, index)=>{
                            return (
                                <div className="position-relative ms-1 me-1" key={index} style={{width:"min-content"}}>
                                    <div className=" d-flex justify-content-center"><Image className="w-100 img-40 rounded-circle d-flex justify-content-center" src={dynamicImage(`user/user.png`)} alt="user" />  </div>
                                    <span className="p-1 me-1 text-center overflow-hidden" style={{textOverflow: 'ellipsis', whiteSpace:'nowrap', width:'100px'}}>{keyword}</span>
                                </div>
                            )
                        })}      
                        </div>              
                    </div>
                    <div className="d-flex align-items-center pt-3 z-3">
                        <ArrowRight className="bg-info rounded-circle" onClick={()=>playSlide("Products","right")}/>
                    </div>
                </div>
            </Col>
        </>):("")}


        {isAllSelected || showSlider == "Services" ?(<>
             {/* Services Slider */}
            <Col md="12" sm="12">
                <div className="d-flex w-100 justify-content-start pt-2 pb-2">
                    <div className="d-flex align-items-center pt-3 z-3 bg-white">
                        <ArrowLeft className="bg-info rounded-circle z-3" onClick={()=>playSlide("Services","left")}/>
                    </div>
                    <div className={` me-2 ms-2`} style={{width:sliderWidth}}>                    
                        <div className="d-flex w-auto overflow-hidden" style={{marginLeft:sliderMargin.Services}}>                    
                        {services.map((keyword, index)=>{
                            return (
                                <div className="position-relative ms-1 me-1" key={index} style={{width:"min-content"}}>
                                    <div className="w-100 d-flex justify-content-center"><Image className="w-100 img-40 rounded-circle d-flex justify-content-center" src={dynamicImage(`user/user.png`)} alt="user" />  </div>
                                    <span className="p-1 me-1 text-center overflow-hidden" style={{textOverflow: 'ellipsis', whiteSpace:'nowrap', width:'100px'}}>{keyword}</span>
                                </div>
                            )
                        })}    
                        </div>                
                    </div>
                    <div className="d-flex align-items-center pt-3 z-3">
                        <ArrowRight className="bg-info rounded-circle" onClick={()=>playSlide("Services","right")}/>
                    </div>
                </div>
            </Col>
        </>):("")}

        {isAllSelected || showSlider == "Users" ?(<>
              {/* User Slider */}
            <Col md="12" sm="12">
                <div className="d-flex w-100 justify-content-start pt-2 pb-2">
                    <div className="d-flex align-items-center pt-3 z-3">
                        <ArrowLeft className="bg-info rounded-circle " onClick={()=>playSlide("Users","left")}/>
                    </div>
                    <div className={` me-2 ms-2`} style={{width:sliderWidth}}>                    
                        <div className="d-flex w-auto overflow-hidden" style={{marginLeft:sliderMargin.Users}}>                   
                        {users.map((keyword, index)=>{
                            return (
                                <div className="position-relative ms-1 me-1" key={index} style={{width:"min-content"}}>
                                    <div className="w-100 d-flex justify-content-center"><Image className="w-100 img-40 rounded-circle d-flex justify-content-center" src={dynamicImage(`user/user.png`)} alt="user" />  </div>
                                    <span className="p-1 me-1 text-center overflow-hidden" style={{textOverflow: 'ellipsis', whiteSpace:'nowrap', width:'100px'}}>{keyword}</span>
                                </div>
                            )
                        })}   
                        </div>                 
                    </div>
                    <div className="d-flex align-items-center pt-3 z-3">
                        <ArrowRight className="bg-info rounded-circle" onClick={()=>playSlide("Users","right")}/>
                    </div>
                </div>
            </Col>
        </>):("")}

        {isAllSelected || showSlider == "Keywords" ?(<>
              {/* Keyword Slider */}
            <Col md="12" sm="12">
                <div className="d-flex w-100 justify-content-start pt-2 pb-2">
                    <div className="d-flex align-items-center pt-1 z-3">
                    <ArrowLeft className="bg-info rounded-circle " onClick={()=>playSlide("Keywords","left")}/>
                    </div>
                    <div className={` me-2 ms-2`} style={{width:sliderWidth}}>                    
                        <div className="d-flex w-auto overflow-hidden" style={{marginLeft:sliderMargin.Keywords}}>                   
                        {keywords.map((keyword, index)=>{
                            return (
                                <div className="position-relative ms-3 me-1" style={{width:"min-content"}} key={index}>
                                    <span className="p-1 text-nowrap me-1 text-center border rounded bg-secondary">{keyword}</span>
                                </div>
                            )
                        })}   
                        </div>                
                    </div>
                    <div className="d-flex align-items-center pt-1 z-3">
                        <ArrowRight className="bg-info rounded-circle" onClick={()=>playSlide("Keywords","right")}/>
                    </div>                
                </div>
            </Col>
        </>):("")}
        
    </Row>
    </>
  )
}

export default DefaultFilter