import { useEffect } from "react";
import Container from "./container";

export default function TextAnimation() {
  consoleText(
    ["content creators", "boostrappers", "B2B marketers"],
    "text",
    ["#4F46E5", "#6366F1", "#4338CA"]
  );

  function consoleText(words, id, colors) {
    useEffect(() => {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colors[0]);
            letterCount += x;
            waiting = false;
          }, 500);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 500);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 80);
      // window.setInterval(function () {
      //   if (visible === true) {
      //     con.className = "console-underscore hidden";
      //     visible = false;
      //   } else {
      //     con.className = "console-underscore";

      //     visible = true;
      //   }
      // }, 400);
    }, []);
  }

  return (
    <Container>
      <div className="h-2 relative text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
        <span id="text"></span>
        <div className="text-primary-color inline-block" id='console'>&#95;</div></div>
    </Container>
  );
}

function TextAminationTwo() {
  return (
    <>
      <div class="subheading en flex w-full text-primary-color text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
        <span class="tech-adj">content creators</span>
        <span class="tech-adj">boostrappers</span>
        <span class="tech-adj">and B2B marketers</span>
      </div>
    </>
  );
}

function TextAnimationThree() {
  return (
    <>
      <motion.h3
        className="text-primary-color"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,

            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        content creators,
      </motion.h3>
      <motion.h3
        className="text-primary-color"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.9,
            },
          },
        }}
      >
        boostrappers,
      </motion.h3>
      <motion.h3
        className="text-primary-color"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.5,
            },
          },
        }}
      >
        and B2B marketers
      </motion.h3>
    </>
  );
}
