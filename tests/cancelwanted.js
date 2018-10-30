var cancelvalid1 = require('./cancelvalid')
var cancelinvalid1 = require('./cancelinvalid')
var testdataew1 = require('../tests/testdataew')
var cancelpageObject

module.exports = {
    beforeEach: browser => {
        cancelpageObject = browser.page.cancelpageObject()
        cancelpageObject.navigate()
    },

    after: browser => {
        browser.end()
    
    },

'Check Valid Search (Cancel Wanted Queries)' : browser => {
    browser.refresh()
    cancelvalid1(cancelpageObject, testdataew1.cancelvalid[0])
},

'Check Invalid Search (Cancel Wanted Queries)' : browser => {
    cancelinvalid1(cancelpageObject, testdataew1.cancelinvalid[0] )

    },
}