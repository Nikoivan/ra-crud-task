import { CrudCardProps } from "../CRUDTypes";
import CRUDCard from "../Card/CRUDCard";
import "./CRUDMain.css";

export default function CRUDMain({
  cards,
  callback,
}: {
  cards: CrudCardProps[];
  callback: (id: number) => void;
}) {
  return (
    <main className="crud__main">
      <ul className="main__card-list">
        {cards.map((el) => (
          <CRUDCard key={el.id} callback={callback} {...el} />
        ))}
      </ul>
    </main>
  );
}
