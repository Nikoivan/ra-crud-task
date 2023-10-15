export default function CRUDButton({
  styleNames,
  callback,
  url,
}: {
  styleNames: { containerName: string; imgName: string };
  callback: () => void;
  url: string;
}) {
  return (
    <span
      onClick={callback}
      className={`${styleNames.containerName}__update-btn`}
    >
      <img src={url} alt="update" className={`${styleNames.imgName}__img`} />
    </span>
  );
}
