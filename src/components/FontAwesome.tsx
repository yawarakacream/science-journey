interface FontAwesomeProps {
  type: string;
  fixed?: boolean;
}

export default function FontAwesome({ type, fixed, ...i }: FontAwesomeProps & JSX.IntrinsicElements["i"]) {
  let [name, clazz] = type.split("@");
  if (!clazz) {
    clazz = "s";
  }
  if (fixed) {
    return <i className={`fa${clazz} fa-${name} fa-fw`} {...i} />;
  }
  return <i className={`fa${clazz} fa-${name}`} {...i} />;
}
