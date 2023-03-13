import Mail from "./Icons/mail";
import Phone from "./Icons/phone";
import Social from "./Icons/social";

const Contactheader = () => {
  return (
    <div className="hidden md:flex h-8 bg-info text-white items-center overflow-x-hidden">
      <div className="container flex justify-between">
        <div>
          <Social />
        </div>
        <div className="flex items-center gap-x-9">
          <Mail />
          <Phone />
        </div>
      </div>
    </div>
  );
};

export default Contactheader;
