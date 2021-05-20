import React from 'react';
import Item from '../Item/Item';
import './ItemsContainer.scss';

function ItemsContainer() {
  return (
    <section className="items-container items-container_opened">
        <div className="title-block">
            <div className="items-container__title">CHATS</div>
            <div className="items-container__number">25</div>
        </div>
        <ul className="items-container__container">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </ul>
  </section>
  );
}

export default ItemsContainer;