import Btn from "../../components/Button";

export default {
  title: "Components/Buttons",
  component: Btn,
};

export const Primary = () => (
  <Btn variant="primary">
    Primary
  </Btn>
);

export const Secondary = () => (
  <Btn size="lg" variant="secondary">
    Secondary 
  </Btn>
);

export const Sizes = () => (
  <div>
    <Btn size="lg" variant="primary">
      Size LG
    </Btn>
    <Btn size="sm" variant="secondary">
      Size SM
    </Btn>
  </div>
);

export const RadiusAndShadow = () => (
  <div>
    <Btn shadow rounded size="lg" variant="primary">
      Size LG
    </Btn>
    <Btn shadow size="sm" variant="secondary">
      Size SM
    </Btn>
  </div>
);