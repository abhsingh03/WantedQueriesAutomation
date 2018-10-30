module.exports = (EWpageobject, validTests) => {
    EWpageobject
                .navigate()
                .setValue('@header', validTests.header)
                .setValue('@mke', validTests.mke)
                .setValue('@ori', validTests.ori)
                .setValue('@name', validTests.name)
                .click(EWpageobject.inputSex(validTests.sex))
                .click('@race')
                .setValue('@hgt', validTests.hgt)
                .setValue('@wgt', validTests.wgt)
                .setValue('@hair', validTests.hair)
                .setValue('@off', validTests.off)
                .setValue('@dow', validTests.dow)
                .setValue('@oln',validTests.oln)
                .setValue('@ols',validTests.ols)
                .setValue('@dlexp', validTests.dlexp)
                .setValue('@lic', validTests.lic)
                .setValue('@lis', validTests.lis)
                .setValue('@lid', validTests.lid)
                .click('@submitbutton')
                .expect.element('@results').text.to.equal('Assembled Query:').before(5000)

}