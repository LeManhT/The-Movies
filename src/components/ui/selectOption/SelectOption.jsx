import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SelectOption({ listOptionItem, label }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={listOptionItem}
        onSelect={(e) => {
          if (e.target.value) {
            i18n.changeLanguage(e.target.value);
          }
        }}
        sx={{ width: 200, boxShadow: "1px solid rgba(33,37,41,0.15)" }}
        renderInput={(params) => {
          return <TextField {...params} label={label} />;
        }}
      />
      <Button>{t("Reload_Page")}</Button>
    </>
  );
}
