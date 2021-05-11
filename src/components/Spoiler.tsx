import { PropsWithChildren, useState } from "react";
import styled from "styled-components";

type Status = "open" | "close";

export default function Spoiler({ defaultStatus, children }: PropsWithChildren<{ defaultStatus: Status }>) {
  const [status, setStatus] = useState(defaultStatus);
  return (
    <Container>
      <Label onClick={() => setStatus(status === "open" ? "close" : "open")}>
        {{ open: "▼ クリックで閉じる", close: "▶︎ クリックで開く" }[status]}
      </Label>
      {status === "open" && <Content children={children} />}
    </Container>
  );
}

const Container = styled.div`
  margin: 8px;

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.p`
  cursor: pointer;
  color: slateblue;

  &:hover {
    color: darkslateblue;
    transition: color 0.2s;
  }
`;

const Content = styled.div`
  margin: 2px 0 0 calc(0.5rem - 2px);
  padding: 8px;
  border-left: 4px solid purple;
`;
