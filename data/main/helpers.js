// install the bwip-js module in runtime, you might as well want to install it locally from npm and use normal require
const jsreport = require('jsreport-proxy')
const bwipjs = await jsreport.npm.require('bwip-js@3.0.4')

async function barcode(text) {
    const png = await bwipjs.toBuffer({ 
        bcid:'pdf417', 
        text,
        columns: 2,
        rotate: 'L',
        scale: 2
    })
    return 'data:image/png;base64,' + png.toString('base64');
}

function getClassTypeInText (type) {
    if (type === 'Y') {
        return 'Economy'
    } else if (type === 'P') {
        return 'Premium'
    } else if (type === 'B') {
        return 'Business'
    } else if (type === 'F') {
        return 'First'
    }
    
    return ''
}

function getDateText (timestamp) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const d = new Date(timestamp)
    
    return `${d.getDate()}${monthNames[d.getMonth()]}`
}
