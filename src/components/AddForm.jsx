import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
        body,
        isDone: false,
      })
    );
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>My todo List</label>
        <StInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StBody
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #949494;
  height: 40px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #111;
  margin: 0 24px;
  height: 40px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
const StBody = styled.input`
  border: 1px solid #111;
  margin: 0 24px;
  height: 40px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
