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

  const add = (...classNames: string[]) => {
    list.push(...classNames);

    updateCustomizable();
  };

  const remove = (...classNames: string[]) => {
    list = list.filter((i) => !classNames.includes(i));

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
