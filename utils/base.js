



export function deleteEl(e) {
  e.parentNode.removeChild(e);
}

export function checkParent(parent, child) {
  if (parent.contains(child))
    return true;
  return false;
}

export function getBound(ref) {
  if (!ref.current) return
  return ref.current.getBoundingClientRect();
}

export function handleWidthCss(value) {
  return +value.slice(0, -2);
}

export function stylePercent(value) {
  if (Number(value) < 0) {
    return 'negative';
  } else {
    return 'positive';
  }
}

export function hasAllProperties(obj, propArray) {
  for (var i = 0; i < propArray.length; i++) {
    if (!obj.hasOwnProperty(propArray[i])) {
      return false;
    }
  }
  return true;
}