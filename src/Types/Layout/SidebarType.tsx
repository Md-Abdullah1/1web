import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface HeaderTabContentType {
  tabs: string;
}

export interface SidebarMenuType {
  title: string;
  lanClass?: string;
  menucontent?: string;
  Items: SidebarItemType[];
}

export interface SidebarItemType {
  id?: number;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  path?: string;
  children?: SidebarChildrenType[];
  lanClass?: string;
}

export interface SidebarChildrenType {
  path?: string;
  title: string;
  type: string;
  lanClass?: string;
  children?: SubChildrenType[];
}

export interface SubChildrenType {
  title: string;
  type: string;
  path: string;
}

export interface MenuListType {
  menu?: MenuItem[];
  level: number;
  className?: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<string[]>>;
  activeMenu: string[];
  heading?: string;
}

export interface SidebarItemTypes {
  item: {
    id?: number;
    title?: string | undefined;
    icon?: string;
    type?: string;
    active?: boolean;
    path?: string;
    children?: SidebarChildrenType[];
    lanClass?: string;
  };
}

export interface MenuItem {
  title?: string;
  lanClass?: string;
  menucontent?: string;
  Items?: MenuItem[];
  id?: number;
  icon?: IconDefinition;
  iconbi?: any;
  type?: string;
  active?: boolean;
  children?: MenuItem[];
  path?: string;
  mainTitle?: string;
  HeadingDrop?:string;
  bookmark?: boolean;
  subtitle?: string; // Add subtitle property
  description?: string; // Add description property
}

export interface SearchSuggestionListType {
  searchedArray: SearchSuggestionItem[];
  setSearchedWord: (key: string) => void;
}

export interface SearchSuggestionItem {
  icon: string | undefined;
  title: string | undefined;
  path: string;
  bookmarked?: boolean;
  id?: number;
  menucontent?: string;
}

export interface EmptyClassType {
  searchIcon: boolean;
}

export interface BookmarkedDataType {
  icon?: string;
  path?: string;
  title?: string;
  color?: string;
  id?: number;
  bookmarked?: boolean;
}

export interface BookmarkSliceType {
  linkItemsArray: BookmarkedDataType[] | [];
  bookmarkedData: BookmarkedDataType[];
}
