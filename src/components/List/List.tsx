type ListProps = {
  children: React.ReactNode;
};

import "./List.scss";

const List: React.FC<ListProps> = ({ children }) => {
  return <ul className="list">{children}</ul>;
};

export default List;
