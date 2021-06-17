import katex from "katex";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Formula, MathFunction, MathPoint } from ".";
import FontAwesome from "../FontAwesome";

export default function Board({ formulas }: { formulas: Formula[] }) {
  return (
    <Container>
      <FormulaList>
        {formulas.map((f, i) => {
          if (f.type === "function") {
            return <FunctionElement key={i} func={f.data} />;
          } else if (f.type === "point") {
            return <PointElement key={i} point={f.data} />;
          }
        })}
      </FormulaList>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    max-height: 192px;
  }
`;

const FormulaList = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    position: inherit;
    max-height: 192px;
  }
`;

function FormulaElement({ type, color, children }: PropsWithChildren<{ type: string; color: string }>) {
  return (
    <FormulaContainer>
      <FormulaIconWrapper>
        <FontAwesome type={type} style={{ color }} fixed={true} />
      </FormulaIconWrapper>
      <FormulaBody children={children} />
    </FormulaContainer>
  );
}

const FormulaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  min-height: 28px;
  width: 100%;
  border-bottom: 1px lightgray solid;
  overflow-x: auto;
  white-space: nowrap;

  &:last-child {
    border-bottom: none;
  }
`;

const FormulaIconWrapper = styled.div`
  margin-right: 12px;
  font-size: 18px;
`;

const FormulaBody = styled.div``;

function FunctionElement({ func }: { func: MathFunction }) {
  return (
    <FormulaElement type="signature" color={func.color}>
      <FunctionContainer dangerouslySetInnerHTML={{ __html: katex.renderToString("\\displaystyle " + func.label) }} />
    </FormulaElement>
  );
}

const FunctionContainer = styled.div``;

function PointElement({ point }: { point: MathPoint }) {
  return (
    <FormulaElement type="circle" color={point.color}>
      <PointContainer dangerouslySetInnerHTML={{ __html: katex.renderToString(`\\displaystyle ${point.label}`) }} />
    </FormulaElement>
  );
}

const PointContainer = styled.div``;
