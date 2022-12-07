import CustomButton from "./CustomBttn";
function User(props) {
  return (
    <div className="squaryStyle">
      <div className="titleStyle">{props.user.title}</div>
      {props.user.content}
      <CustomButton
        color="red"
        onClick={() => props.handleDelete(props.user.id)}
      >
        삭제하기
      </CustomButton>
      <CustomButton
        color="blue"
        onClick={() => {
          props.setisDone(props.isDone);
        }}
      >
        {props.isDone ? "완료" : "취소"}
      </CustomButton>
    </div>
  );
}
export default User;
