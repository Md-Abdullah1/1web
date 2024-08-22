import { Input, Label } from "reactstrap";
import EmailNavTab from "./EmailNavTab";
import { Search } from "../../../../../../utils/Constant";
import RightDropDown from "./RightDropDown";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setSearchWord } from "../../../../../../ReduxToolkit/Reducers/LetterBoxSlice";

const EmailHeader = () => {
  const {searchWord} = useAppSelector((state)=>state.letterBox)
  const dispatch = useAppDispatch()
  return (
    <div className="mail-header-wrapper">
      <div className="mail-header">
        <div className="form-check form-check-inline m-0">
          <Input className="form-check-input checkbox-primary" id="emailCheckbox1" type="checkbox" defaultValue="option1"/>
          <Label className="form-check-label" for="emailCheckbox1" />
          <EmailNavTab />
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-search d-flex-align-items-center">
          <Input type="text" placeholder={Search} value={searchWord} onChange={(e)=>dispatch(setSearchWord(e.target.value))}/>
          <i className="fa fa-search" />
        </div>
        <div className="light-square">
          <i className="fa fa-refresh" />
        </div>
        <div className="light-square">
          <i className="fa fa-trash" />
        </div>
        <RightDropDown />
      </div>
    </div>
  );
};

export default EmailHeader;
