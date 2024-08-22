import Bookmark from "../Pages/Application/Bookmark/Bookmark";
import Calender from "../Pages/Application/Calender/Calender";
import GroupChat from "../Pages/Application/Chat/GroupChat/GroupChat";
import Contacts from "../Pages/Application/Contacts/Contacts";
import AddProduct from "../Pages/Application/Ecommerce/AddProduct/AddProduct";
// import Cart from "../Pages/Application/Ecommerce/Cart/Cart";
import Checkout from "../Pages/Application/Ecommerce/Checkout/Checkout";
import InvoiceOne from "../Pages/Application/Ecommerce/Invoices/Invoice-1/Invoice-1";
import InvoiceTwo from "../Pages/Application/Ecommerce/Invoices/Invoice-2/Invoice-2";
import InvoiceThree from "../Pages/Application/Ecommerce/Invoices/Invoice-3/Invoice-3";
import InvoiceFour from "../Pages/Application/Ecommerce/Invoices/Invoice-4/Invoice-4";
import InvoiceFive from "../Pages/Application/Ecommerce/Invoices/Invoice-5/Invoice-5";
import InvoiceSix from "../Pages/Application/Ecommerce/Invoices/Invoice-6/Invoice-6";
import OrderHistory from "../Pages/Application/Ecommerce/OrderHistory/OrderHistory";
import PaymentDetails from "../Pages/Application/Ecommerce/PaymentDetails/PaymentDetails";
import ProductList from "../Pages/Application/Ecommerce/ProductList/ProductList";
import ProductPage from "../Pages/Application/Ecommerce/ProductPage/ProductPage";
import Products from "../Pages/Application/Ecommerce/Products/Products";
import WishList from "../Pages/Application/Ecommerce/WishList/WishList";
import LetterBox from "../Pages/Miscellaneous/Communication/LetterBox/LetterBox";
import FileManager from "../Pages/Application/FileManager/FileManager";
import Marketplace from "../Pages/Application/Marketplace/Marketplace";
import ProjectCreate from "../Pages/Application/Project/ProjectCreate/ProjectCreate";
import ProjectList from "../Pages/Application/Project/ProjectList/ProjectList";
import SocialApp from "../Pages/Application/SocialApp/SocialApp";
import Tasks from "../Pages/Application/Tasks/Tasks";
import Todo from "../Pages/Application/Todo/Todo";
import GoogleChart from "../Pages/Charts/GoogleChart/GoogleChart";
import Default from "../Pages/Dashboard/Default/Default";
import AddPost from "../Pages/Miscellaneous/Communication/AddPost/AddPost";
import GalleryGridDesc from "../Pages/Miscellaneous/Gallery/GalleryGridDesc/GalleryGridDesc";
import MasonryImageDesc from "../Pages/Miscellaneous/Gallery/MasonryImageDesc/MasonryImageDesc"; 
import JobDetails from "../Pages/Miscellaneous/JobSearch/JobDetails/JobDetails"; 
import DetailsCourse from "../Pages/Miscellaneous/Learning/DetailsCourse/DetailsCourse";
import LearningList from "../Pages/Miscellaneous/Learning/LearningList/LearningList";
import SupportTicket from "../Pages/Miscellaneous/SupportTicket/SupportTicket";
import TwoFactor from "../Pages/Forms/FormsLayout/TwoFactor/TwoFactor";

//New Pages
import AddBranchPublicContact from "../Pages/Tools/ManageOnlineStore/ManageBranches/BranchPublicContact/AddBranchPublicContact";
import AddManageBranch from "../Pages/Tools/ManageOnlineStore/ManageBranches/AddManageBranch";
import PrivateCChat from "../Pages/Miscellaneous/Communication/GroupChat/PrivateCChat";
// import Tour from "../Pages/BonusUi/Tour/Tour";
import AddManageMyAlbums from "../Pages/Tools/ManageContents/ManageMyAlbums/AddManageMyAlbums";
import AddAddonCategories from "../Pages/Tools/ManageOnlineStore/AddonCategories/AddAddonCategories";
import AddCoupon from "../Pages/Tools/ManageOnlineStore/ManageMyCoupons/AddCoupon";
import AddDeliveryFees from "../Pages/Tools/ManageOnlineStore/DeliveryFees/AddDeliveryFees";
import AddDeliveryWorkers from "../Pages/Tools/ManageOnlineStore/DeliveryWorkers/AddDeliveryWorkers";
import Contact from "../Pages/Contacts/Contact";
import MyResumes from "../Pages/App/AccountSettings/MyResumes";
import MyResumesAddNew from "../Pages/App/AccountSettings/MyResumesAddNew";
import ShippingAndDeliveryAddresses from "../Pages/App/AccountSettings/ShippingAndDeliveryAddresses";
import ShippingAddressAddNew from "../Pages/App/AccountSettings/ShippingAddressAddNew";
import PersonalInformation from "../Pages/App/AccountSettings/PersonalInformation";
import BirthDateInformation from "../Pages/App/AccountSettings/BirthDateInformation";
import Password from "../Pages/App/AccountSettings/Password";
import MyRegistrationPlan from "../Pages/App/AccountSettings/MyRegistrationPlan";
import ManageExternalLink from "../Pages/Tools/BrandSupportTools/ManageMyExternalLinks/ManageExternalLink";
import ManageMyPhotoContests from "../Pages/Tools/BrandSupportTools/ManageMyPhotoContest/ManageMyPhotoContests";
import SurveyQuizes from "../Pages/Tools/BrandSupportTools/SurveyAndQuizzes/SurveyQuizes";
import AddManageMyExternalLink from "../Pages/Tools/BrandSupportTools/ManageMyExternalLinks/AddManageMyExternalLink";
import AddManageMyPhotoContest from "../Pages/Tools/BrandSupportTools/ManageMyPhotoContest/AddManageMyPhotoContest";
import AddStudyMaterialLesson from "../Pages/Tools/BrandSupportTools/StudyMaterialLesson/AddStudyMaterialLesson";
import AddQuizMaterial from "../Pages/Tools/BrandSupportTools/QuizMaterial/AddQuizMaterial";
import AddQuestions from "../Pages/Tools/BrandSupportTools/Questions/AddQuestions";
import AddSurveyAndQuizzes from "../Pages/Tools/BrandSupportTools/SurveyAndQuizzes/AddSurveryAndQuizzes";
import AddSpecialParameters from "../Pages/Tools/BrandSupportTools/SpecialParameters/AddSpecialParameters";
import About from "../Pages/App/MyMediaCenter/About/About";
import MyCoupons from "../Pages/App/MyMediaCenter/MyCoupons/MyCoupons";
import Photos from "../Pages/App/MyMediaCenter/Photos/Photos";
import PendingPhotos from "../Pages/App/MyMediaCenter/PendingPhotos/PendingPhotos";
import ActivitiesAndMeetings from "../Pages/App/MyMediaCenter/ActivitiesAndMeetings/ActivitiesAndMeetings";
import QuizzesAndSurverys from "../Pages/App/MyMediaCenter/QuizzesAndSurverys/QuizzesAndSurverys";
import Followers from "../Pages/App/MyMediaCenter/Followers/Followers";
import IFollow from "../Pages/App/MyMediaCenter/IFollow/IFollow";
import Likes from "../Pages/App/MyMediaCenter/Likes/Likes";
import Albums from "../Pages/App/MyMediaCenter/Albums/Albums";
import PhotoContests from "../Pages/App/MyMediaCenter/PhotoContests/PhotoContests";
import Reviews from "../Pages/App/MyMediaCenter/Reviews/Reviews";
import IDownloaded from "../Pages/App/MyMediaCenter/IDownloaded/IDownloaded";
import Collections from "../Pages/App/MyMediaCenter/Collections/Collections";
import ReviewsAboutMe from "../Pages/App/MyMediaCenter/Reviews/ReviewsAboutMe";
import ExternalLinks from "../Pages/App/MyMediaCenter/ExternalLinks/ExternalLinks";
import FromMyMediaMasters from "../Pages/App/MyMediaCenter/FromMyMediaMasters/FromMyMediaMasters";
import ReConfirmPassword from "../Pages/App/ConfirmPassword/ReConfirmPassword";
import Pricing from "../Pages/Pricing/Pricing";
import Contests from "../Pages/App/Contests/Contests";
import Coupons from "../Pages/App/Coupons/Coupons";
import Media from "../Pages/App/Media/Media";
import AddStartCChat from "../Pages/Communication/PrivateAndPublic/AddStartCChat";
import StudyMaterialLessions from "../Pages/Tools/BrandSupportTools/StudyMaterialLesson/StudyMaterialLessions";
import QuizMaterials from "../Pages/Tools/BrandSupportTools/QuizMaterial/QuizMaterials";
import SpecialParameters from "../Pages/Tools/BrandSupportTools/SpecialParameters/SpecialParameters";
import Questions from "../Pages/Tools/BrandSupportTools/Questions/Questions";
import MyUploadedContent from "../Pages/Tools/ManageContents/MyUpdatedContent/MyUploadedContent";
import ManageMyCollections from "../Pages/Tools/ManageContents/ManageMyCollections/ManageMyCollections";
import ManageMyAlbums from "../Pages/Tools/ManageContents/ManageMyAlbums/ManageMyAlbums";
import TrashPhotos from "../Pages/Tools/ManageContents/TrashPhotos/TrashPhotos";
import AddonCategories from "../Pages/Tools/ManageOnlineStore/AddonCategories/AddonCategories";
import ManageMyCoupons from "../Pages/Tools/ManageOnlineStore/ManageMyCoupons/ManageMyCoupons";
import DeliveryFees from "../Pages/Tools/ManageOnlineStore/DeliveryFees/DeliveryFees";
import DeliveryWorkers from "../Pages/Tools/ManageOnlineStore/DeliveryWorkers/DeliveryWorkers";
import ManageBranches from "../Pages/Tools/ManageOnlineStore/ManageBranches/ManageBranches";
import BranchPublicContact from "../Pages/Tools/ManageOnlineStore/ManageBranches/BranchPublicContact/BranchPublicContact";
import AddSchedule from "../Pages/Tools/ManageOnlineStore/ManageBranches/Schedules/AddSchedule";
import Schedules from "../Pages/Tools/ManageOnlineStore/ManageBranches/Schedules/Schedules";
import ManageProductServices from "../Pages/Tools/ManageOnlineStore/ManageBranches/ManageProductServices/ManageProductServices";
import ManageContentofProductServices from "../Pages/Tools/ManageOnlineStore/ManageBranches/ManageContentofProductServices/ManageContentofProductServices";
import MyReferrals from "../Pages/Application/Users/MyReferrals";
import Withdrawls from "../Pages/Application/Users/Withdrawls";
import WithdrawlConfigure from "../Pages/Application/Users/WithdrawlConfigure";
import EditRegistrationPlan from "../Pages/EditRegistrationPlan/EditRegistrationPlan";
import ReadyTemplates from "../Pages/Application/Templates/ReadyTemplates";
import EventActivites from "../Pages/App/Post/EventsActivites/EvenetActivites";
import JobOpnings from "../Pages/App/Post/JobOpenings/JobOpnings";
import AccountList from "../Pages/Application/AccountList/AccountList";
import QRCodePopup from "../Pages/Application/QRCode/QRCodePopup";
import Upload from "../Pages/App/Upload/Upload";  
import MarketplaceChat from "../Pages/Miscellaneous/Communication/MarketplaceChat/MarketplaceChat";
import ApplicationChat from "../Pages/Miscellaneous/Communication/ApplicationChat/ApplicationChat";
import ProjectEventChat from "../Pages/Miscellaneous/Communication/ProjectEventChat/ProjectEventChat";
import ManageAttendanceSystem from "../Pages/Tools/BrandSupportTools/ManageAttendance/ManageAttendanceSystem";
import AttendanceSystem from "../Pages/Tools/BrandSupportTools/ManageAttendance/AttendanceSystem";
import KnowledgeSystem from "../Pages/Tools/BrandSupportTools/KnowledgeSystem/KnowledgeSystem";

export const routes = [
  // dashboard
  {
    path: `${process.env.PUBLIC_URL}/dashboard/user-dashboard`,
    Component: <Default />,
  },
  // Applications
  {
    path: `${process.env.PUBLIC_URL}/app/filemanager`,
    Component: <FileManager />,
  },
  {
    path: `${process.env.PUBLIC_URL}/email/letterbox`,
    Component: <LetterBox />,
  },
  {
    path: `${process.env.PUBLIC_URL}/chat/groupchat`,
    Component: <GroupChat />,
  },
  { path: `${process.env.PUBLIC_URL}/app/contacts`, Component: <Contacts /> },
  { path: `${process.env.PUBLIC_URL}/app/socialapp`, Component: <SocialApp /> },

  { path: `${process.env.PUBLIC_URL}/saved-search`, Component: <Bookmark /> },
  // {
  //   path: `${process.env.PUBLIC_URL}/search-results-screen`,
  //   Component: <SearchResult />,
  // },

  // Coupons
  // { path: `${process.env.PUBLIC_URL}/bonusui/tour`, Component: <Tour /> },

  //Marketplace
  {
    path: `${process.env.PUBLIC_URL}/services-and-products`,
    Component: <Marketplace />,
  },
  // {
  //   path: `${process.env.PUBLIC_URL}/marketplace/shopping-cart`,
  //   Component: <Cart />,
  // },
  {
    path: `${process.env.PUBLIC_URL}/marketplace/checkout`,
    Component: <Checkout />,
  },
  {
    path: `${process.env.PUBLIC_URL}/marketplace/view`,
    Component: <ProductPage />,
  },

  // Ecommerce
  {
    path: `${process.env.PUBLIC_URL}/ecommerce/addproduct`,
    Component: <AddProduct />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce/products`,
    Component: <Products />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce/productpage`,
    Component: <ProductPage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce/productlist`,
    Component: <ProductList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/user-dashboard/payment-methods/add-new`,
    Component: <PaymentDetails />,
  },
  {
    path: `${process.env.PUBLIC_URL}/user-dashboard/my-purchases`,
    Component: <OrderHistory />,
  },
  // { path: `${process.env.PUBLIC_URL}/ecommerce/cart`, Component: <Cart /> },
  {
    path: `${process.env.PUBLIC_URL}/ecommerce/checkout`,
    Component: <Checkout />,
  },

  // Charts
  {
    path: `${process.env.PUBLIC_URL}/charts/googlechart`,
    Component: <GoogleChart />,
  },

  // Gallery
  {
    path: `${process.env.PUBLIC_URL}/gallery/gallerygriddesc`,
    Component: <GalleryGridDesc />,
  },
  {
    path: `${process.env.PUBLIC_URL}/gallery/masonrywithdesc`,
    Component: <MasonryImageDesc />,
  },
// Post
{
  path: `${process.env.PUBLIC_URL}/post/events-and-activities`,
  Component: <EventActivites />,
},
{
  path: `${process.env.PUBLIC_URL}/post/job-opnings`,
  Component: <JobOpnings />,
},
  // Job Search
  {
    // path: `${process.env.PUBLIC_URL}/jobsearch/cardview`,
    // Component: <CardView />,
  },
  // {
  //   path: `${process.env.PUBLIC_URL}/jobsearch/listview`,
  //   Component: <ListView />,
  // },
  {
    path: `${process.env.PUBLIC_URL}/jobsearch/jobdetail`,
    Component: <JobDetails />,
  },

  // forms
  {
    path: `${process.env.PUBLIC_URL}/forms/formslayout/twofactor`,
    Component: <TwoFactor />,
  },

  // Communication
  {
    path: `${process.env.PUBLIC_URL}/communication/private-classified-chat`,
    Component: <PrivateCChat />,
  },
  {
    path: `${process.env.PUBLIC_URL}/communication/start-classified-chat`,
    Component: <AddPost />,
  },
  {
    path: `${process.env.PUBLIC_URL}/communication/message-threads-inbox`,
    Component: <LetterBox />,
  },
  {
    path: `${process.env.PUBLIC_URL}/communication/marketplace-classified-chat`,
    Component: <MarketplaceChat />,
  },
  {
    path: `${process.env.PUBLIC_URL}/communication/applications-classified-chat`,
    Component: <ApplicationChat />,
  },
  {
    path: `${process.env.PUBLIC_URL}/communication/events-and-projects-classified-chat`,
    Component: <ProjectEventChat />,
  },
  {
    path: `${process.env.PUBLIC_URL}/communication/marketplace-classified-chat`,
    Component: <MarketplaceChat />,
  },
  {
    path: `${process.env.PUBLIC_URL}/communication/contacts`,
    Component: <Contacts />,
  },

  //Manage Store
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-store/product-and-service-list`,
    Component: <ProductList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-store/product-and-service-list/add-new`,
    Component: <AddProduct />,
  },

  //Tools
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support/invoice-1`,
    Component: <InvoiceOne />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support/invoice-2`,
    Component: <InvoiceTwo />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support/invoice-3`,
    Component: <InvoiceThree />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support/invoice-4`,
    Component: <InvoiceFour />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support/invoice-5`,
    Component: <InvoiceFive />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support/invoice-6`,
    Component: <InvoiceSix />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/quiz-and-survey-system`,
    Component: <LearningList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/survey-and-quizzes-list/view`,
    Component: <DetailsCourse />,
  },

  // SupportTicket
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/support-ticket-system`,
    Component: <SupportTicket />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list`,
    Component: <ProjectList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list/new-project`,
    Component: <ProjectCreate />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list/task-list`,
    Component: <Tasks />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list/to-do-list`,
    Component: <Todo />,
  },
//  Atttendance system
{
  path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/attendance-system/add-new-activity`,
    Component: <AttendanceSystem/>,
},


  //My Media
  {
    path: `${process.env.PUBLIC_URL}/about`,
    Component: <About />,
  },
  {
    path: `${process.env.PUBLIC_URL}/my-coupons`,
    Component: <MyCoupons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/photos`,
    Component: <Photos />,
  },
  {
    path: `${process.env.PUBLIC_URL}/pending-photos`,
    Component: <PendingPhotos />,
  },
  {
    path: `${process.env.PUBLIC_URL}/activities-meetings`,
    Component: <ActivitiesAndMeetings />,
  },
  {
    path: `${process.env.PUBLIC_URL}/quizzes-surveys`,
    Component: <QuizzesAndSurverys />,
  },
  {
    path: `${process.env.PUBLIC_URL}/followers`,
    Component: <Followers />,
  },
  {
    path: `${process.env.PUBLIC_URL}/i-follow`,
    Component: <IFollow />,
  },
  {
    path: `${process.env.PUBLIC_URL}/likes`,
    Component: <Likes />,
  },
  {
    path: `${process.env.PUBLIC_URL}/albums`,
    Component: <Albums />,
  },
  {
    path: `${process.env.PUBLIC_URL}/my-photo-contests`,
    Component: <PhotoContests />,
  },
  {
    path: `${process.env.PUBLIC_URL}/collections`,
    Component: <Collections />,
  },
  {
    path: `${process.env.PUBLIC_URL}/i-downloaded`,
    Component: <IDownloaded />,
  },
  {
    path: `${process.env.PUBLIC_URL}/reviews`,
    Component: <Reviews />,
  },
  {
    path: `${process.env.PUBLIC_URL}/i-downloaded`,
    Component: <IDownloaded />,
  },
  {
    path: `${process.env.PUBLIC_URL}/reviews-about-me`,
    Component: <ReviewsAboutMe />,
  },
  {
    path: `${process.env.PUBLIC_URL}/external-links`,
    Component: <ExternalLinks />,
  },
  {
    path: `${process.env.PUBLIC_URL}/from-my-media-masters`,
    Component: <FromMyMediaMasters />,
  },
  {
    path: `${process.env.PUBLIC_URL}/media-center/customers-wish-list`,
    Component: <WishList />,
  },
  {
    path: `${process.env.PUBLIC_URL}/my-media-center/calendar`,
    Component: <Calender />,
  },

  //Account Settings
  {
    path: `${process.env.PUBLIC_URL}/account-settings/my-resumes`,
    Component: <MyResumes />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account-settings/my-resumes/add-new`,
    Component: <MyResumesAddNew />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account-settings/shipping-addresses`,
    Component: <ShippingAndDeliveryAddresses />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account-settings/shipping-addresses/add-new`,
    Component: <ShippingAddressAddNew />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account-settings/personal-information`,
    Component: <PersonalInformation />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account-settings/birthday-info`,
    Component: <BirthDateInformation />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account-settings/password`,
    Component: <Password />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account-settings/my-registration-plan`,
    Component: <MyRegistrationPlan />,
  },
  {
    path: `${process.env.PUBLIC_URL}/registration-plan-edit`,
    Component: <EditRegistrationPlan />,
  },

  //Manage Online Store link
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches/schedules/add-new`,
    Component: <AddSchedule />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches/branch-public-contacts/add-new`,
    Component: <AddBranchPublicContact />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches/branch-public-contacts`,
    Component: <BranchPublicContact />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches/add-new`,
    Component: <AddManageBranch />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches`,
    Component: <ManageBranches />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches/schedules/add-new`,
    Component: <AddSchedule />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches/schedules`,
    Component: <Schedules />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-external-links`,
    Component: <ManageExternalLink />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/knowledge`,
    Component: <KnowledgeSystem />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-external-links/add-new`,
    Component: <AddManageMyExternalLink />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-photo-contests`,
    Component: <ManageMyPhotoContests />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-photo-contests/add-new`,
    Component: <AddManageMyPhotoContest />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/lessons/add-new`,
    Component: <AddStudyMaterialLesson />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/lessons`,
    Component: <StudyMaterialLessions />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/quiz-materials/add-new`,
    Component: <AddQuizMaterial />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/quiz-materials`,
    Component: <QuizMaterials />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/questions/add-new`,
    Component: <AddQuestions />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/questions`,
    Component: <Questions />,
  },
  {
    path: `${process.env.PUBLIC_URL}`,
    Component: <AddSurveyAndQuizzes />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/survey-and-quizzes`,
    Component: <SurveyQuizes />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/special-parameters/add-new`,
    Component: <AddSpecialParameters />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/special-parameters`,
    Component: <SpecialParameters />,
  },
  //ready templates
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support/ready-templates`,
    Component: <ReadyTemplates />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-contents/manage-my-albums/add-new`,
    Component: <AddManageMyAlbums />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/addon-categories/add-new`,
    Component: <AddAddonCategories />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/addon-categories`,
    Component: <AddonCategories />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-my-coupons/add-new`,
    Component: <AddCoupon />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-my-coupons`,
    Component: <ManageMyCoupons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/delivery-fees/add-new`,
    Component: <AddDeliveryFees />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/delivery-fees`,
    Component: <DeliveryFees />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/delivery-workers/add-new`,
    Component: <AddDeliveryWorkers />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/delivery-workers`,
    Component: <DeliveryWorkers />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-products-and-services`,
    Component: <ManageProductServices />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-contents-of-products-and-services`,
    Component: <ManageContentofProductServices />,
  },
  { path: `${process.env.PUBLIC_URL}/contact`, Component: <Contact /> },
  {
    path: `${process.env.PUBLIC_URL}/communication/private-and-public-messages-offers-job-ads/add-new`,
    Component: <AddStartCChat />,
  },

  {
    path: `${process.env.PUBLIC_URL}/tools/manage-contents/my-uploaded-contents`,
    Component: <MyUploadedContent />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-contents/manage-my-collections`,
    Component: <ManageMyCollections />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/manage-contents/manage-my-albums`,
    Component: <ManageMyAlbums />,
  },
  {
    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/attendance-system`,
    Component: <ManageAttendanceSystem />,
  },
  {
    path: `${process.env.PUBLIC_URL}/photos/trash`,
    Component: <TrashPhotos />,
  },

  //User wallet & referrals
  {
    path: `${process.env.PUBLIC_URL}/dashboard/referrals`,
    Component: <MyReferrals />,
  },
  {
    path: `${process.env.PUBLIC_URL}/dashboard/withdrawals`,
    Component: <Withdrawls />,
  },
  {
    path: `${process.env.PUBLIC_URL}/dashboard/my-sales`,
    Component: <MyReferrals />,
  },
  {
    // path: `${process.env.PUBLIC_URL}/wallet/withdrawals/configure`,
    Component: <WithdrawlConfigure />,
  },
  {
    // path: `${process.env.PUBLIC_URL}/wallet/my-purchases`,
    Component: <MyReferrals />,
  },
 

  // Confirm password   
  {
    path: `${process.env.PUBLIC_URL}/confirm_password`,
    Component: <ReConfirmPassword />,
  },

  // Others
  {
    path: `${process.env.PUBLIC_URL}/all-registration-plans`,
    Component: <Pricing />,
  },
  {
    path: `${process.env.PUBLIC_URL}/contests`,
    Component: <Contests />,
  },
  {
    path: `${process.env.PUBLIC_URL}/coupons`,
    Component: <Coupons />,
  },
  {
    path: `${process.env.PUBLIC_URL}/see-all-contents`,
    Component: <Media />,
  },
  {
    path: `${process.env.PUBLIC_URL}/upload-photo-album`,
    Component: <Upload />,
  },


  
// Assistant user
{
  path: `${process.env.PUBLIC_URL}/account-list`,
  Component: <AccountList />,
},

//QR Code
{
  path: `${process.env.PUBLIC_URL}/qr-code-popup`,
  Component: <QRCodePopup />,
},

];
