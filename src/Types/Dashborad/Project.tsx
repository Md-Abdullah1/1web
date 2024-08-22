export interface TodayTaskTabType{
    setTabId: (key:string)=>void
    tabId?:string
}
export interface CommonTabContentTableType {
    value : number
}
export interface MobileAppDataType {
    svgIcon: string;
    title: string;
    email: string;
    color:string;
    clientDetails: {
        color?: string;
        title: string;
        date: string;
    }[];
    userDetail: string[];
    buttonName: string;
    btnColor?: string;
    class?: string;
}

export interface ClientBudgetPropsType {
    data : MobileAppDataType
}

export interface ProjectSummeryTableBodyType {
    projectName: string;
    projectType: string;
    teams: string[];
    startDate: string;
    location: string;
    status: string;
}

export interface ScrollImageType {
    image: string;
    title?: string;
  }

  export interface TableActionTypes {
    id: string;
  }