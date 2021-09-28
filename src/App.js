import React from "react";
import Home from "./containers/Home";
import Layout from "./components/Layout";
import Routes from "./components/Routes";
const App = () => {
  return (
    <div>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
};

export default App;
