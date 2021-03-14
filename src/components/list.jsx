import React from "react";

export default function List({ listItem, key, handleHover, handleHoverOut }) {
  return (
    <>
      <li
        className='list-item'
        key={key}
        onClick={handleHover}
        onMouseOut={handleHoverOut}
      >
        {listItem}
      </li>
    </>
  );
}
