// page.js

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </div>
  );
};

export default Page;