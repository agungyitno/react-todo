import { useQuery, useMutation } from "react-query";
import api from ".";

export const useTodo = () => {
  const fetchTodo = async () => {
    const { data } = await api.get("/todo");
    return data;
  };

  return useQuery([], fetchTodo);
};

export const useCreateTodo = () => {
  const fetchTodo = async ({ name }) => {
    const { data } = await api.post("/todo", {
      name: name,
    });
    return data;
  };

  return useMutation(fetchTodo);
};

export const useUpdateTodo = () => {
  const fetchTodo = async ({ id, name, finish_date }) => {
    const { data } = await api.put("/todo/" + id, {
      name: name ?? undefined,
      finish_date: finish_date ?? undefined,
    });
    return data;
  };

  return useMutation(fetchTodo);
};

export const useDeleteTodo = () => {
  const fetchTodo = async ({ id }) => {
    const { data } = await api.delete("/todo/" + id);
    return data;
  };

  return useMutation(fetchTodo);
};
