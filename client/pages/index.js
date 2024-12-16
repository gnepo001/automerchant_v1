import React from "react";

import { Header } from "../components/index";

const index = () => {
  return (
    <div>
      <Header />
      <main class="flex flex-col">
        <span>Add search bar and range for posts</span>
        <span>Post will be here from database</span>
        <a href="/signup" class="text-green-600 underline">
          Signup link
        </a>
        <a href="/login" class="text-green-600 underline">
          login link
        </a>
      </main>
    </div>
  );
};

export default index;
