import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

import { Name, UseShowSecondText } from './NameDisplay.component.type';

/**
 * hooks for show second text and get typewriter props
 * 
 * @param {string} firstName first name
 * @param {string} secondName second name
 * @returns {UseShowSecondText} flag for show second text
 */
const useTypeWriterText = (firstName: string, secondName: string): UseShowSecondText => {
  const [showSecondText, setShowSecondText] = React.useState<boolean>(false);

  const [typedFirstName] = useTypewriter({
    words: [firstName],
    loop: 1,
    typeSpeed: 200,
    onLoopDone: () => { setTimeout(() => setShowSecondText(true), 500) },
  });

  const [typedSecondName] = useTypewriter({ words: [secondName], loop: 1, typeSpeed: 250, });

  return { showSecondText, typedFirstName, typedSecondName };
}


/**
 * Component to display two names sequentially using a typewriter effect.
 *
 * @param {string} props.firstName - The first name to be displayed.
 * @param {string} props.secondName - The second name to be displayed after the first one.
 * @returns {JSX.Element} - A React component rendering the typewriter effect for both names.
 */
const NameDisplay = ({ firstName, secondName }: Name): JSX.Element => {
  const { showSecondText, typedFirstName, typedSecondName } = useTypeWriterText(firstName, secondName)

  return (
    <div className="text-white">
      <p className="text-5xl font-rigid-reguler">{typedFirstName}</p>
      {showSecondText && (
        <p className="text-9xl font-rigid-medium">{typedSecondName}</p>
      )}
    </div>
  );
};

export default NameDisplay;
