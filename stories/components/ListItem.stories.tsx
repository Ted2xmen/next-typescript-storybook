import ListItem from "../../components/ListItem";

export default {
  title: "Components/ListItem",
  component: ListItem,
};

export const List = (): JSX.Element => (
  <ListItem
    src="https://yt3.ggpht.com/tLOaVyDRQq46qga99PFlP9b3PRcni8gBJepNOecsgIdADpxU10p6w0VD-fZ8VvtqeldN6IHYOj0=s48-c-k-c0x00ffffff-no-rj"
    variant="primary"
    hover
    children="Storybook helps you build UI components in isolation from "
  />
);
