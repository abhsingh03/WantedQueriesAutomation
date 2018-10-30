module.exports = (EWpageObject, invalidTests) => {
    EWpageObject
                .navigate()
                .setValue('@header', invalidTests.header)
                .setValue('@mke', invalidTests.mke)
                .setValue('@ori', invalidTests.ori)
                .setValue('@name', invalidTests.name)
                .click(EWpageObject.inputSex(invalidTests.sex))
                .click('@race')
                .setValue('@hgt', invalidTests.hgt)
                .setValue('@wgt', invalidTests.wgt)
                .setValue('@hair', invalidTests.hair)
                .setValue('@off', invalidTests.off)
                .setValue('@dow', invalidTests.dow)
                .setValue('@oln', invalidTests.oln)
                .setValue('@ols', invalidTests.ols)
                .setValue('@dlexp', invalidTests.dlexp)
                .setValue('@lic', invalidTests.lic)
                .setValue('@lis', invalidTests.lis)
                .setValue('@lid', invalidTests.lid)
                .click('@submitbutton')
                .expect.element('@results1').text.to.equal('Errors Received:').before(5000)

}