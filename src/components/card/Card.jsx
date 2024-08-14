import { useState } from "react";
import * as s from "./CardStyled";

export const Card = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <s.CardContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <s.ImageContainer>
        <s.Image
          src="https://phantom-expansion.unidadeditorial.es/ae81712455ae26ab06803f7dfbf32a12/crop/0x0/1950x1300/resize/828/f/webp/assets/multimedia/imagenes/2023/06/12/16865594231723.jpg"
          alt="Imagen 1"
          isHover={isHover}
        />
        <s.Image
          src="https://www.sandiegouniontribune.com/wp-content/uploads/migration/2023/06/07/00000188-9793-d760-a7bc-9f9fc2f10001.jpg?w=1024"
          alt="Imagen 2"
          isHover={!isHover}
        />
      </s.ImageContainer>
      <s.Button>Campeón del mundo</s.Button>
    </s.CardContainer>
  );
};
