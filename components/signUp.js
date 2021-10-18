import React from "react";

export default function SignUp() {
  const SignUpButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className="text-center bg-primary-color hover:bg-indigo-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
      >
        Sign up
      </a>
    );
  });

  return (
    <body>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl dark:bg-trueGray-800">
        <section>
          <form className="flex flex-col" method="POST" action="#">
            <div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="px-0 py-2 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center ring-2 ring-red-600 rounded focus:outline-none">
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                      url="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"></path>
                    </svg>
                    <span
                      className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                      aria-hidden="true"
                    ></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Sign up with Google
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-500 dark:border-gray-700 border-dotted flex-grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-500 dark:text-gray-400">
                Or, register with your email
              </div>
              <div
                className="border-t border-gray-500 dark:border-gray-700 border-dotted flex-grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <div className="mb-6 pt-3 rounded ">
              <label
                className="block text-trueGray-500 text-sm mb-2 ml-3"
                for="email"
              >
                Your name
              </label>
              <input
              required
                placeholder="Your name"
                type="text"
                id="email"
                className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              ></input>
            </div>
            <div className="mb-6 pt-3 rounded ">
              <label
                className="block text-trueGray-500 text-sm mb-2 ml-3"
                for="email"
              >
                Email
              </label>
              <input
              required
                placeholder="You@example.com"
                type="text"
                id="email"
                className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              ></input>
            </div>
            <div className="mb-6 pt-3 rounded">
              <label
                className="block text-trueGray-500 text-sm mb-2 ml-3"
                for="password"
              >
                Password
              </label>
              <input
              required
                placeholder="Password"
                type="password"
                id="password"
                class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              ></input>
            </div>
            <SignUpButton />
            <div class="text-trueGray-500 dark:text-gray-400 text-center mt-6">
              Already have an account?{" "}
              <a
                class="text-primary-color font-bold hover:bg-secondary-color hover:ring-2 hover:ring-secondary-color hover:rounded"
                href="/signIn"
              >
                Sign in
              </a>
            </div>
          </form>
        </section>
      </main>
    </body>
  );
}
