import { Props } from './NavigationButton.component.type';

/**
 * function to render button for navigation
 *
 * @param {string} text text will visible
 * @returns {JSX.Element} return jsx element
 */
const NavigationButton = ({ text }: Props): JSX.Element => (
  <button className="border-white border-2 border-solid rounded-xl p-2 text-white w-50 hover:cursor-pointer text-2xl font-mono">
    {text}
  </button>
);

export default NavigationButton;
