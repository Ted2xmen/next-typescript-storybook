import Badges from "../../components/UI/Badges";
import styled from "styled-components";

export default {
  title: "Components/Badges",
  component: Badges,
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

export const Background = () => {
  return (
    <Wrapper>
      <Badges>No attr</Badges>

      <Badges size="sm" variant="now">
        Machine Gun Kelly play this when i'm gone
      </Badges>

      <Badges size="sm" variant="success" rounded>
        Success SM
      </Badges>

      <Badges size="lg" variant="warning" rounded>
        Warning LG
      </Badges>

      <Badges size="lg" variant="danger">
        Danger LG
      </Badges>

      <Badges size="sm" variant="info">
        Info SM
      </Badges>
    </Wrapper>
  );
};

