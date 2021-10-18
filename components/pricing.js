import React from "react";
import Container from "./container";
import PricingCard from "./pricingDetail";
import {
  PricingFive,
  PricingFour,
  PricingOne,
  PricingThree,
  PricingTwo,
} from "./data";

export default function Pricing() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <Container className="flex flex-col items-center justify-center max-w-4xl">
      <h1 className="mt-8 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
        Grow your business{" "}
        <span className="bg-secondary-color rounded-md ring-secondary-color ring-4 dark:ring-dark-secondary-color dark:bg-dark-secondary-color ">
          with videos
        </span>
      </h1>
      <p className="py-5 text-xl leading-normal text-gray-500 max-w-4xl lg:text-xl xl:text-2xl dark:text-gray-300">
        Try it out with our Starter plan with 1 video for free, and then upgrade
        to our paid plan if you need more videos.
      </p>
      <div className="flex items-center justify-center mx-8 mt-8 mb-4">
        <div>
          <ul
            className="flex mb-0 list-none pt-3 pb-4 flex-row items-center justify-center"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-primary-color"
                    : "text-primary-color bg-white dark:bg-trueGray-800")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Bill Yearly <span className="text-green-400"> -35%</span>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-primary-color"
                    : "text-primary-color bg-white dark:bg-trueGray-800")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Bill Monthly
              </a>
            </li>
          </ul>
          <div>
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="flex flex-col px-4 py-5 max-w-4xl break-words w-full mb-6 tab-content tab-space md:flex-row">
                <div className="m-1 p-5 shadow-lg rounded dark:bg-trueGray-800">
                  <PricingCard data={PricingOne} />
                </div>
                <div className="m-1 p-5 shadow-lg rounded bg-secondary-color border-2 border-primary-color dark:bg-trueGray-700">
                  <PricingCard data={PricingTwo} />
                </div>
                <div className="m-1 p-5 shadow-lg rounded dark:bg-trueGray-800">
                  <PricingCard data={PricingThree} />
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <div className="flex flex-col px-4 py-5 max-w-4xl break-words w-full mb-6 tab-content tab-space md:flex-row">
              <div className="m-1 p-5 shadow-lg rounded dark:bg-trueGray-800">
                  <PricingCard data={PricingOne} />
                </div>
                <div className="m-1 p-5 shadow-lg rounded bg-secondary-color border-2 border-primary-color dark:bg-trueGray-700">
                  <PricingCard data={PricingFour} />
                </div>
                <div className="m-1 p-5 shadow-lg rounded dark:bg-trueGray-800">
                  <PricingCard data={PricingFive} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-trueGray-700 dark:text-trueGray-100">
        Need more than 10 videos, custom features and priority support?{" "}
        <a
          href="/"
          className="text-primary-color font-bold hover:bg-secondary-color hover:ring-2 hover:ring-secondary-color hover:rounded"
        >
          Contact us!
        </a>
      </p>
      <Line />
    </Container>
  );
}

function Line() {
  return <div className="bg-trueGray-200 w-full pt-0.5 rounded my-5"></div>;
}
