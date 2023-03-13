import classes from "./Footer.module.css";
import CopyRight from "../UI/CopyRight";
import Social from "../UI/Icons/social";

const Footer = () => {
  return (
    <div>
      <div className={`lg:h-[33rem] bg-info px-2 sm:px-10`}>
        <div className="flex flex-col justify-center items-center pt-5 md:pt-10">
          <p className="text-lg sm:text-3xl text-[#ebebeb]">فروشگاه لوازم خانگی مسترا</p>
          <span className="w-full border-b-2 border-gray-100/20 pt-5 md:mt-10"></span>
        </div>
        <div className={`grid grid-cols-12 lg:pt-10 py-7 xl:px-20 ${classes.footer}`}>
          <div className="col-span-6 lg:col-span-3 flex flex-col xl:mr-20 gap-y-4 text-[#ebebeb]">
            <h2>اطلاعات تماس</h2>
            <span className="w-10 border-b-2 border-gray-300 my-3"></span>
            <p className="text-[12px] sm:text-[16px] w-32 sm:w-72 lg:w-60 leading-relaxed">
              تهران , خیابان ری , سرای امین حضور ,
              پاساژ خلیج فارس
            </p>
            <div className="sm:my-2">
              <Social />
            </div>
            <div className="text-[12px] sm:text-[16px]">
              <p>تلفن تماس : 12345-021</p>
              <p>ایمیل : sales@storename.com</p>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3 flex flex-col xl:mr-24 gap-y-4">
            <h2>
              حساب کاربری
            </h2>
            <span className="w-10 border-b-2 border-gray-300 my-2"></span>
            <a>پروفایل</a>
            <a>محصولات خریداری شده</a>
            <a>پیگیری سفارش</a>
            <a>اطلاعات حساب کاربری</a>
            <a>تغییر یا فراموشی رمز عبور</a>
          </div>
          <div className="col-span-6 lg:col-span-3 flex flex-col mt-10 lg:mt-0 xl:mr-24 gap-y-4">
            <h2>
              خدمات مشتریان
            </h2>
            <span className="w-10 border-b-2 border-gray-300 my-2"></span>
            <a>سوالات متداول</a>
            <a>شیوه های پرداخت</a>
            <a>گزارش تخلف</a>
            <a>رویه بازگرداندن کالا</a>
            <a>حریم خصوصی</a>
          </div>
          <div className="flex flex-col col-span-6 lg:col-span-3 mt-10 lg:mt-0 xl:mr-24 gap-y-4">
            <h2>
              با مسترا
            </h2>
            <span className="w-10 border-b-2 border-gray-300 my-2"></span>
            <a>راهنمای خرید از مسترا</a>
            <a>قوانین و شرایط مسترا</a>
            <a>فروش در مسترا</a>
            <a>تماس با ما</a>
            <a>درباره ما</a>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 h-44 bg-gray-300/60">
        <div className="col-span-3 flex items-center w-72 p-5 mr-20">
          <SiteLogo />
        </div>
        <div className="col-span-6 flex items-center justify-center">
          <Membership />
        </div>
        <div className="col-span-3 flex items-center">
          <div className="flex justify-center py-8 gap-x-4 mr-10">
            <img
              className="w-[100px] h-[110px] border p-3 border-1 border-gray-300 rounded-md"
              src={kasbokar}
              alt="kasbokar"
            />
            <img
              className="w-[110px] h-[110px] border p-3 border-1 border-gray-300 rounded-md"
              src={rezi}
              alt="rezi"
            />
          </div>
        </div>
      </div> */}
      <CopyRight />
    </div>
  );
};

export default Footer;
