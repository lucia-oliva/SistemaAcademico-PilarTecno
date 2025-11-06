import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Formulario from "../Forms/Formulario";
import { ESTUDIANTE_FORM_FIELDS } from "../../constants/estudianteFormFields";

export default function EditarEstudianteModal({
  open,
  values,
  alert,
  saving,
  onChange,
  onSubmit,
  onClose,
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Editar estudiante</DialogTitle>
      <DialogContent dividers sx={{ p: 0 }}>
        <Formulario
          fields={ESTUDIANTE_FORM_FIELDS}
          values={values}
          onChange={onChange}
          onSubmit={onSubmit}
          loading={saving}
          alert={alert || {}}
          submitLabel="Actualizar"
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
}