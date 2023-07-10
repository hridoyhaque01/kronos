import React from "react";

function Home() {
  return (
    <div className="relative max-w-sm">
      <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          defaultChecked
          id="bordered-radio-1"
          type="radio"
          value="tweet"
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      </div>
      <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-2"
          type="radio"
          value="post"
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-radio-2"
          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      </div>
      <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-3"
          type="radio"
          value="reel"
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-radio-3"
          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      </div>
    </div>
  );
}

export default Home;
