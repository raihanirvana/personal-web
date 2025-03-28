import React from 'react';

import GeneralText from '../GeneralText';

const useTypingEffect = (
  index: number, setIndex: React.Dispatch<React.SetStateAction<number>>, 
  text: string, setTypedText: React.Dispatch<React.SetStateAction<string>>
) => {
  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);
};

const useTypewriterEffect = (text: string) => {
  const [typedText, setTypedText] = React.useState("");
  const [index, setIndex] = React.useState(0);

  useTypingEffect(index, setIndex, text, setTypedText);

  return typedText;
};

const TypewriterEffect = ({ text, customStyle }: { text: string; customStyle?: string }) => {
  const typedText = useTypewriterEffect(text);

  return <GeneralText text={typedText} customStyle={customStyle} />;
};

export default TypewriterEffect;
