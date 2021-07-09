import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Harsh Prajapati
          <br />
        </SectionTitle>
        <SectionText>
          I build interactive websites that run across platforms & devices.
        </SectionText>
        <Button>
          <a
            style={{ color: "white" }}
            href="https://drive.google.com/file/d/1dBmvfVDSG5LYIcReQx6y9Mut7PV7rEmV/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
