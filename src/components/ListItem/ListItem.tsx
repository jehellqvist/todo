type ListItemProps = { index: number; title: string; description?: string };

const ListItem: React.FC<ListItemProps> = ({ index, title }: ListItemProps) => {
  return <li id={`list-item ${index}`}>{title}</li>;
};

export default ListItem;
