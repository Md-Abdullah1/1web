import { Input } from "reactstrap";
import { SearchCrocs } from "../../../../utils/Constant";
import { ChangeEvent, useEffect, useState } from "react";
import { MenuItem, SearchSuggestionItem } from "../../../../Types/Layout/SidebarType";
import { LI, SVG } from "../../../../AbstractElements";
import SearchSuggestionList from "./SearchSuggestionList";
import { setResponsiveSearch } from "../../../../ReduxToolkit/Reducers/LayoutSlice";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { MenuList } from "../../../../Data/LayoutData/SidebarData";
import { getLinkItemsArray } from "../../../../ReduxToolkit/Reducers/BookmarkHeaderSlice";

export const AdditionalMenuList:MenuItem[] = [...MenuList ,... [{
  title:"1 Webbb",
  Items: [
    {
      id:34,
      title:"Account Setting",
      icon:"",
      type:"sub",
      active:false,
      children:[
        {
          title:"Personal Information",
          type:"link",
          path:`${process.env.PUBLIC_URL}/account-settings/personal-information`,
          menucontent:"You have the data base information tha we can remove the list and we must knoiw the information just get the data ."
        },
        {
          title:"My Resumes",
          type:"link",
          path:`${process.env.PUBLIC_URL}/account-settings/my-resumes`
        },
        {
          title:"Birth Date",
          type:"link",
          path:`${process.env.PUBLIC_URL}/account-settings/birthday-info`
        },
        {
          title:"Shpping Addresses",
          type:"link",
          path:`${process.env.PUBLIC_URL}/account-settings/shipping-addresses`
        },
        {
          title:"Password",
          type:"link",
          path:`${process.env.PUBLIC_URL}/account-settings/password`
        }          ,
        {
          title:"My Registration Plan",
          type:"link",
          path:`${process.env.PUBLIC_URL}/account-settings/my-registration-plan`
        }
      ]
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
  ]
}]];

const ResponsiveSearchInput = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const[open,setOpen] = useState(false)
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({ icon: icon, title: item.title, path: item.path ? item.path : '' , bookmarked: false, id: num });
      }
    };
    AdditionalMenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
    dispatch(getLinkItemsArray(suggestionArray));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    let result = arr.filter((item) =>item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };

  return (
    <>
      <LI onClick={()=>dispatch(setResponsiveSearch())} className="serchinput">
        <div className="searchbox" onClick={()=>setOpen(!open)}>
          <SVG iconId="fill-search"/>
        </div>
        <div className={`form-group search-form ${open ? "open" : ""}`}>
          <Input type="text" placeholder={SearchCrocs} name="q" onChange={(e) => handleSearch(e)} value={searchedWord} />
          <div className={`Typeahead-menu w-100 custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
            <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord}/>
          </div>
        </div>
      </LI> 
    </>
  );
};

export default ResponsiveSearchInput;
