var testdataew1 = require('../tests/testdataew')
var ewfunctionvalid1 = require('./ewfunctionvalid')
var ewfunctioninvalid1 = require('./ewfunctioninvalid')
var cancelvalid1 = require('./cancelvalid')
var cancelinvalid1 = require('./cancelinvalid')
var modifyvalid1 = require('./modifyvalid')
var modifyinvalid1 = require('./modifyinvalid')
var EWpageObject
var cancelpageObject
var modifypageObject

module.exports = {
    beforeEach: browser => {
        EWpageObject = browser.page.EWpageObject()
        EWpageObject.navigate()
    },

    after: browser => {
        browser.end()
    },

    'Check valid Search (Enter Wanted)': browser => {
        ewfunctionvalid1(EWpageObject, testdataew1.validTests[0])
    },
    'Check invalid Search (Enter Wanted)': browser => {
        browser.refresh()
        ewfunctioninvalid1(EWpageObject, testdataew1.invalidTests[0])
    },
}
    
/*
    beforeEach: browser => {
        cancelPageObject = browser.page.cancelpageObject()
        cancelpageObject.navigate()
    },
    'Check Valid Search (Cancel Wanted Queries)' : browser => {
        browser.refresh()
        cancelvalid1(cancelpageObject, testdataew1.cancelvalid[0])
    },
}

    'Check Invalid Search (Cancel Wanted Queries)' : browser => {
        cancelinvalid1(cancelpageObject, testdataew1.cancelinvalid[0] )
    },
    'Check Valid Search (Modify Wanted)' : browser => {
        modifyvalid1(modifypageObject, testdataew1.modifyvalid[0])
    },
    'Check Invalid Search (Modify Wanted)' : browser => {
        modifyinvalid1(modifypageObject, testdataew1.modifyinvalid[0])
    },

}
        
        

        

    }*/