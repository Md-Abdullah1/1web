import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Input, Label, Row } from 'reactstrap';
import { Btn, Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { useAppSelector } from '../../../../ReduxToolkit/Hooks';

const filterBadges =[
    {title:"Category"},
    {title:"Users"},
    {title:"Keywords"},
];

const category = ["Van", "Umbrella","Caravan","Tent","Decore","James","SuperAdmin James Mark", "Admin","Decore","James","Super Admin", "Admin","Decore","James","Super Admin", "Admin"    ];
const users = ["Van", "Umbrella","Caravan","Tent","Decore",];
const keywords = ["Van", "Umbrella","Caravan","Tent","Decore",];

const GalleryFilter = () => {
    const { mobileView } = useAppSelector((state) => state.layout);
    const [isAllSelected , setIsAllSelected] = useState(false);
    const [currentPageName, setCurrentPageName] = useState("All");
    const [showSlider, setShowSlider] = useState("All");
    const [itemCount, setItemCount] = useState(mobileView ? 3 : 12);
    const [sliderPixel, setSliderPixel] = useState(mobileView ? 180 : 166);
    const [sliderWidth, setSliderWidth] = useState(mobileView ? "82%" : "90%");
    const [sliderMargin , setSliderMargin] = useState({"Category":0, "Users":0, "Keywords":0});    
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
        if(sliderName =="Category" &&  category.length > visibleItem){
            slide = sliderMargin.Category;
            slide = slideType == "left" ? (slide + 60) : (slide - 60);
            maxMargin = (sliderPixel * (category.length - visibleItem));
            maxMargin = maxMargin - (2 * maxMargin);
            slide = slide < maxMargin || slide > 0 ? (slideType == "left" ? (slide - 60) : (slide +60)) : slide;
            setSliderMargin({...sliderMargin , Category:slide});
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
    return (
        <>
        <Row className="pb-2 ps-3 pt-4">
            <Col md="12">
            <div>
                <div className="badge-spacing">
                    <div className="form-check form-check-inline checkbox checkbox-dark mb-0 ">
                        <Input id="inline-1" type="checkbox" defaultChecked={isAllSelected} onClick={()=>{setIsAllSelected(!isAllSelected);changePageName(!isAllSelected ? "All":"Category");}}/>
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
            
            {isAllSelected || showSlider == "Category" ?(<>
                {/* Services Slider */}
                <Col md="12" sm="12">
                    <div className="d-flex w-100 justify-content-start pt-2 pb-2">
                        <div className="d-flex align-items-center pt-3 z-3 bg-white">
                            <ArrowLeft className="bg-info rounded-circle z-3" onClick={()=>playSlide("Category","left")}/>
                        </div>
                        <div className={` me-2 ms-2`} style={{width:sliderWidth}}>                    
                            <div className="d-flex w-auto overflow-hidden" style={{marginLeft:sliderMargin.Category}}>                    
                            {category.map((keyword, index)=>{
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
                            <ArrowRight className="bg-info rounded-circle" onClick={()=>playSlide("Category","right")}/>
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

export default GalleryFilter;