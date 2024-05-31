import { Builder, By, Key, until } from 'selenium-webdriver';
let url_de_la_página = 'http://localhost:5173';

async function withTimeout(promise, timeout = 30000) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('La operación ha superado el tiempo de espera de 5 segundos')), timeout)
    )
  ]);
}

async function testLandingComponent() {
  let driver;

  driver = await new Builder().forBrowser('chrome').build();

  try {
    await withTimeout(driver.get(url_de_la_página));

    const usernameInput = await withTimeout(driver.findElement(By.css('[type="usuario"]')));
    await withTimeout(usernameInput.sendKeys('Antonia'));

    const inputValue = await withTimeout(usernameInput.getAttribute('value'));
    if (inputValue != 'Antonia') {
      throw new Error('El campo de entrada no contiene el valor "Antonia"');
    }

    const submitButton = await withTimeout(driver.findElement(By.css('[type="submit"]')));
    await withTimeout(submitButton.click());

    await withTimeout(driver.wait(until.urlContains('/Entries')));

    const currentUrl = await withTimeout(driver.getCurrentUrl());
    if (!currentUrl.includes('/Entries')) {
      throw new Error('No se redirigió correctamente a la página de Entries');
    }
  } catch (error) {
    console.error('Error en la prueba:', error);
  } finally {
    await driver.quit();
  }
}

testLandingComponent();


// Versión jest de la prueba del componente Landing
/*
import { Builder, By, Key, until } from 'selenium-webdriver';
import axios from 'axios';
let url_de_la_página = 'http://localhost:5173';

describe('Pruebas del componente Landing', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Enviar formulario con nombre de usuario válido', async () => {
    
    await driver.get(url_de_la_página);

    // Encontrar el campo de entrada de usuario y enviar un nombre de usuario válido
    const usernameInput = await driver.findElement(By.css('[type="usuario"]'));
    await usernameInput.sendKeys('nombre_de_usuario_valido');

    const submitButton = await driver.findElement(By.css('[type="submit"]'));
    await submitButton.click();

    await driver.wait(until.urlContains('/Entries'));

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toContain('/Entries');

  });
});
*/