import { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const deleteComments = (id) => {
    setComments(comments.filter((el) => el.id !== id));
  };
  return (
    <>
      {comments.map((el) => (
        <div key={el.id}>
          {el.text}{" "}
          <button onClick={() => deleteComments(el.id)}>Удалить</button>
        </div>
      ))}
    </>
  );
};
export default CommentsList;
