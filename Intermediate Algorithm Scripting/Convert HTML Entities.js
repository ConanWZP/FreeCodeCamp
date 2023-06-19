function convertHTML(str) {
    let a = str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll(`"`, '&quot;').replaceAll(`'`, '&apos;')
    return a;
}

console.log(     convertHTML('Stuff in "quotation marks"')        )
