import React, { CSSProperties, useState } from 'react';
import Select, { AriaOnFocus } from 'react-select';
import { LetterOption, letters } from './menus/options';

function Letters() {
  const [ariaFocusMessage, setAriaFocusMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const style: { [key: string]: CSSProperties } = {
    blockquote: {
      fontStyle: 'italic',
      fontSize: '.75rem',
      margin: '1rem 0',
    },
    label: {
      fontSize: '.75rem',
      fontWeight: 'bold',
      lineHeight: 2,
    },
  };

  const onFocus: AriaOnFocus<LetterOption> = ({ focused, isDisabled }) => {
    const msg = `You are currently focused on option ${focused.label}${
      isDisabled ? ', disabled' : ''
    }`;
    setAriaFocusMessage(msg);
    return msg;
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <form>
      <label style={style.label} id="letter-label" htmlFor="aria-letter-input">
        Select a first letter
      </label>

      {!!ariaFocusMessage && !!isMenuOpen && (
        <blockquote style={style.blockquote}>"{ariaFocusMessage}"</blockquote>
      )}

      <Select
        aria-labelledby="aria-label"
        ariaLiveMessages={{
          onFocus,
        }}
        inputId="aria-example-input"
        name="aria-live-gender"
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        options={letters}
      />
    </form>
  );
}
export default Letters;