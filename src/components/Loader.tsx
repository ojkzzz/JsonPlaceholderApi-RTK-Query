import { CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack alignItems="center" mt={30}>
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
