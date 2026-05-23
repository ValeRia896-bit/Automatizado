import { test, expect } from '@playwright/test';

test('TC-03: Verificar que no se permitan archivos de más de 5MB', async ({ page }) => {
  await page.goto('https://prop-bol-cicd.vercel.app/cobros-suscripciones');
  await page.getByRole('button', { name: 'Suscribirse' }).nth(2).click();
  await page.waitForTimeout(1500);
  await page.getByRole('textbox', { name: 'Ingresa tu correo electrónico' }).fill('saraivelazquez456@gmail.com');
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).fill('12345678A');
  await page.locator('div.fixed.inset-0').waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.waitForTimeout(2000);
  await page.goto('https://prop-bol-cicd.vercel.app/cobros-suscripciones');
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Suscribirse' }).nth(2).click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Entendido' }).click();
  await page.getByText('Pago por QR').click();
  await page.getByRole('button', { name: 'Continuar con QR Bancario' }).click();
  await page.waitForTimeout(2000);
  await page.locator('input[type="file"]').setInputFiles('Valorant.png');
  await expect(page.getByText('El archivo supera el límite')).toBeVisible();
});