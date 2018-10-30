module.exports = (cancelpageObject, cancelinvalid) => {
    cancelpageObject
            
                .setValue('@wid', cancelinvalid.wid)
                .setValue('@res', cancelinvalid.res)
                .setValue('@doc', cancelinvalid.doc)
                .click('@submitbutton')
                .expect.element('@results1').text.to.equal('Errors Received:').before(5000)
}