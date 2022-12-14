import { useSelector } from "react-redux";
import {
  CrewMemberDescription,
  CrewMemberImage,
  CrewMemberWrapper,
  Name,
  Title,
  Wrapper,
  Bio,
  CrewMemberImageWrapper,
} from "./Crew.styles";
import SubPageHeading from "../../components/SubPageHeading";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

export default function Crew() {
  const crewMembers = useSelector(({ allData }: IStore) => allData.data.crew);

  return (
    crewMembers && (
      <Wrapper>
        <SubPageHeading subpageNumber="02">MEET YOUR CREW</SubPageHeading>
        <Carousel>
          {crewMembers.map((member) => {
            return (
              <CarouselItem key={member.name}>
                <CrewMemberWrapper>
                  <CrewMemberDescription>
                    <Title>{member.role}</Title>
                    <Name>{member.name}</Name>
                    <Bio>{member.bio}</Bio>
                  </CrewMemberDescription>
                  <CrewMemberImageWrapper>
                    <CrewMemberImage
                      src={member.images.png}
                      alt={`${member.name} photo`}
                    />
                  </CrewMemberImageWrapper>
                </CrewMemberWrapper>
              </CarouselItem>
            );
          })}
        </Carousel>
      </Wrapper>
    )
  );
}
