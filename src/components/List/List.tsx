import "./List.scss";

type ListProps = {
  archived?: boolean;
  children: React.ReactNode;
};

const List: React.FC<ListProps> = ({ children, archived = false }) => {
  return (
    <ul className={`list ${archived ? "list--archived" : ""}`}>{children}</ul>
  );
};

export default List;
