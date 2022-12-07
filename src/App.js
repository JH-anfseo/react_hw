import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomBttn.js";
import User from "./components/users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, title: "집 가기", content: "집가고싶다" },
    { id: 2, title: "집 가기", content: "집가고싶다" },
    { id: 3, title: "집 가기", content: "집가고싶다" },
  ]);
  const [content, setcontent] = useState("");
  const [title, settitle] = useState("");
  const [isDone, setisDone] = useState(true);

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      content: content,
    };
    setUsers([...users, newUser]);
    settitle("");
    setcontent("");
  };
  const doneUserHandler = (id) => {
    const pageUser = users.filter((user) => (user.id = id));
    setUsers(pageUser);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  return (
    <div className="root">
      <div className="todo">
        <input
          value={content}
          placeholder="제목"
          onChange={(e) => setcontent(e.target.value)}
        />
        <input
          value={title}
          placeholder="내용"
          onChange={(e) => settitle(e.target.value)}
        />
        <CustomButton color="green" onClick={addUserHandler}>
          추가하기
        </CustomButton>
      </div>
      <h1>완료</h1>
      <div className="done">
        {users.map((user) => {
          return (
            <User
              handleDelete={deleteUserHandler}
              doneHandle={doneUserHandler}
              user={user}
              key={user.id}
            />
          );
        })}
      </div>
      <h1>취소</h1>
      <div className="none">
        {users.map((user) => {
          return (
            <User
              handleDelete={deleteUserHandler}
              doneHandle={doneUserHandler}
              user={user}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
