import HeroSection from "../../components/Hero/HeroSection";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Layout/Hero",
  component: HeroSection,
};

export const HeroOne = () => {
  return <HeroSection title={undefined} />;
};
