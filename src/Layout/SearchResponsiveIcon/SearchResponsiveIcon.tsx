import { Search } from "react-feather";
import { useAppDispatch } from "../../ReduxToolkit/Hooks";
import { setToggleSearchPopup } from "../../ReduxToolkit/Reducers/LayoutSlice";

const SearchResponsiveIcon = () => {
  const dispatch = useAppDispatch();
  
  const handleToggleSearchPopup = () => {
    dispatch(setToggleSearchPopup({}));
  };

  return (
    <div onClick={handleToggleSearchPopup} className="responsive-search-icon">
      <Search />
    </div>
  );
};

export default SearchResponsiveIcon;
