export interface SearchBarPropsType {
    setSearchTerm: (data: string) => void;
    searchTerm: string;
}

export interface SideButtonsType{
    className: string;
    icon: "Home" | "Folder" | "Clock" | "Star" | "AlertCircle" | "Trash";
    title: string;
}[]

  export interface MyFiles {
    icons: string;
    title: string;
    details: string;
    color: string;
}[]

export interface DataType{
    myFile:MyFiles[]
}

export interface FileProps{
    myFiles:MyFiles[]
}