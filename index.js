var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, val){
  return Object.assign(obj, {key: val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj.key = val
}

function deleteObjectByKey(obj, key, val){
  
}

function destructiveyDeleteObjectByKey(obj, key, val){
  delete obj[key]
}

