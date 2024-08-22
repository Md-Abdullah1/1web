const api = `${process.env.PUBLIC_URL}/api`;
export const base_api='https://1webbb.net/api/v1';


export const chatMemberApi = `${api}/chatMember.json`;
export const chatApi = `${api}/chats.json`;

export const GET_REGISTRATION_PLANS = `registration-list`;

export const GET_REGISTRATION_TYPES = `registration-types`;

export const GET_PLANS = `registration-pricing-list`;




//Auth APIs
export const GET_ASSISTANT_ACCOUNT = `assistant-accounts`;
export const SWITCH_ASSISTANT_ACCOUNT = `switch-assistant-account`;
export const LOGIN =`login`;
export const CHECK_USERNAME = `check-username`;
export const REGISTER_NEW_ACCOUNT =`register`;
export const VERIFY_2FA = `verify-2fa`;
export const RESEND_2FA_CODE = ``;
export const FORGET_PASSWORD = `forgot-password`;
export const RESET_PASSWORD = `reset-password`;

//delivery worker
export const DELIVERY_WORKER_LIST = `delivery-workers/list`;
export const DELIVERY_WORKER_SAVE =`delivery-workers/save`;
export const DELIVERY_WORKER_EDIT = `delivery-workers/edit`;
export const DELIVERY_WORKER_UPDATE = `delivery-workers/update`;
export const DELIVERY_WORKER_DELETE = `delivery-workers/delete`;

//Delivery Fee
export const DELIVERY_FEE_LIST = `delivery-fees/list`;
export const DELIVERY_FEE_SAVE = `delivery-fees/save`;
export const DELIVERY_FEE_EDIT = `delivery-fees/edit`;
export const DELIVERY_FEE_UPDATE = `delivery-fees/update`;
export const DELIVERY_FEE_DELETE= `delivery-fees/delete`;

//External Link
export const EXTERNAL_LINK_LIST = `external-links/list`;
export const EXTERNAL_LINK_SAVE = `external-links/save`;
export const EXTERNAL_LINK_EDIT= `external-links/edit`;
export const EXTERNAL_LINK_UPDATE= `external-links/update`;
export const EXTERNAL_LINK_DELETE = `external-links/delete`;
export const EXTERNAL_LINK_BULK_DELETE = `external-links/delete/bulk`;

//Addon Category
export const ADDON_CATEGORY_LIST = `addon-category/list`;
export const ADDON_CATEGORY_SAVE = `addon-category/save`;
export const ADDON_CATEGORY_BULK_SAVE = `addon-category/save/bulk`;
export const ADDON_CATEGORY_EDIT = `addon-category/edit/{id}`;
export const ADDON_CATEGORY_UPDATE = `addon-category/update/{id}`;
export const ADDON_CATEGORY_DELETE = `addon-category/delete/{id}`;

//COUPON
export const COUPON_LIST = `coupon/list`;
export const COUPON_SAVE = `coupon/save`;
export const COUPON_EDIT = `coupon/edit`;
export const COUPON_UPDATE = `coupon/update`;
export const COUPON_DELETE = `coupon/delete`;
export const COUPON_ALL_LIST = `coupon/list/all`;
export const COUPON_VIEW = `coupon/view`;

//MY Media Center
export const MY_MEDIA_CENTER_ABOUT = `about`;
export const MY_MEDIA_CENTER_IMAGES = `images`;
export const MY_MEDIA_CENTER_PENDING_IMAGES = `pending-images`;
export const MY_MEDIA_CENTER_MY_PHOTO_CONTEST = `my-photo-contests`;
export const MY_MEDIA_CENTER_FOLLOWERS = `followers`;
export const MY_MEDIA_CENTER_IFOLLOW = `i-follow`;
export const MY_MEDIA_CENTER_ILIKE = `i-like`;
export const MY_MEDIA_CENTER_MY_ALBUMS = `my-albums`;
export const MY_MEDIA_CENTER_MY_COLLECTIONS = `my-collections`;
export const MY_MEDIA_CENTER_I_DOWNLOADED = `i-downloaded`;
export const MY_MEDIA_CENTER_REVIEWS = `reviews`;
export const MY_MEDIA_CENTER_EXTERNAL_LINKS = `external-links`;
export const MY_MEDIA_CENTER_FROM_MY_MEDIA_MASTERS = `from-my-media-masters`;
export const MY_MEDIA_CENTER_MY_COUPONS = `my-coupons`;

//Admin- Advance setting
export const ADMIN_WEBSITE_SETTINGS_LIST = `website-settings`;
export const ADMIN_STATIC_PAGE = `static-page/1/who-use-cfotos`;
export const ADMIN_SEND_PUSH_NOTIFICATION_TO_ALL_USERS = `send-push-notification-to-all-users`;
export const ADMIN_SEND_PUSH_NOTIFICATION_TO_SELECTED_USERS = `send-push-notification-to-selected-users`;

//Admin - disregard search word
export const ADMIN_DISREGARD_SEARCH_WORDS = `disregard-search-words`;


//Admin-delivery setting
export const ADMIN_DELIVERY_SETTING_LIST = `delivery-settings`;

//Admin - location
export const GET_COUNTRY = `countries`;
export const GET_STATE_BY_COUNTRY = `states/101`;
export const CITIES = `cities`;

//Admin - Language-meta tags
export const META_TAGS_LIST= `meta-tags/list`;

//Admin - Language- translation
export const TRANSLATION_LIST = `languages`;

//USER 
export const FOLLOW_USER = `follow/user`;
export const REPORT_USER = `report/user`;
export const UPLOAD_AVATOR = `upload/avatar`;
export const UPLOAD_COVER = `upload/cover`;

//USER - Account setting
export const USER_PERSONAL_INFO = `account-settings/personal-info`;
export const USER_BIRTHDAY_INFO= `account-settings/birthday-info`;
export const USER_BIRTHDAY_INFO_UPDATE = `account-settings/birthday-info/update`;

//USER - Account setting - addresses
export const USER_ADDRESSES_LIST = `account-settings/address/list`;
export const USER_ADDRESSES_SAVE = `account-settings/address/store`;
export const USER_ADDRESSES_UPDATE = `account-settings/address/update`;
export const USER_ADDRESSES_DELETE = `account-settings/address/delete/9`;
export const USER_ADDRESSES_SET_DEFAULT = `account-settings/address/set-default/10`;

//USER - Account setting - addresses
export const USER_MY_RESUME = `account-settings/my-resume`;
export const USER_MY_RESUME_SAVE_UPDATE = `account-settings/my-resume/store`;
export const USER_MY_RESUME_GET_SINGLE = `account-settings/my-resume/3`;
export const USER_MY_RESUME_DELETE = `account-settings/my-resume/delete/2`;

//IMAGES - 
export const IMAGES_LIKES = `images/like`;

//IMAGES - Comments
export const IMAGES_COMMENTS_LIST = `images/comments/list`;
export const IMAGES_COMMENTS_SAVE = `images/comments/store`;
export const IMAGES_COMMENTS_LIKE = `images/comments/like`;
export const IMAGES_COMMENTS_DELETE = `images/comments/delete`;






