import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full" />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
}
