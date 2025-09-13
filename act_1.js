const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Convertir Celsius a Fahrenheit
app.get('/convert/celsius-to-fahrenheit/:value', (req, res) => {
  try {
    const celsius = parseFloat(req.params.value);
    if (isNaN(celsius)) {
      return res.status(400).json({ error: 'El valor debe ser un número.' });
    }
    const fahrenheit = (celsius * 9/5) + 32;
    res.json({
      celsius: celsius,
      fahrenheit: fahrenheit,
      message: `${celsius}°C son ${fahrenheit}°F`
    });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// 2. Convertir Fahrenheit a Celsius
app.get('/convert/fahrenheit-to-celsius/:value', (req, res) => {
  try {
    const fahrenheit = parseFloat(req.params.value);
    if (isNaN(fahrenheit)) {
      return res.status(400).json({ error: 'El valor debe ser un número.' });
    }
    const celsius = (fahrenheit - 32) * 5/9;
    res.json({
      fahrenheit: fahrenheit,
      celsius: celsius,
      message: `${fahrenheit}°F son ${celsius}°C`
    });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// 3. Convertir Kilómetros a Millas
app.get('/convert/km-to-miles/:value', (req, res) => {
  try {
    const km = parseFloat(req.params.value);
    if (isNaN(km)) {
      return res.status(400).json({ error: 'El valor debe ser un número.' });
    }
    const miles = km * 0.621371;
    res.json({
      kilometers: km,
      miles: miles,
      message: `${km} km son ${miles.toFixed(4)} millas`
    });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// Ruta básica para probar que el servidor funciona
app.get('/', (req, res) => {
  res.send('¡API de Conversión de Unidades funcionando!');
});

// Inicia el servidor
app.listen(PORT, '0.0.0.0', () => {
  const host = `cautious-bassoon-7v9p6jppj57w26pq-3000.app.github.dev`; // Tu URL de GitHub
  console.log(`\n=== SERVIDOR DE CONVERSIÓN INICIADO ===`);
  console.log(`Servidor escuchando en: https://${host}`);
  console.log(`\n--- ENDPOINTS DISPONIBLES ---`);
  console.log(`• Conversión de Celsius a Fahrenheit: https://${host}/convert/celsius-to-fahrenheit/25`);
  console.log(`git push -u origin main• Conversión de Fahrenheit a Celsius: https://${host}/convert/fahrenheit-to-celsius/98`);
  console.log(`• Conversión de Kilómetros a Millas: https://${host}/convert/km-to-miles/10`);
  console.log(`• Página de inicio: https://${host}/`);
  console.log(`\n================================`);
});