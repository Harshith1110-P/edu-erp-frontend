import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <nav style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '60px',
              height: '30px',
              backgroundColor: '#1e40af',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              color: 'white'
            }}>
              KL
            </div>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#111827'
            }}>
              Student Dashboard
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#374151' }}>Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '1.5rem 1rem'
      }}>
        <div style={{ padding: '1.5rem 0' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1.5rem'
          }}>
            Student Portal
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Academic Records */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: '#dbeafe',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '1.25rem', flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#111827'
                    }}>
                      Academic Records
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginTop: '0.25rem'
                    }}>
                      View Grades & Transcripts
                    </p>
                  </div>
                </div>
              </div>
              <div style={{
                backgroundColor: '#f9fafb',
                padding: '1rem 1.25rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <button
                  onClick={() => navigate('/academic-records')}
                  style={{
                    color: '#4f46e5',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                >
                  View details →
                </button>
              </div>
            </div>

            {/* Attendance */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: '#dcfce7',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '1.25rem', flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#111827'
                    }}>
                      Attendance
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginTop: '0.25rem'
                    }}>
                      Track Your Attendance
                    </p>
                  </div>
                </div>
              </div>
              <div style={{
                backgroundColor: '#f9fafb',
                padding: '1rem 1.25rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <button
                  onClick={() => navigate('/attendance')}
                  style={{
                    color: '#4f46e5',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                >
                  View details →
                </button>
              </div>
            </div>

            {/* Teacher Interaction */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: '#fef3c7',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#d97706' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '1.25rem', flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#111827'
                    }}>
                      Communication
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginTop: '0.25rem'
                    }}>
                      Message Teachers
                    </p>
                  </div>
                </div>
              </div>
              <div style={{
                backgroundColor: '#f9fafb',
                padding: '1rem 1.25rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <button
                  onClick={() => navigate('/message-teacher')}
                  style={{
                    color: '#4f46e5',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                >
                  View details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;