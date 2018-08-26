var recipes = new Object()

function updateObjectWithKeyAndValue(recipes, key, val){
  Object.assign(recipes, {key: val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj.key = val
}

function deleteObjectByKey(obj, key, val){
  
}

function destructiveyDeleteObjectByKey(obj, key, val){
  delete obj[key]
}

