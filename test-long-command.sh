#!/bin/bash
# Script de prueba para el comportamiento mejorado de CTRL+C

echo "Este script simula un comando de larga duración."
echo "Después de 60 segundos, deberías ver un mensaje amarillo sugiriendo presionar CTRL+C."
echo ""
echo "Instrucciones para probar:"
echo "1. Ejecuta este script con: sleep 70"
echo "2. Espera 60 segundos para ver el indicador amarillo"
echo "3. Presiona CTRL+C una vez - verás un mensaje de advertencia"
echo "4. Presiona CTRL+C de nuevo - el comando se cancelará"
echo "5. Presiona CTRL+C una tercera vez - verás 'Press Ctrl+C again to exit'"
echo "6. Presiona CTRL+C una cuarta vez - aparecerá el diálogo de guardar"
echo ""
echo "También puedes probar:"
echo "- Escribir texto y presionar CTRL+C para limpiar el input"
echo "- Usar /quit para ver el diálogo de guardar"
echo "- Configurar GEMINI_SKIP_SAVE_PROMPT=1 para saltar el diálogo" 