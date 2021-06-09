export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <header>
        <div></div>
        {children}
      </header>
    </>
  );
};
