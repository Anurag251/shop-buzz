import React from 'react';
import CollectionItemsList from './collection-item-list.component';

const CollectionItem = ({ title, items }) => {
  return (
    <div className="collection-item">
      <h1 className="title">{title}</h1>
      <CollectionItemsList items={items} />
    </div>
  );
};

export default CollectionItem;
