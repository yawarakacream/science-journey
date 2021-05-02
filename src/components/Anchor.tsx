import Link from "next/link";
import { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  href: string;
  changeColorIfVisited?: boolean;
};

export default function Anchor({
  href,
  children,
  changeColorIfVisited = true,
  ...a
}: PropsWithChildren<Props & JSX.IntrinsicElements["a"]>) {
  return (
    <Link href={href} passHref>
      <A changeColorIfVisited={changeColorIfVisited} {...a}>
        {children}
      </A>
    </Link>
  );
}

const A = styled.a<{ changeColorIfVisited: boolean } & any>`
  color: black;

  &:visited {
    color: ${(p) => (p.changeColorIfVisited ? "gray" : "black")};
  }
`;
