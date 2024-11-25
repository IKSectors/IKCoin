import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message || 
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <header className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
