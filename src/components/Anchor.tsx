import Link from "next/link";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface StyleProps {
  underline: boolean;
  changeColorIfVisited: boolean;
}

export default function Anchor({
  href,
  children,
  underline = true,
  changeColorIfVisited = true,
  ...a
}: PropsWithChildren<{ href: string } & Partial<StyleProps> & JSX.IntrinsicElements["a"]>) {
  return (
    <Link href={href} prefetch={false} passHref>
      <A underline={underline} changeColorIfVisited={changeColorIfVisited} {...a}>
        {children}
      </A>
    </Link>
  );
}

const A = styled.a<StyleProps & any>`
  color: black;
  text-decoration: ${(p) => (p.underline ? "underline" : "none")};

  &:visited {
    color: ${(p) => (p.changeColorIfVisited ? "gray" : "black")};
  }
`;
