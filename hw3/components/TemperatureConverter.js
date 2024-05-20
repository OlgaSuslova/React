// Задание 1: Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(2);
  const fahrenheitToCelsius = (fahrenheit) => (((fahrenheit - 32) * 5) / 9).toFixed(2);

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(celsiusToFahrenheit(e.target.value));
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius(fahrenheitToCelsius(e.target.value));
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onInput={handleCelsiusChange}
          value={celsius}
          id="outlined-basic"
          label="Температура в Цельсиях"
          variant="outlined"
        />
        <TextField
          onInput={handleFahrenheitChange}
          value={fahrenheit}
          id="filled-basic"
          label="Температура в Фаренгейтах"
          variant="filled"
        />
        <Button
          onClick={() => {
            setCelsius("");
            setFahrenheit("");
          }}
          variant="contained"
          size="large"
        >
          Очистить
        </Button>
      </Box>
    </div>
  );
}
