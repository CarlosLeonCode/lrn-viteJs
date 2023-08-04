import "./styles.css";

const Aside = ({ children, isAsideOpen}) => {
  return (
    <aside
      className={`${
        isAsideOpen ? "flex" : "hidden"
      } drop-shadow-lg aside-container flex flex-col fixed right-0 border rounded-lg bg-white p-6 overflow-y-auto`}
    >
      {children}
    </aside>
  );
};

export default Aside
