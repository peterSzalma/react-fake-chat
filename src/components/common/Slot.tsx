import styled from "styled-components";

interface SlotProps {
  color?: string;
  area?: string;
  column?: [number, number] | string;
  row?: [number, number] | string;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
}

const template = (x: [number, number] | string)=>{
  switch (typeof x) {
    case "object": return x.join(' / span ');
    case "string": return `${x} / span 1`;
    default:
      break;
  }
}

export const Slot = styled.section<SlotProps>`
    ${({color}) => typeof color !== "undefined" ? `background-color: ${color};` : 'background-color: white;' };
    ${({area}) => typeof area !== "undefined" ? `grid-area: ${area};` : '' };
    ${({column}) => typeof column !== "undefined" ? `grid-column: ${template(column)};` : '' };
    ${({row}) => typeof row !== "undefined" ? `grid-row: ${template(row)};` : '' };
    ${({direction}) => typeof direction !== "undefined" ? `flex-direction: ${direction};` : '' };
    ${({alignItems}) => typeof alignItems !== "undefined" ? `align-items: ${alignItems};` : '' };
    ${({justifyContent}) => typeof justifyContent !== "undefined" ? `justify-content: ${justifyContent};` : '' };
    display: grid;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 20px;
  `;

