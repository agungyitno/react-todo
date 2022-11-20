import React, { useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { useDeleteTodo } from "../api/todo";

const DeleteTodo = (props) => {
  const { mutate } = useDeleteTodo();
  const onClickHandler = useCallback((id) => {
    return () => {
      if (!confirm("Are sure to delete this?")) return;
      mutate(
        { id },
        {
          onSuccess: (res) => {
            props.onSuccess(res);
          },
          onError: (err) => {
            console.log(err);
          },
        }
      );
    };
  });
  return (
    <button className="btn-icon" onClick={onClickHandler(props.destroyId)}>
      <FaTimes />
    </button>
  );
};

export default DeleteTodo;
