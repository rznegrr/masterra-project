const Membership = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <label className="text-xl text-gray-700 text-center mb-8 font-semibold">
          برای با خبر شدن از آخرین تخفیفات عضو شوید
        </label>
        <div className="m-auto">
          <input
            className="w-80 h-10 bg-gray-300/60 pr-3 outline-none"
            placeholder="ایمیل خود را وارد کنید"
            type="email"
          />
          <button className="mr-3 bg-Mgray text-white px-7 h-10 hover:bg-gray-500 transition duration-200">
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
