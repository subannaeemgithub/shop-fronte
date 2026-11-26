import React, { useState, useEffect } from 'react';
import { FiX, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { loginUser, signupUser } from '../frontApi/Api';

export default function AuthModal({ isOpen, onClose, initialMode = 'signin', onAuthSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setError('');
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!form.name || !form.email || !form.password) {
          setError('Please fill in all fields.');
          setLoading(false);
          return;
        }
        const res = await signupUser({
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password,
        });

        const token = res.signuptoken;
        const userData = res.data;
        if (token) localStorage.setItem('user_token', token);
        if (userData) localStorage.setItem('user_info', JSON.stringify(userData));

        if (onAuthSuccess) onAuthSuccess(userData);
        onClose();
      } else {
        if (!form.email || !form.password) {
          setError('Please provide email and password.');
          setLoading(false);
          return;
        }
        const res = await loginUser({
          email: form.email.trim(),
          password: form.password,
        });

        const token = res.logintoken;
        const userData = res.data;
        if (token) localStorage.setItem('user_token', token);
        if (userData) localStorage.setItem('user_info', JSON.stringify(userData));

        if (onAuthSuccess) onAuthSuccess(userData);
        onClose();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
        >
          <FiX className="h-5 w-5" />
        </button>

        {/* Tab Header */}
        <div className="mb-6 flex border-b border-gray-100">
          <button
            type="button"
            onClick={() => { setMode('signin'); setError(''); }}
            className={`flex-1 pb-3 text-center text-sm font-semibold transition-colors ${
              mode === 'signin'
                ? 'border-b-2 border-[#00B207] text-[#00B207]'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            className={`flex-1 pb-3 text-center text-sm font-semibold transition-colors ${
              mode === 'signup'
                ? 'border-b-2 border-[#00B207] text-[#00B207]'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-700">Full Name</label>
              <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2 focus-within:border-[#00B207]">
                <FiUser className="mr-2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-700">Email Address</label>
            <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2 focus-within:border-[#00B207]">
              <FiMail className="mr-2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-700">Password (min 4 characters)</label>
            <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2 focus-within:border-[#00B207]">
              <FiLock className="mr-2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                required
                minLength={4}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#00B207] py-2.5 text-sm font-semibold text-white shadow transition hover:bg-[#009a06] disabled:opacity-60"
          >
            {loading ? 'Please wait...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Bottom Switch Note */}
        <p className="mt-4 text-center text-xs text-gray-500">
          {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}
            className="font-semibold text-[#00B207] hover:underline"
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}
