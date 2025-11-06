import {Box,Divider,Typography,TextField,Button,MenuItem,
  FormControl,InputLabel,Select,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Alertas from "../UI/Alertas";

const SECTION_TITLES = {
  personal: "Información Personal",
  academica: "Información Académica",
  contacto: "Información de Contacto",
};

export default function Formulario({fields,values,
  onChange,onSubmit,loading,alert,submitLabel = "Guardar",onCancel,
}) {
  const sections = fields.reduce((acc, field) => {
    const key = field.section || "default";
    if (!acc[key]) acc[key] = [];
    acc[key].push(field);
    return acc;
  }, {});

  return (
    <Box component="form" onSubmit={onSubmit}>
      {Object.entries(sections).map(([sectionKey, sectionFields], idx, arr) => (
        <Box key={sectionKey}>
          <Box sx={{ p: 3 }}>
            {sectionKey !== "default" && (
              <Typography fontWeight={600} mb={2}>
                {SECTION_TITLES[sectionKey] || sectionKey}
              </Typography>
            )}

            <Grid container spacing={2}>
              {sectionFields.map((field) => {
                const isSelect = !!field.select;
                const fieldId = `field-${field.name}`;

                return (
                  <Grid key={field.name} size={{ xs: 12, md: field.sm || 12 }}>
                    {isSelect ? (
                      <FormControl fullWidth required={field.required ?? true}>
                        <InputLabel id={`${fieldId}-label`}>
                          {field.label}
                        </InputLabel>
                        <Select
                          labelId={`${fieldId}-label`}
                          id={fieldId}
                          name={field.name}
                          label={field.label}
                          multiple={field.multiple || false}
                          value={
                            values[field.name] ?? (field.multiple ? [] : "")
                          }
                          onChange={onChange}
                          displayEmpty={false}
                        >
                          {field.multiple && (
                            <MenuItem disabled value="">
                              <em>Seleccione uno o más cursos</em>
                            </MenuItem>
                          )}
                          {field.options?.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                              {opt}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : (
                      <TextField
                        id={fieldId}
                        label={field.label}
                        name={field.name}
                        type={field.type || "text"}
                        fullWidth
                        required={field.required ?? true}
                        value={values[field.name] ?? ""}
                        onChange={onChange}
                        multiline={field.multiline}
                        minRows={field.minRows}
                        {...(field.TextFieldProps || {})}
                      />
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {idx !== arr.length - 1 && <Divider />}
        </Box>
      ))}
      <Divider />
      <Box
        sx={{
          p: 3,display: "flex",justifyContent: "flex-end",gap: 2,}}>
        <Alertas type={alert.type} message={alert.message} duration={4000} />
        <Button
          variant="outlined"
          type="button"
          color="inherit"
          onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Procesando..." : submitLabel}
        </Button>
      </Box>
    </Box>
  );
}
