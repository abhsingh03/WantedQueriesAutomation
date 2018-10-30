var validCommands = {
    inputSex: (option) => `select[name="sexInput"] option[value="${option}"]`,
 
}

module.exports = {
url: 'http://localhost:3001/#/enter',
commands: [validCommands],
elements: {
    header:'input[name="hdrInput"]',
    mke:'input[name="mkeInput"]',
    ori:'input[name="oriInput"]',
    name:'input[name="namInput"]',
    sex: `select[name="sexInput"] option[value="F"]`,
    race: `select[name="racInput"] option[value="A"]`,
    hgt: 'input[name="hgtInput"]',
    wgt: 'input[name="wgtInput"]',
    hair: 'input[name="haiInput"]',
    off: 'input[name="offInput"]',
    dow: 'input[name="dowInput"]',
    oln: 'input[name="olnInput"]',
    ols: 'input[name="olsInput"]',
    dlexp: 'input[name="oldInput"]',
    lic: 'input[name="licInput"]',
    lis: 'input[name="lisInput"]',
    lid: 'input[name="lidInput"]',
    submitbutton: 'button[id="saveBtn"]',
    clearbutton: 'button[id="clearBtn"]',
    wid: 'input[name="widInput"]',
    res: 'input[name="resInput"]',
    doc: 'input[name="datInput"]',
    results: 'span[name="queryTitle"]',
    results1: 'h4[id="validHeader"]',
},
}