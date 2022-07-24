import Btn from "../../components/Button";

export default {
  title: "Components/Btn",
  component: Btn,
};

export const Primary = () => (
  <Btn shadow size="sm" variant="primary">
    Click click
  </Btn>
);

export const Secondary = () => (
  <Btn rounded size="lg" variant="secondary">
    Click click 2
  </Btn>
);