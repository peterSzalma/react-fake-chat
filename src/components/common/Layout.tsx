import styled from "styled-components";

interface LayoutProps {
  width?: string;
  height?: string;
  columns: number | string;
  rows: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
}

export const Layout = styled.div.attrs({name: "Layout"})<LayoutProps>`
  display: grid;
  width: ${({ width = "100%" }) => width};
  height: ${({ height = '100%' }) => height};
  grid-template-columns: ${(props) => {
    const c = +props.columns;
    return `repeat(${c}, 1fr)`;
  }};
  grid-template-rows: ${(props) => {
    const r = +props.rows;
    return `repeat(${r}, 1fr)`;
  }};
  column-gap: ${({ columnGap = 10 }) => `${columnGap}px`};
  row-gap: ${({ rowGap = 10 }) => `${rowGap}px`};
`;
