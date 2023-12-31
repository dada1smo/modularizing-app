import React, { ChangeEventHandler } from 'react';

interface DonationCheckboxProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  content: string;
}

const DonationCheckbox = ({
  onChange,
  checked,
  content,
}: DonationCheckboxProps) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <p>{content}</p>
      </label>
    </div>
  );
};

export default DonationCheckbox;
