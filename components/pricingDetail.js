import React from "react";

export default function PricingCard(props) {
  const { data } = props;
  return (
    <div className="h-full flex flex-col justify-between ">
      <div>
        <h2 className="text-lg font-bold">{data.title}</h2>
        <div className="flex flex-row items-center">
          <h1 className="text-4xl font-bold my-4">{data.desc}</h1>
          <span className="text-trueGray-500 ml-2">{data.billing}</span>
        </div>
        <div className="text-trueGray-500 dark:text-trueGray-100">
          {data.bullets.map((item, index) => (
            <PricingDetail
              key={index}
              title={item.title}
              icon={item.icon}
            ></PricingDetail>
          ))}
        </div>
      </div>
      <div>
        <Line />
        <button
          class="bg-primary-color text-white uppercase active:bg-indigo-700 font-bold text-sm w-full py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          {data.button}
        </button>
      </div>
    </div>
  );
}

function PricingDetail(props) {
  return (
    <>
      <div className="flex flex-row items-center my-4">
        <div className="mr-2">{React.cloneElement(props.icon)}</div>
        <div>
          <h2>{props.title}</h2>
        </div>
      </div>
    </>
  );
}

function Line() {
  return <div className="bg-trueGray-200 w-full pt-0.5 rounded my-5"></div>;
}
