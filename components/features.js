import Image from "next/image";
import React from "react";
import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBriefcase, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <Container className="flex items-center justify-center">
      <div className="grid gap-10 grid-row-3 max-w-screen-md ">
        <h1 className="text-4xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
          How it works
        </h1>
        <Feature
          title="Upload a video with ease"
          desc="You can choose an existing video to upload, or directly record your own video from the browser."
          url="/"
          icon={faBolt}
        />
        <Feature
          title="Customize the video"
          desc="You can see a live demo when customizing your video. Changing
          the thumbnail, adding a CTA, collecting leads, you name it! More
          integrations coming soon..."
          url="/"
          icon={faSun}
        />
        <Feature
          title="Manage all videos in one place"
          desc="You will have a simple dashboard to manage all videos in one
          place."
          url="/"
          icon={faBriefcase}
        />
      </div>
    </Container>
  );
}

function Feature(props) {
  return (
    <div className=" h-full bg-gray-100  dark:bg-trueGray-800">
      <a
        href={props.url}
        className="flex flex-row px-10 py-7 hover:bg-gray-200 ring-transparent ring-2 focus:ring-primary-color dark:hover:bg-trueGray-600"
      >
        <div>
          <h1 className="text-xl font-bold mb-8">{props.title}</h1>
          <p className="text-lg leading-normal ">{props.desc}.</p>
        </div>
        <div className="flex items-center justify-center px-8 ">
          <div className="bg-white px-3 py-3 rounded-full">
            <FontAwesomeIcon
              icon={props.icon}
              size="2x"
              className="text-center text-primary-color"
            />
          </div>
        </div>
      </a>
    </div>
  );
}
