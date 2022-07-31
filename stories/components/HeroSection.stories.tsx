import HeroSection from "../../components/Hero/HeroSection";

export default {
    title: "Layout/Hero",
    component: HeroSection
}

export const HeroOne = ({title}) => {
    return (
        <HeroSection title="Tuğrul Erdem Dogru" />
    )
}