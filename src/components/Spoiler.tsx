import { PropsWithChildren, useState } from "react";
import styled from "styled-components";

type Status = "open" | "close";

export default function Spoiler({
  defaultStatus,
  title,
  children,
}: PropsWithChildren<{ defaultStatus: Status; title: string | undefined }>) {
  const [status, setStatus] = useState(defaultStatus);
  return (
    <Container>
      <Label status={status} onClick={() => setStatus(status === "open" ? "close" : "open")}>
        {title ?? { open: "クリックで閉じる", close: "クリックで開く" }[status]}
      </Label>
      {status === "open" && <Content children={children} />}
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
`;

const Label = styled.span<{ status: Status }>`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  color: ${(p) => ({ open: "slateblue", close: "darkslateblue" }[p.status])};

  &:hover {
    color: ${(p) => ({ open: "darkslateblue", close: "slateblue" }[p.status])};
    transition: color 0.2s;
  }

  &:before {
    position: relative;
    content: "${(p) => ({ open: "▼", close: "▶︎" }[p.status])} ";
  }
`;

const Content = styled.div`
  margin: 8px 0 0 calc(0.5rem - 2px);
  padding: 8px;
  border-left: 4px solid slateblue;
`;
