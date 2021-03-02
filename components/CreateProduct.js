import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('bag');
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }}
      />
    </form>
  );
}
