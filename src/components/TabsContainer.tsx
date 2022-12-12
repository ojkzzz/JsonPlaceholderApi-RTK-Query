import { Box, Tab, Tabs } from "@mui/material";
import { Stack } from "@mui/system";
import { SyntheticEvent, useState } from "react";
import Todos from "./Todos";
import Users from "./Users/Users";

const TabsContainer = () => {
  const [value, setValue] = useState(0);
  const handleValue = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleValue}
          aria-label="basic tabs example"
        >
          <Tab label="Users" value={0} />
          <Tab label="Todo" value={1} />
        </Tabs>
      </Box>
      {value === 0 ? <Users /> : <Todos />}
    </Stack>
  );
};

export default TabsContainer;
