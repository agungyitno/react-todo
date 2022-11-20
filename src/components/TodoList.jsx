import React, { forwardRef, useImperativeHandle } from "react";
import { useTodo, useUpdateTodo } from "../api/todo";
import DeleteTodo from "./DeleteTodo";
import Checkbox from "./form/Checkbox";
import Input from "./form/Input";

const TodoList = (_, ref) => {
  const { data, isLoading, isSuccess, refetch } = useTodo();
  const { mutate } = useUpdateTodo();
  const onCheckedHandler = (id) => {
    return (e) => {
      mutate(
        { id, finish_date: e.target.checked ? new Date().toISOString() : "" },
        {
          onSuccess: (res) => {
            return;
          },
        }
      );
    };
  };
  const onBlurHandler = (id) => {
    return (e) => {
      if (e.target.value === "") return alert("This input can't blank!");
      if (e.target.old === e.target.value) return;
      mutate(
        { id, name: e.target.value },
        {
          onSuccess: (res) => {
            return;
          },
        }
      );
    };
  };
  useImperativeHandle(ref, () => ({
    refetchList: () => {
      refetch();
    },
  }));

  const onDeleteSuccess = (res) => {
    refetch();
  };
  return (
    <ul className="list">
      {!isLoading && isSuccess ? (
        data.data.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <Checkbox
                checked={item.finish_date ?? false}
                onChange={onCheckedHandler(item.id)}
              />
              <Input
                className={"list-input"}
                value={item.name}
                blurOnEnter={true}
                onBlur={onBlurHandler(item.id)}
              />
              <DeleteTodo destroyId={item.id} onSuccess={onDeleteSuccess} />
            </li>
          );
        })
      ) : (
        <>
          <div>Server is Offline</div>
        </>
      )}
    </ul>
  );
};

export default forwardRef(TodoList);
