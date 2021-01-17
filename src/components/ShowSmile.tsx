import React from 'react';
import Picker, { IEmojiData } from 'emoji-picker-react';

type Props = {
  handleSelectEmoji: (emoji: string) => void
}

export const ShowSmile: React.FC<Props> = ({ handleSelectEmoji }) => {
  const onEmojiClick = (event: unknown, emojiObject: IEmojiData) => {
    handleSelectEmoji(emojiObject.emoji);
  };
  return (
    <Picker onEmojiClick={onEmojiClick}/>
  );
};