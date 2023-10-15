import "./CRUDFooter.css";
import imgUrl from "../../../assets/images/send.png";
import CRUDButton from "../Button/CRUDButton";
import { ChangeEvent } from "react";

export default function CRUDFooter({
  onChangeHandler,
  callback,
}: {
  onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  callback: () => void;
}) {
  return (
    <footer className="crud__footer">
      <h2 className="footer__title">New Note</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="footer__form"
      >
        <textarea
          onChange={onChangeHandler}
          name="content"
          className="form__input"
        />
        <CRUDButton
          styleNames={{ containerName: "footer", imgName: "send" }}
          callback={callback}
          url={imgUrl}
        />
      </form>
    </footer>
  );
}
