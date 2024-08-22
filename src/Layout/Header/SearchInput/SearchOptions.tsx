import React, { useEffect, useState } from "react";
import { FeatherIcons, H5 } from "../../../AbstractElements";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const options = [
  { label: "All", value: "All" },
  {
    label: "Media",
    subOptions: [
      { label: "Albums", value: "Albums" },
      { label: "Collections", value: "Collections" },
      { label: "External Links", value: "External Links" },
      { label: "Photos", value: "Photos" },
      { label: "Photo Contests", value: "Photo Contests" },
      { label: "Reviews", value: "Reviews" },
      { label: "Users", value: "Users" },
    ],
  },
  {
    label: "Posts",
    subOptions: [
      { label: "Blogs", value: "Blogs" },
      { label: "Events", value: "Events" },
      { label: "Job Openings", value: "JobOpenings" },
      { label: "Surveys", value: "Surveys" },
    ],
  },
  {
    label: "Marketplace",
    subOptions: [
      { label: "Branches", value: "Branches" },
      { label: "Coupons", value: "Coupons" },
      { label: "Products", value: "Products" },
      { label: "Services", value: "Services" },
    ],
  },
  {
    label: "Knowledge",
    subOptions: [
      { label: "Games", value: "Games" },
      { label: "Lessons", value: "Lessons" },
      { label: "Quizzes", value: "Quizzes" },
    ],
  },
];

const SearchOptions = ({
  selectedOption,
  setSelectedOption,
}: {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setOpen("")
  };

  useEffect(() => {
    setOpen("1");
  }, []);
  const [open, setOpen] = useState<string | number>("1");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));

  return (
    <div className="search-options my-3">
      <Accordion open={open} toggle={toggle} className="dark-accordion">
        <AccordionItem>
          <AccordionHeader targetId="1">
            <div className="d-flex gap-3">
              <span>Search Type</span>
              <span className="ml-2">{`(${selectedOption})`}</span>
            </div>
            <FeatherIcons
              iconName={open === "1" ? "ChevronUp" : "ChevronDown"}
              className="svg-color"
            />
          </AccordionHeader>
          <AccordionBody accordionId="1" className="">
            <div className="d-flex flex-column">
              {options.map((option, index) => (
                <React.Fragment key={index}>
                  <FormGroup className="m-0  " >
                    <div className={` search-options-radio my-3 mb-2 ${option.label == "All" ? "m-0":""}  `}>
                      <div>
                        <Label check>
                          <H5 className="fw-bold">{option.label}</H5>
                          </Label>
                          {option.value ? (
                            <Input
                              type="radio"
                              name="searchOption"
                              value={option.value}
                              checked={selectedOption === option.value}
                              onChange={handleOptionChange}
                            />
                          ) : (
                            <span style={{ marginLeft: "20px" }} />
                          )}
                      </div>
                    </div>

                  </FormGroup>
                  <div className="search-options-radio">
                    {option.subOptions &&
                      option.subOptions.map((subOption, subIndex) => (
                        <div key={subIndex}>
                          <Label>{subOption.label}</Label>
                          {subOption.value && (
                            <Input
                              type="radio"
                              name="searchOption"
                              value={subOption.value}
                              checked={selectedOption === subOption.value}
                              onChange={handleOptionChange}
                            />
                          )}
                        </div>
                      ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div >
  );
};

export default SearchOptions;
