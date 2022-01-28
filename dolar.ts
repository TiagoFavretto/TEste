

const puppeteer = require("puppeteer");

let dolar_real = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  await page.setViewport({
    width: 1366,
    height: 768,
    deviceScaleFactor: 1,
  });

  await page.goto("https://br.investing.com/currencies/streaming-forex-rates-majors");

  await page.click('#onetrust-accept-btn-handler')

  await page.waitForSelector('#pair_2103 > td.pid-2103-bid')
  let dolar_compra_element = await page.$('#pair_2103 > td.pid-2103-bid')
  let dolar_compra = await page.evaluate(el => el.textContent, dolar_compra_element)

  await page.waitForSelector('#pair_2103 > td.pid-2103-ask')
  let dolar_venda_element = await page.$('#pair_2103 > td.pid-2103-ask')
  let dolar_venda = await page.evaluate(el => el.textContent, dolar_venda_element)

  await page.waitForSelector('#pair_2103 > td.pid-2103-high')
  let dolar_maxima_element = await page.$('#pair_2103 > td.pid-2103-high')
  let dolar_maxima = await page.evaluate(el => el.textContent, dolar_maxima_element)

  await page.waitForSelector('#pair_2103 > td.pid-2103-low')
  let dolar_minima_element = await page.$('#pair_2103 > td.pid-2103-low')
  let dolar_minima = await page.evaluate(el => el.textContent, dolar_minima_element)

  await page.waitForSelector('#pair_2103 > td.pid-2103-time')
  let dolar_data_consulta_element = await page.$('#pair_2103 > td.pid-2103-time')
  let dolar_data_consulta = await page.evaluate(el => el.textContent, dolar_data_consulta_element)

  let dolar = {
    "compra": dolar_compra,
    "venda": dolar_venda,
    "maxima": dolar_maxima,
    "minima": dolar_minima,
    "data_consulta": dolar_data_consulta
  }

  console.log(dolar)

  browser.close();

  return dolar;
};


dolar_real()

  .then((dolar) => {
  })
  .catch((error) => console.log(error));



