import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToDo from "./ToDo";
import { v4 as id } from "uuid";

import { useState } from "react";


const todos = [
  {
    id: id(),
    title: "المهمة الاولي",
    details: "كورس رياكت",
    isCompleted: false,
  },
  {
    id: id(),
    title: "المهمة الثانية",
    details: "كورس نكست",
    isCompleted: false,
  },
  {
    id: id(),
    title: "المهمة الثالثة",
    details: "كورس لارافيل",
    isCompleted: false,
  },
];

function ToDoList() {
  const [todoList, setTodoList] = useState(todos);
  const [todo, setTodo] = useState("");

  function handleClick() {
    setTodoList([
      ...todoList,
      {
        id: id(),
        title: todo,
        details: "",
        isCompleted: false,
      },
    ]);
    setTodo("");
  }

  function handelCheckMarkClick(id) {
    const newTodoList = [];
    todoList.map((todo) => {
      if (todo.id === id) {
        newTodoList.push({ ...todo, isCompleted: !todo.isCompleted });
      } else {
        newTodoList.push(todo);
      }
    });
    setTodoList(newTodoList);
  }

  return (
    <Container maxWidth="md" className="p-6">
      <Card sx={{ minWidth: 275 }} className="py-3 px-2">
        <CardContent>
          <Typography
            component={"span"}
            gutterBottom
            variant="string"
            className="text-6xl font-bold"
          >
            مهامي
          </Typography>
          <Divider />
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="center" aria-label="centered">
              غير المنجز
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              المنجز
            </ToggleButton>

            <ToggleButton value="left" aria-label="left aligned">
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
        </CardContent>

          {todoList.map((todo) => {
            return (
              <ToDo
                handleTaskCompletion={handelCheckMarkClick}
                key={todo.id}
                todo={todo}
              />
            );
          })}

        <Grid container spacing={2} className="mt-3">
          <Grid size={8}>
            <TextField
              label="عنوان المهمة"
              variant="outlined"
              className="w-full"
              style={{ direction: "rtl" }}
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
          </Grid>
          <Grid size={4} className="">
            <Button
              onClick={handleClick}
              variant="contained"
              className="w-full h-full"
            >
              اضافة
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default ToDoList;
