import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Text,
  Container,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";
interface Props {
  name: string;
}
const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://www.nelsonds.com"> wwww.nelsonds.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
