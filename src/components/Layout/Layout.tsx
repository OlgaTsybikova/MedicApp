type Props = {
  children?: JSX.Element | JSX.Element[];
};
function Layout({ children }: Props) {
  return (
    <div>
      <main className="main">{children}</main>
    </div>
  );
}

export default Layout;
