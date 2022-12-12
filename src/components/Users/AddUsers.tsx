import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useSetUserMutation } from "../../RTKQ/api/jsonPlaceholder.api";

const AddUsers = () => {
  const [textValue, setTextValue] = useState("");
  const handleTextValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };
  const handleButton = () => {
    trigger({
      name: textValue,
      username: "ojkzzz",
      email: "o_platunov@mail.ru",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    })
      .unwrap()
      .then((response) => {
        console.log(response);
      });
  };
  const [trigger] = useSetUserMutation();
  return (
    <Stack alignItems="center" m={3}>
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "600px",
          padding: "20px 0",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h6" m={2}>
          Добавить пользователя
        </Typography>
        <Stack direction="row" justifyContent="space-between" p="0 60px">
          <TextField
            label="Введите имя"
            variant="standard"
            sx={{ width: "300px" }}
            value={textValue}
            onChange={handleTextValue}
          />
          <Button onClick={handleButton} variant="contained">
            Добавить
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default AddUsers;
