import { useState } from "react";
import { useSelector } from "react-redux";
import SubPageHeading from "../../components/SubPageHeading";
import {
  Wrapper,
  Technologies,
  TechInformation,
  Heading,
  Description,
  TechImageWrapper,
  TechImage,
} from "./Tech.styles";
import TechSwitch from "./TechSwitch";

export default function Tech() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const technologies = useSelector(
    ({ allData }: IStore) => allData.data.technology
  );

  return (
    technologies && (
      <Wrapper>
        <SubPageHeading subpageNumber="03">SPACE LAUNCH 101</SubPageHeading>
        <Technologies>
          <TechSwitch
            setActiveTechIndex={setActiveTechIndex}
            activeTechIndex={activeTechIndex}
          />
          <TechInformation>
            <Heading>{technologies[activeTechIndex].name}</Heading>
            <Description>
              {technologies[activeTechIndex].description}
            </Description>
          </TechInformation>
          <TechImageWrapper>
            <TechImage
              src={technologies[activeTechIndex].images.portrait}
              alt="tech"
            />
          </TechImageWrapper>
        </Technologies>
      </Wrapper>
    )
  );
}
