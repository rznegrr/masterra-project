import deliveryIcon from "./delivery-icon.png";
import giftIconIcon from "./gift-icon.png";
import returnIcon from "./return-icon.png";
import security from "./secure-icon.png"
import DescItem from "./DescItem";

const DescSection = () => {
  return (
    <div>
      <div className="flex h-20 md:h-40 bg-info mt-10 overflow-hidden items-center">
        <div className="w-full grid grid-cols-12">
            <DescItem photo={returnIcon} desc={"گارانتی بازگشت وجه"} />
            <DescItem photo={giftIconIcon} desc={"هدیه اولین خرید"} />
            <DescItem photo={deliveryIcon} desc={"تحویل سریع"} />
            <DescItem photo={security} desc={"تضمین امنیت کالا"} />
        </div>
      </div>
    </div>
  );
};

export default DescSection;
