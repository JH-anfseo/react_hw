import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import styled from "styled-components";
import AddForm from "./components/AddForm";

const App = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto;
`;
