import "./ListItem.scss";

import Button from "../Button/Button";

type ListItemProps = {
  title: string;
  id: number;
  name: string;
  disabled?: boolean;
  onArchive: () => void;
  onDelete: () => void;
};

const ListItem: React.FC<ListItemProps> = ({
  title,
  id,
  name,
  disabled = false,
  onArchive,
  onDelete,
}: ListItemProps) => {
  return (
    <li className={`list-item`}>
      <input
        onChange={() => onArchive()}
        id={`list-item-${id}`}
        name={name}
        type="checkbox"
        defaultChecked={disabled}
        disabled={disabled}
      />
      <label htmlFor={`list-item-${id}`}>{title}</label>
      <Button onClick={() => onDelete()}>X</Button>
    </li>
  );
};

export default ListItem;
