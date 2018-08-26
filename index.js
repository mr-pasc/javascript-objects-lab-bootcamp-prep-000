var recipes = new Object()

function updateObjectWithKeyAndValue(recipes, key, val){
  return Object.assign(recipes, {[key]: val})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, val){
  recipes[key] = val
}

function deleteObjectByKey(obj, key, val){
  
}

function destructiveyDeleteObjectByKey(obj, key, val){
  delete obj[key]
}

