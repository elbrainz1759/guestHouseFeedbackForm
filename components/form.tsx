import { useContext, useState } from "react";
import {
  Button,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  TextField,
} from "@material-ui/core";
import { toast } from "react-toastify";
// import { TodoContext } from "../contexts/todoContext";
// import todoService from "../services/todoService";

interface dataSchema {
  id?: string;
  feedback: string;
  email: string;
  name: string;
  location: string;
}

const Form = () => {
  let [feedback, setFeedback] = useState("");
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [location, setLocation] = useState("");

  function getFeedback({ currentTarget: input }: { currentTarget: any }) {
    setFeedback(input.value);
  }

  function getEmail({ currentTarget: input }: { currentTarget: any }) {
    setEmail(input.value);
  }
  function getName({ currentTarget: input }: { currentTarget: any }) {
    setName(input.value);
  }
  function getLocation({ currentTarget: input }: { currentTarget: any }) {
    setLocation(input.value);
  }

    async function saveTask() {
      if(feedback === "" || name === "" || location === "" || email === "") return toast.error("All fields are required")
    const data: dataSchema = {
      feedback,
      name,
      location,
      email,
    };
    try {
      console.log(data);
      //   const saveTodo = await todoService.addTodo(data);
      //   if (!saveTodo) toast.error("Error occured");
      toast.info("Todo Saved Successfully");
      //   if (addTodo) addTodo();
      //   setTask("");
      //   setDueDate("");
    } catch (err) {
      console.log(err);
      toast.error("Error occured");
    }
  }
  return (
    <>
      <Card style={{ maxWidth: "100%", marginBottom: "5%" }}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  style={{ width: "100%" }}
                  aria-label="Enter Email"
                  placeholder="Enter Email "
                  id="email"
                  label="Enter Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={getEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  style={{ width: "100%" }}
                  aria-label="Enter Name"
                  minRows={4}
                  label="Enter Name"
                  placeholder="Enter Name "
                  id="name"
                  name="name"
                  value={name}
                  onChange={getName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  variant="outlined"
                  name="dueDate"
                  label="Location"
                  placeholder="Location"
                  type="text"
                  value={location}
                  onChange={getLocation}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  variant="outlined"
                  style={{ width: "100%" }}
                  aria-label="Enter Feedback / Issue"
                  minRows={4}
                  placeholder="Enter Feedback / Issue "
                  label="Enter Feedback / Issue"
                  id="email"
                  name="email"
                  value={feedback}
                  onChange={getFeedback}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  style={{
                    height: "55px",
                    width: "100%",
                    marginTop: "5px",
                    backgroundColor: "#e83845",
                    color: "white",
                    cursor: "pointer",
                  }}
                  value="Send"
                  readOnly
                  type="button"
                  onClick={saveTask}
                />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Form;
