var modifyvalid1 = require('./modifyvalid')
var modifyinvalid1 = require('./modifyinvalid')
var modifypageObject
var testdataew1 = require('../tests/testdataew')

module.exports = {
    beforeEach: browser => {
        modifypageObject = browser.page.modifypageObject()
        modifypageObject.navigate()
    },

    after: browser => {
        browser.end()
    },
    
    'Check Valid Search (Modify Wanted)' : browser => {
            modifyvalid1(modifypageObject, testdataew1.modifyvalid[0])
        },

    'Check Invalid Search (Modify Wanted)' : browser => {
            browser.refresh()
            modifyinvalid1(modifypageObject, testdataew1.modifyinvalid[0])
        },
    
    }