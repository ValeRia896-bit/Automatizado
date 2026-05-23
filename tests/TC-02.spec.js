import { test, expect } from '@playwright/test';

test('TC-02: Verificar el calculo de resumen de pago', async ({ page }) => {
  await page.goto('https://prop-bol-cicd.vercel.app/cobros-suscripciones');
  await page.getByRole('button', { name: 'Entendido (Quizás luego)' }).click();
  await page.getByRole('button', { name: 'Suscribirse' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Ingresa tu correo electrónico' }).click();
  await page.getByRole('textbox', { name: 'Ingresa tu correo electrónico' }).fill('saraivelazquez456@gmail.com');
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).click();
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).fill('12345678A');
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).press('CapsLock');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Suscribirse' }).nth(2).click();
  await page.getByRole('button', { name: 'Entendido' }).click();
  await page.getByText('📱Pago por QREscanea con tu').click();
  await page.getByRole('button', { name: 'Continuar con QR Bancario' }).click();
  await page.getByText('Tiempo disponible para completar el pago29:').click();
  await page.getByText('Resumen del pagoProBs. 2654.').click();
  await page.getByText('Resumen del pagoProBs. 2654.').click();
});