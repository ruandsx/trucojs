import { Wrapper } from "./Container.styled";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
