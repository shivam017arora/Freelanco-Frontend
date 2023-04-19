import React from "react";

const Brands = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <span className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="h-10 w-full"
                />
              </span>
              <span className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png"
                  alt=""
                  className="h-10 w-full"
                />
              </span>
              <span className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                <img
                  src="https://binance.ghost.io/content/images/2022/12/telegram-cloud-photo-size-1-4924868338253933416-y.jpg"
                  alt=""
                  className="h-10 w-full"
                />
              </span>
              <span className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                <img
                  src="https://chainstack.com/wp-content/uploads/2021/12/Group-877-11.png"
                  alt=""
                  className="h-10 w-full"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
