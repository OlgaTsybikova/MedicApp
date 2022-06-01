import LayoutStyled from "./LayoutStyled";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
function Layout({ children }: Props) {
  return (
    <LayoutStyled className="md:container md:mx-auto bg-gradient-to-r from-cyan-100 to-blue-200">
      <main className="main">{children}</main>
    </LayoutStyled>
  );
}

export default Layout;
