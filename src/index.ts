import wikipedia from 'wikipedia'

async function main() {
  wikipedia.setLang('pt');

  const search = await wikipedia.search('Lista de monarcas da Inglaterra', {})
  console.log(search);

  const result = search.results.find((r) => r.title === 'Lista de monarcas da Inglaterra')
  const page = await wikipedia.page(result.pageid);
  const summary = await page.summary();
  const tables = await page.tables();
  console.log(summary, tables);

  // const batman = await wikipedia.page('Lista_de_monarcas_da_Inglaterra');
  // const summary = await batman.summary();
  // console.log(batman, summary);
  // const tables = await wikipedia.tables('Lista_de_monarcas_da_Inglaterra', {});
  // console.log(tables);
}

main()
