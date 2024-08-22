import { Col, Input } from "reactstrap";
import { H3, H4, LI, SVG, UL } from "../../../AbstractElements";
import { SearchCrocs } from "../../../utils/Constant";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
    MenuItem,
    SearchSuggestionItem,
} from "../../../Types/Layout/SidebarType";
import ResponsiveSearchList from "./ResponsiveSearchList";
import { MenuList } from "../../../Data/LayoutData/SidebarData";
import CommonModal from "../../../Component/Ui-Kits/Modal/Common/CommonModal";
import SearchOptions from "./SearchOptions";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setToggleSearchPopup } from "../../../ReduxToolkit/Reducers/LayoutSlice";
import { X } from "react-feather";
import SavedSearch from "../RightHeaderIcon/SavedSearch/SavedSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export const AdditionalMenuList: MenuItem[] = [
    ...MenuList,
    ...[
        {
            title: "1 Webbb",
            Items: [
                {
                    id: 34,
                    title: "Account Setting",
                    icon: "",
                    type: "sub",
                    active: false,
                    children: [
                        {
                            title: "Personal Information",
                            type: "link",
                            path: `${process.env.PUBLIC_URL}/account-settings/personal-information`,
                            menucontent:
                                "You have the data base information tha we can remove the list and we must knoiw the information just get the data .",
                        },
                        {
                            title: "My Resumes",
                            type: "link",
                            path: `${process.env.PUBLIC_URL}/account-settings/my-resumes`,
                        },
                        {
                            title: "Birth Date",
                            type: "link",
                            path: `${process.env.PUBLIC_URL}/account-settings/birthday-info`,
                        },
                        {
                            title: "Shpping Addresses",
                            type: "link",
                            path: `${process.env.PUBLIC_URL}/account-settings/shipping-addresses`,
                        },
                        {
                            title: "Password",
                            type: "link",
                            path: `${process.env.PUBLIC_URL}/account-settings/password`,
                        },
                        {
                            title: "My Registration Plan",
                            type: "link",
                            path: `${process.env.PUBLIC_URL}/account-settings/my-registration-plan`,
                        },
                    ],
                },
                {
                    title: "User Dashboard",
                    id: 0,
                    icon: "home",
                    type: "sub",
                    lanClass: "lan-3",
                    children: [
                        {
                            path: `${process.env.PUBLIC_URL}/dashboard/user-dashboard`,
                            title: "User Dashboard",
                            type: "link",
                        },
                        {
                            path: `${process.env.PUBLIC_URL}/ecommerce/paymentdetails`,
                            title: "Payment Method",
                            type: "link",
                        },
                        {
                            path: `${process.env.PUBLIC_URL}/ecommerce/orderhistory`,
                            title: "Order History",
                            type: "link",
                        },
                        {
                            path: `${process.env.PUBLIC_URL}/dashboard/user-dashboard`,
                            title: "Wallet",
                            type: "link",
                        },
                        {
                            path: `${process.env.PUBLIC_URL}/dashboard/user-dashboard`,
                            title: "Sales",
                            type: "link",
                        },
                        {
                            path: `${process.env.PUBLIC_URL}/dashboard/user-dashboard`,
                            title: "Referrals",
                            type: "link",
                        },
                        {
                            path: `${process.env.PUBLIC_URL}/dashboard/user-dashboard`,
                            title: "Purchases",
                            type: "link",
                        },
                        {
                            path: `${process.env.PUBLIC_URL}/all-registration-plans`,
                            title: "All Registration Plans",
                            type: "link",
                        },
                    ],
                },
                {
                    title: "Others",
                    id: 0,
                    icon: "list",
                    type: "sub",
                    lanClass: "lan-3",
                    children: [
                        {
                            path: `${process.env.PUBLIC_URL}/confirm_password`,
                            title: "Confirm Password",
                            type: "link",
                        },
                    ],
                },
            ],
        },
    ],
];

const SearchInput = () => {
    const [selectedOption, setSelectedOption] = useState<string>("All");
    const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null);

    const { toggleSearchPopup } = useAppSelector((state) => state.layout);
    const dispatch = useAppDispatch();
    
    const handleToggleSearchPopup = () => {
        dispatch(setToggleSearchPopup(!toggleSearchPopup));
    };

    const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
    const [searchedWord, setSearchedWord] = useState<string>("");
    const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);
 
    useEffect(() => {
        const suggestionArray: SearchSuggestionItem[] = [];
        const getAllLink = (item: MenuItem, icon: string | undefined) => {
            if (item.children) {
                item.children.forEach((ele) => {
                    getAllLink(ele, icon);
                });
            } else {
                suggestionArray.push({
                    icon: icon,
                    title: item.title,
                    path: item.path || "",
                });
            }
        };
        AdditionalMenuList?.forEach((item) => {
            item.Items?.forEach((child) => {
                getAllLink(child, child.icon);
            });
        });
        setArr(suggestionArray);
    }, []);
    
    const location = useLocation();

    useEffect(() => {
        // Close the modal if the route changes
        if (toggleSearchPopup) {
            dispatch(setToggleSearchPopup(false));
        }
    }, [location.pathname]);

    useEffect(() => {
        // Focus input when modal opens
        if (toggleSearchPopup && inputElement) {
            inputElement.focus();
        }
    }, [toggleSearchPopup, inputElement]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchedWord(value);
        if (value.trim() === "") {
            setSearchedArray([]);
        } else {
            const result = arr.filter((item) =>
                item.title?.toLowerCase().includes(value.toLowerCase())
            );
            setSearchedArray(result);
        }
    };

    const hasResults = searchedArray.length > 0;

    return (
        <Col
            xxl="4"
            md="3"
            className="left-header col-auto box-col-6 horizontal-wrapper p-0">
            <div className="left-menu-header">
                <UL className="header-left simple-list">
                    <LI>
                        <div className="form-group w-100">
                            <div className="Typeahead Typeahead--twitterUsers">
                                <div
                                    className="u-posRelative d-flex"
                                    onClick={handleToggleSearchPopup}>
                                    <SVG
                                        className="search-bg svg-color me-2"
                                        iconId="fill-search"
                                    />
                                    <Input
                                        className="demo-input Typeahead-input form-control-plaintext w-100 p-0"
                                        type="text"
                                        placeholder={SearchCrocs}
                                        name="q"
                                        autoComplete="off"
                                        onChange={handleSearch}
                                    />
                                </div>
                            </div>
                        </div>
                    </LI>
                </UL>
            </div>

            <CommonModal
                isOpen={toggleSearchPopup}
                toggle={handleToggleSearchPopup}
                modalBodyClassName="p-0"
                size="lg">
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up p-3">
                    <div className="search-popup-header">
                        <H3 className="modal-header justify-content-center">
                            Search
                        </H3>
                        <div
                            onClick={handleToggleSearchPopup}
                            className="search-close-icon">
                            <X />
                        </div>
                    </div>
                    <Input
                        type="text"
                        placeholder={SearchCrocs}
                        name="q"
                        value={searchedWord}
                        onChange={handleSearch}
                        autoComplete="off"
                        innerRef={(ref) => setInputElement(ref)}
                    />
                    <Link
                        to={`${process.env.PUBLIC_URL}/saved-search`}
                        className="my-3 p-2 saved_serch d-flex gap-3 align-items-center">
                        <i className="bi bi-bookmark-star-fill" style={{width:'20px'}}/>
                        <H3 className=" ">Saved Search</H3>
                    </Link>
                    <SearchOptions
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />

                    {hasResults && (
                        <div
                            className="p-2"
                            style={{
                                border: "1px dotted gray",
                            }}>
                            <legend
                                className="text-sm"
                                style={{
                                    fontSize: "0.875rem", // Smaller font size for suggestions
                                }}
                            >
                                Suggestions
                            </legend>
                            <div className="suggestion_box">
                                <ResponsiveSearchList
                                    searchedArray={searchedArray}
                                    setSearchedWord={setSearchedWord}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </CommonModal>
        </Col>
    );
};

export default SearchInput;

