import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
import StandardTable from "./components/standard-table/standard-table.js";
import "../styles/design/reset.scss";
import "../styles/design/design.scss";
import "../styles/core/_header.scss";
import "../styles/core/_base.scss";
import "../styles/core/_footer.scss";
import "../styles/core/_standard-table.scss";

const App = () => {
  return (
    <>
      <Header title="React Design" />
      <StandardTable />
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
    </>
  );
};

export default App;
