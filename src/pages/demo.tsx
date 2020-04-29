import React from "react";

import { Layout } from "@fmb/components/Layout";

const Page = () => {
  return (
    <Layout
      title="Find My Blocks"
      sidebar={<div>Sidebar!!!!</div>}
      settings={<div>Settings</div>}
      cards={<div>Cards</div>}
    />
  );
};

// eslint-disable-next-line import/no-default-export
export default Page;
