import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { useCreateTodo } from "../api/todo";
import Input from "./form/Input";

export default function AddTodo(props) {
  const [input, setInput] = React.useState("");
  const { mutate } = useCreateTodo();

  const onEnterHandler = (e) => {
    if (e.target.value === "") return;
    mutate(
      { name: e.target.value },
      {
        onSuccess: (res) => {
          setInput("a");
          props.onSuccess(res);
        },
      }
    );
  };
  return (
    <div className="input-group">
      <RiEdit2Fill width={14} height={14} className="input-icon" />
      <Input
        value={input}
        className="input"
        placeholder="Input Task + Press Enter"
        onEnter={onEnterHandler}
        resetOnEnter={true}
      />
    </div>
  );
}
