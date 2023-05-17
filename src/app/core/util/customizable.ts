import { Customizable } from '../type/customizable';

export function getClassList(customizable: Customizable) {
  const className = customizable.className || '';
  let list = className.split(' ').map((c) => c.trim());

  const toString = () => {
    return list.join(' ');
  };

  const updateCustomizable = () => {
    customizable.className = toString();
  };

  const add = (className: string) => {
    list.push(className);

    updateCustomizable();
  };

  const remove = (className: string) => {
    list = list.filter((i) => i !== className);

    updateCustomizable();
  };

  const contains = (className: string) => {
    return list.includes(className);
  };

  return {
    add,
    remove,
    contains,
    toString,
  };
}
