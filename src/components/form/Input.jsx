import React, { useCallback, useState } from "react";

export default function Input(props) {
  const [input, setInput] = useState(props.value ?? "");

  const onFocusHandler = useCallback((e) => {
    e.target.old = e.target.value;
  });

  const onChangeHandler = useCallback((e) => {
    setInput(e.target.value);
    props.onChange?.();
  });

  const onKeyUpHandler = useCallback((e) => {
    if (e.keyCode !== 13) return;
    props.onEnter?.(e);
    props.resetOnEnter ? setInput("") : undefined;
    props.blurOnEnter ? e.target.blur() : undefined;
  });

  return (
    <input
      type={props.type ?? "text"}
      className={props.className}
      value={input}
      onFocus={onFocusHandler}
      onChange={onChangeHandler}
      onKeyUp={onKeyUpHandler}
      onBlur={props.onBlur}
      placeholder={props.placeholder ?? ""}
    />
  );
}
