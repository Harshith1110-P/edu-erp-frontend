import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock authentication - in real app, this would be an API call
    if (email && password) {
      const userData = {
        id: 1,
        email,
        role,
        name: role === 'student' ? 'John Doe' : 'Jane Smith',
      };
      login(userData);
      navigate(`/${role}-dashboard`);
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      padding: '3rem 1rem'
    }}>
      <div style={{
        maxWidth: '28rem',
        width: '100%',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '200px',
              height: '100px',
              backgroundColor: '#1e40af',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'white',
              boxShadow: '0 10px 25px rgba(30, 64, 175, 0.3)'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>KL</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'normal' }}>University</div>
            </div>
            <div style={{
              width: '300px',
              height: '3px',
              backgroundColor: '#4f46e5',
              marginBottom: '1.5rem',
              borderRadius: '2px'
            }}></div>
          </div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '0.5rem'
          }}>
            Sign in to your account
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginTop: '0.5rem',
            color: '#6b7280',
            fontWeight: '500'
          }}>
            KL University ERP System
          </p>
          <p style={{
            fontSize: '0.95rem',
            marginTop: '0.5rem',
            color: '#9ca3af'
          }}>
            Access your educational dashboard
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{ spaceY: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="role" style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                backgroundColor: 'white',
                color: '#374151'
              }}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email-address" style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem'
              }}
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem'
              }}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div style={{
              color: '#dc2626',
              fontSize: '0.875rem',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
            >
              Sign in
            </button>
          </div>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="/signup" style={{
            color: '#4f46e5',
            textDecoration: 'none',
            fontSize: '0.875rem'
          }}>
            Don't have an account? Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;