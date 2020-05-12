import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../Header";

export default {
  title: "Header",
  components: Header,
};

export const search = () => (
  <Router>
    <Header token="ahah" setToken={() => {}} />
  </Router>
);
