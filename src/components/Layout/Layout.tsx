import LayoutStyled from "./LayoutStyled";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
function Layout({ children }: Props) {
  return (
    <LayoutStyled className=" bg-gradient-to-r from-emerald-100 to-pink-100 md:from-emerald-100">
      <main className="main">{children}</main>
    </LayoutStyled>
  );
}

export default Layout;
