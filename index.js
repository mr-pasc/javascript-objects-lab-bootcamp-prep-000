var recipes = new Object()

function updateObjectWithKeyAndValue(recipes, key, val){
  recipes = Object.assign(recipes, {[key]: val})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, val){
  recipes[key] = val
  return recipes
}

function deleteObjectByKey(obj, key, val){
  
}

function destructiveyDeleteObjectByKey(obj, key, val){
  delete obj[key]
}

