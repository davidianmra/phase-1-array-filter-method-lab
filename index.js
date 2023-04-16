// Code your solution here


function findMatching(driverArray, desiredName){
    
    const charDriverArray = driverArray
    const matchingName = driverArray.filter(name => name.toUpperCase() === desiredName.toUpperCase())
    
    return matchingName
    }
  
function fuzzyMatch(driverArray, letterCriteria){
   
    return driverArray.filter(drivers => drivers.slice(0, letterCriteria.length) === letterCriteria)

    }
    

function matchName(driverObject, nameCriteria){
   return driverObject.filter(driver => driver.name === nameCriteria)
}

