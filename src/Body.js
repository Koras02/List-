/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from 'react';
import ItemList from './item.json';
// import { detailPage } from "../../../utils/api/api";
import { getNftList, getNftInfo } from './axios';

const Body = match => {
    // console.log(ItemList[parseInt('5') - 1]);
    const item = ItemList[parseInt('4') - 1];

    console.log(item);

    return (
        <>
            <div className="Body-container">{item.title}</div>
            {item.subTitle}
            {item.amount}
            {item.price}
            {item.time}
        </>
    );
};

export default Body;
