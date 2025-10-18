import React from "react";

export default function ThemeDemo() {
  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg shadow-md space-y-4 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold">How to Use Theme Toggle ReactJS</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          Import the <code>ThemeProvider</code> and wrap your app or section to
          enable theme logic.
        </li>
        <li>
          Use the <code>ThemeToggle</code> component wherever you want the
          toggle button.
        </li>
        <li>
          You can fully customize the toggle button by passing a{" "}
          <code>renderButton</code> prop with your own JSX.
        </li>
        <li>
          The theme options are:
          <ul className="list-disc list-inside ml-5">
            <li>
              <strong>Light</strong> – Forces light mode.
            </li>
            <li>
              <strong>Dark</strong> – Forces dark mode.
            </li>
            <li>
              <strong>Auto</strong> – Follows system preferences.
            </li>
          </ul>
        </li>
        <li>
          The current theme is stored in <code>localStorage</code> with key{" "}
          <code>hs_theme</code>.
        </li>
        <li>
          All other styling and icons of the toggle can be changed without
          touching the theme logic.
        </li>
        <li>
          Drop the component anywhere in your app to give users control over
          dark/light mode.
        </li>
      </ul>
    </div>
  );
}
