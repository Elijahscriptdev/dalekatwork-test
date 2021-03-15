import React from "react";

export default function List({ listItem, handleHover, handleHoverOut }) {
  return (
    <>
      <li
        className='list-item'
        onClick={handleHover}
        onMouseOut={handleHoverOut}
      >
        {listItem}
      </li>
    </>
  );
}
