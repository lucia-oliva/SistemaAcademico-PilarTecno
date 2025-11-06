import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function ConfirmDeleteModal({
  open,
  title,
  description,
  confirmLabel = "Eliminar",
  cancelLabel = "Cancelar",
  loading = false,
  error = "",
  onClose,
  onConfirm,
}) {
  const handleClose = () => {
    if (loading) return;
    onClose?.();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent
        dividers
        sx={{ display: "flex", flexDirection: "column", gap: "1rem", py: "1.5rem" }}
      >
        {description && <Typography>{description}</Typography>}
        {error && <Alert severity="error">{error}</Alert>}
      </DialogContent>
      <DialogActions sx={{ px: "1.5rem", py: "1rem", gap: "0.5rem" }}>
        <Button onClick={onClose} disabled={loading} color="inherit">
          {cancelLabel}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
        >
          {loading ? "Eliminando" : confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}