import React, { useEffect, useState } from "react";
import { FormGroup, Card, Elevation, Button } from "@blueprintjs/core";
import superagent, { saveCookies } from "superagent";
import cookie from "react-cookies";
import MyProduct from './MyProduct';

// import "./todo.css";
const Profile = () => {
  const [myProduct, setMyProduct] = useState([]);
  const [toDo, setToDo] = useState("");
  const [assignee, setAssignee] = useState("");
  const [difficulty, setDifficulty] = useState(3);
  const [complete,setComplete]=useState('pending')
  const [incomplete, setIncomplete] = useState([]);
  const API = "https://ibrahem-todo-server.herokuapp.com";

//   const handleChangeAssigne = (e) => {
//     setAssignee(e.target.value);
//   };
//   const handleChangeITem = (e) => {
//     setToDo(e.target.value);
//   };
//   const handleChange = (e) => {
//     setDifficulty(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let obj = {
//       toDo: toDo,
//       assignee: assignee,
//       difficulty: difficulty,
//       complete:complete
//     };
//     addItem(obj);
//     e.target.reset();
//   };

  async function addItem(item) {
    const token = cookie.load("token");
    let respone = await superagent
      .post(`${API}/todo`, item)
      .set("authorization", `Bearer ${token}`);
    console.log(respone);
  }
  useEffect(() => {
    let incompleteCount = list.filter(item => item.complete!=='complete').length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    
   
    
          <MyProduct myProduct={myProduct}  setMyProduct={setMyProduct}  />
     
  );
};

export default Profile;
