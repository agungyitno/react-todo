import React from "react";

export default function Checkbox(props) {
  return (
    <input
      type="checkbox"
      className={props.className}
      defaultChecked={props.checked}
      onChange={props.onChange}
    />
  );
}
