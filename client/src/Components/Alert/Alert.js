import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

import { useSelector } from "react-redux";

const Alerts = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {alerts.map((alert) => (
        <Alert severity={alert.type} key={alert.id}>
          <AlertTitle>{alert.title}</AlertTitle>
          <strong>{alert.content}</strong>
        </Alert>
      ))}
    </Stack>
  );
};

export default Alerts;
