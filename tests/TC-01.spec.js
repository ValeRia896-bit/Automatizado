import { test, expect } from '@playwright/test';

test('TC-01: Verificar previsualización automática al adjuntar comprobante', async ({ page }) => {
  await page.goto('https://prop-bol-cicd.vercel.app/cobros-suscripciones');
  await page.getByRole('button', { name: 'Suscribirse' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Ingresa tu correo electrónico' }).fill('saraivelazquez456@gmail.com');
  await page.getByRole('textbox', { name: 'Ingresa tu contraseña' }).fill('12345678A');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Entendido' }).click();
  await page.getByRole('button', { name: 'Suscribirse' }).nth(2).click();
  await page.getByText('Pago por QR').click();
  await page.getByRole('button', { name: 'Continuar con QR Bancario' }).click();
  await page.waitForTimeout(2000);
  await page.locator('div.fixed.inset-0').waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByText('Haz clic para adjuntar').click()
  ]);
  await fileChooser.setFiles('comprobante.png');
  await expect(page.locator('img[alt*="comprobante"], img[src*="blob"]')).toBeVisible();
});