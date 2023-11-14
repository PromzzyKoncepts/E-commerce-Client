//Please kindly run "npm install react-helmet" for search engines to work
import React from "react";
import { Helmet } from "react-helmet";

const MetaSearch = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

MetaSearch.defaultProps = {
  title: "Aphia | Welcome To Aphia",
  description: "We sell the best products at cheapest price",
  keywords: "electronics, buy electronics, cheap electroincs, groceries, buy groceries, clothings", 
};

export default MetaSearch;
