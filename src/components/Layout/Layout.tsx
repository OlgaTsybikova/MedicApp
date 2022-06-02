import LayoutStyled from "./LayoutStyled";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
function Layout({ children }: Props) {
  return (
    <LayoutStyled className="bg-main-img bg-cover h-screen w-screen">
      <main className="main">{children}</main>
    </LayoutStyled>
  );
}

export default Layout;
