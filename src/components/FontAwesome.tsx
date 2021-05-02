interface FontAwesomeProps {
  type: string;
  fixed?: boolean;
}

export default function FontAwesome({ type, fixed, ...i }: FontAwesomeProps & JSX.IntrinsicElements["i"]) {
  return <i className={fixed ? `fas fa-${type} fa-fw` : `fas fa-${type}`} {...i} />;
}
