import BrandSlide from "./BrandsSlide";

const Brands = () => {
  return (
    <div>
      <div className="bg-info h-16 xs:28 sm:h-32 md:h-40 lg:h-72 flex">
        <div className="container">
          <BrandSlide />
        </div>
      </div>
    </div>
  );
};

export default Brands;
