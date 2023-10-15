import { CrudCardProps } from "../CRUDTypes";
import "./CRUDCard.css";

type ExpandedCardType = CrudCardProps & { callback(id: number): void };

export default function CRUDCard({ content, id, callback }: ExpandedCardType) {
  return (
    <div className="card">
      <span
        onClick={() => {
          console.log("delete");
          callback(id);
        }}
        className="card__close-btn"
      >
        &#10060;
      </span>
      <p className="card__content">{content}</p>
    </div>
  );
}
