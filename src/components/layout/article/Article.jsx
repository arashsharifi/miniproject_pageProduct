import React from "react";
import style from "./Article.module.css";
import styled from "styled-components";

const Card = styled.div`
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  max-width: 430px;
  padding: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  opacity: 0.9;
`;
const TitleCard = styled.div`
  z-index: 100;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 4rem;
  justify-content: space-between;
`;
const SpanElement = styled.span`
  font-size: large;
`;
const H1Element = styled.h1`
  font-size: 25px;
`;

const PElement = styled.p`
  width: 80%;
  font-size: small;
  text-align: center;
`;
const Btn = styled.button`
  border: none;
  background-color: #56b280;
  color: white;
  padding: 0.3rem 0.8rem;
  width: 70%;
  border-radius: 0.25rem;
`;
export function Article() {
  return (
    <div className={style.container}>
      <Card>
        <TitleCard>
          <SpanElement>🌱</SpanElement>
          <H1Element> The nature candle</H1Element>
        </TitleCard>
        <PElement>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments{" "}
        </PElement>
        <Btn>Discovery our collection</Btn>
      </Card>
    </div>
  );
}
