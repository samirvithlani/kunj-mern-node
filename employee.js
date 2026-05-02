
var empObj;
const setEmpData = (emp)=>{
    console.log("set employee Data")
    empObj = emp;
}
const getEmpData = ()=>{
    console.log("get emp data")
    return empObj
}

const fs = require("fs")
module.exports = {
    setEmpData,getEmpData
}