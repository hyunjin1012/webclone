import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <div className="grid gap-10 items-center justify-center max-w-screen-md lg:grid-cols-2 ">
        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userOneImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              Check it out, the small video on <Mark>embed.so</Mark> feels so
              personable. Definitely adding one to{" "}
              <Mark>
                slip.so t.co/9otwitter.com/damengchen/<br></br>
                status/1371014967512625153
              </Mark>
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userTwoImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              <Mark>@damengchen </Mark>Yay for number 1 spot! So happy for you
              and well-deserved. Doing my embed on my site was a breeze. Being
              non-technical, I appreciate products that add so much techy flair
              with little stress. Thank you!
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userThreeImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              Just tried out <Mark>t.co/D62Yva5aom</Mark> by{" "}
              <Mark>@damengchen</Mark>, and it rocks! Great idea Damon! Love the
              live product demo on the homepage, showed me the value right away.
              Had to get the lifetime deal while its available 🚀
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userTwoImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              Check out <Mark>t.co/HblhYWtd7A</Mark> by <Mark>@damengchen</Mark>
              , it's a really cool tool to make your website special 😍
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userOneImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              Uploaded my first video on <Mark> embed.so</Mark>
              Thanks, <Mark>@damengchen</Mark> ! What a great idea!
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userTwoImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              I personally love anything video to make human interactions more
              personal and friendly, so this new product just sounds so cool to
              me! Check it out: <Mark>embed.so</Mark>
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userOneImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              <Mark> @damengchen </Mark>Thanks! I added{" "}
              <Mark>t.co/5SaGmdAJ8e </Mark>to mine as well, it's so convenient!
              Going to add it to my homepage, but I'm running out of corners 😅
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col justify-between w-full h-full p-8 rounded-2xl border-2 border-gray-300 dark:bg-trueGray-800">
            <div className="flex flex-row justify-between">
              <Avatar
                image={userThreeImg}
                name="Sarah Steiner"
                title="VP Sales at Google"
              />
              <a href="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="text-blue-500"
                />
              </a>
            </div>
            <p className="text-lg leading-normal mt-8">
              <Mark>@damengchen </Mark>Wow cool! We could do a Potion
              integration.
            </p>
            <div className="flex flex-row items-center mt-8 text-trueGray-500">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-1" />
              <span> 11</span>
              <a href="/" className="ml-3 hover:underline">
                Mar 14, 2021
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-row items-center justify-center text-trueGray-700 dark:text-trueGray-100">
      <span>Build your wall? 👉</span>
      <FontAwesomeIcon icon={faThumbsUp} size="2x" className="ml-3 text-white bg-primary-color p-2 rounded-full" />
      <span className="ml-2 text-xl font-bold">Testimonial</span>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-primary-color bg-secondary-color rounded-md ring-secondary-color ring-4 dark:ring-dark-secondary-color dark:bg-dark-secondary-color dark:text-dark-primary-color">
        {props.children}
      </mark>{" "}
    </>
  );
}
