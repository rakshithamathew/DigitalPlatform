// import { Columns, Rows } from "lucide-react";
// import React, { useState } from "react";

// const ToDo = () => {
//   //   const arrar = [1, 3, 2, 3, 4, 5, 6];
//   //   const obj = [
//   //     { id: 1, fruit: "apple" },
//   //     { id: 2, fruit: "banana" },
//   //     { id: 3, fruit: "orange" },
//   //   ];

//   const [task, setTask] = useState("");
//   const [add, setAdd] = useState([]);
//   const [edit, setEdit] = useState(0);

//   const handleAdd = (e) => {
//     e.preventDefault(); // avoid refreshing gof the page4

//     if (edit) {
//       const editTodo = add.find((i) => i.id === edit);
//       const updateTask = add.map((i) =>
//         i.id === editTodo.id
//           ? (i = { id: i.id, task })
//           : { id: i.id, task: i.task }
//       );
//       setAdd(updateTask);
//       setEdit(0);
//       setTask("");
//       return;
//     }
//     if (task !== "") {
//       setAdd([{ id: Date.now(), task }, ...add]);
//     }
//     setTask("");
//   };

//   const handleDel = (id) => {
//     const delTask = add.filter((del) => del.id !== id);
//     setAdd([...delTask]);
//   };

//   const handleEdit = (id) => {
//     const editTask = add.find((i) => i.id === id);
//     setTask(editTask.task);
//     setEdit(id);
//   };

//   return (
//     <>
//       {/* <div>{arrar.filter((i) => i !== 4)}</div>
//       <div>
//         {obj.map((index) => (
//           <div key={index.id}>{index.fruit}</div>
//         ))}
//       </div> */}

//       <div>TODO List</div>
//       <input
//         type="text"
//         placeholder="Enter your task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         style={{ border: "2px solid blue", padding: "5px", margin: "5px" }}
//       />
//       <button
//         onClick={handleAdd}
//         style={{ border: "2px solid green", padding: "5px", margin: "5px" }}
//       >
//         {edit ? "Edit" : "Submit"}
//       </button>
//       {add.map((i) => (
//         <div style={{ display: Columns }}>
//           <li>{i.task}</li>
//           <button
//             style={{
//               border: "2px solid orange",
//               padding: "5px",
//               margin: "5px",
//             }}
//             onClick={() => handleEdit(i.id)}
//           >
//             Edit
//           </button>
//           <button
//             style={{
//               border: "2px solid orange",
//               padding: "5px",
//               margin: "5px",
//             }}
//             onClick={() => handleDel(i.id)}
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ToDo;

import { lightBlue } from "@mui/material/colors";
import { Columns, Rows } from "lucide-react";
import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task !== "") {
      setTaskArray([{ id: Date.now(), task }, ...taskArray]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const deleted = taskArray.filter((i) => id !== i.id);
    setTaskArray([...deleted]);
  };

  const handleEdit = (id) => {
    const editedArray = taskArray.map((i) => {
      if (i.id === id) {
        console.log(i);
        return { ...i, task: task };
      }
      return i;
    });
    setTaskArray([...editedArray]);
    setTask("")
    
  };

  return (
    <div>
      <input
        type="text"
        style={{ padding: "10px", margin: "5px" }}
        placeholder="Add your task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        style={{ padding: "10px", margin: "5px", backgroundColor: "yellow" }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
      {taskArray.map((item, index) => (
        <>
          <li key={index}>{item.task}</li>
          <button
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: "lightBlue",
            }}
            onClick={() => handleEdit(item.id)}
          >
            Edit
          </button>
          <button
            style={{ padding: "10px", margin: "5px", backgroundColor: "red" }}
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </>
      ))}
    </div>
  );
};

export default ToDo;
