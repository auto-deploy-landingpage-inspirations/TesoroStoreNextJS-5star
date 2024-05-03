import isEmpty from "lodash/isEmpty";
import orderBy from "lodash/orderBy";

export function generateCartItemName(name: string, attributes: object) {
  return name;
  if (!isEmpty(attributes)) {
    const sortedAttributes = orderBy(attributes);
    return `${name} - ${sortedAttributes.join(", ")}`;
  } else {
    return `${name}`;
  }
  return name;
}
