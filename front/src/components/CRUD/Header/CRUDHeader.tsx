import url from "../../../assets/images/update.png";
import CRUDButton from "../Button/CRUDButton";
import "./CRUDHeader.css";

export default function CRUDHeader({ callback }: { callback: () => void }) {
  return (
    <div className="crud__header">
      <h2 className="header__title">Notes</h2>
      <CRUDButton
        styleNames={{ containerName: "header", imgName: "update" }}
        callback={callback}
        url={url}
      />
    </div>
  );
}
