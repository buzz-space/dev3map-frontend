

export function css(selector, style, value) {
  selector?.style[style] = value;
}

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