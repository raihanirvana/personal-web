import { Link } from 'react-router-dom';

import { Props } from './NavigationButton.component.type';

/**
 * function to render button for navigation
 *
 * @param {string} text text will visible
 * @returns {JSX.Element} return jsx element
 */
const NavigationButton = ({ text, navigate }: Props): JSX.Element => (
  <Link to={navigate} className="border-white border-2 border-solid text-center rounded-xl p-2 text-white w-50 hover:cursor-pointer text-2xl font-mono hover:border-b-4 hover:border-white-400 hover:bg-black hover:rounded-lg">
    {text}
  </Link>
);

export default NavigationButton;
