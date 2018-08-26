var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]: val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj[key] = val
  return obj
}

function deleteObjectByKey(obj, key, val){
  
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}

