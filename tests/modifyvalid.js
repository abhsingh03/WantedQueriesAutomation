module.exports = (modifypageObject, modifyvalid) => {
    modifypageObject
                .navigate()
                .setValue('@header', modifyvalid.header)
                .setValue('@mke', modifyvalid.mke)
                .setValue('@ori', modifyvalid.ori)
                .setValue('@name', modifyvalid.name)
                .click('@sex')
                .click('@race')
                .setValue('@hgt', modifyvalid.hgt)
                .setValue('@wgt', modifyvalid.wgt)
                .setValue('@hair', modifyvalid.hair)
                .setValue('@off', modifyvalid.off)
                .setValue('@dow', modifyvalid.dow)
                .setValue('@oln', modifyvalid.oln)
                .setValue('@ols', modifyvalid.ols)
                .setValue('@dlexp', modifyvalid.dlexp)
                .setValue('@lic', modifyvalid.lic)
                .setValue('@lis', modifyvalid.lis)
                .setValue('@lid', modifyvalid.lid)
                .click('@submitbutton')
                .expect.element('@results').text.to.equal('Assembled Query:').before(5000)

}