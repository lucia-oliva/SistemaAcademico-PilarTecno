import { useEffect, useState } from "react";
import { Grid, Alert } from "@mui/material";

export default function Alertas({ type, message, duration = 4000 }) {
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!type || !message || !visible) return null;

  return (
    <Grid size={{ xs: 12 }}>
      <Alert severity={type} variant="filled">
        {message}
      </Alert>
    </Grid>
  );
}
