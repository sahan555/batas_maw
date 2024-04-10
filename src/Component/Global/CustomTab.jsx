export const CustomTab = ({ onClick, children, className }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};
CustomTab.tabsRole = "Tab";
