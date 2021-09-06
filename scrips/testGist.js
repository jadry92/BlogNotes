const title = '\n Lucy | How does React decide to re-render a component? \n'

const result = title.split('').filter((character) => character != '\n').join('').trim()

console.log(result);

const p = 'https://www.accc.gov.au/system/files/20-47RPT_Communications_Market_Report_FA.pdf'

const res = p.match('.*\.pdf$')[0]
console.log(res);