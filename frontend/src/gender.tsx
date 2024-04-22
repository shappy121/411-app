import React, { CSSProperties, useState } from 'react';
import Select, { AriaOnFocus } from 'react-select';
import { GenderOption, Genders } from './menus/options';

function Gender() {
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

  const onFocus: AriaOnFocus<GenderOption> = ({ focused, isDisabled }) => {
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
      <label style={style.label} id="gender" htmlFor="aria-gender-input">
        Select a gender
      </label>

      {!!ariaFocusMessage && !!isMenuOpen && (
        <blockquote style={style.blockquote}>"{ariaFocusMessage}"</blockquote>
      )}

      <Select
        aria-labelledby="aria-label"
        ariaLiveMessages={{
          onFocus,
        }}
        inputId="aria-gender-input"
        name="aria-live-gender"
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        options={Genders}
      />
    </form>
  );
}
export default Gender;