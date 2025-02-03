import { Props } from "./GeneralText.component.type";

const GeneralText = ({ customStyle, text }: Props) => (
  <p className={`text-white ${customStyle}`}>{text}</p>
);

export default GeneralText;
