import React from "react";

import Home from "./home/index.page";
import Layout from "./layout";

import "@/styles/global.css";

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
