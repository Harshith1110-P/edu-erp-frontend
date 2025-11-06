import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const MessageTeacher = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      id: 1,
      teacher: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      message: 'Please review the homework submission for Chapter 5.',
      timestamp: '2024-11-04 10:30 AM',
      isFromStudent: true,
      status: 'sent'
    },
    {
      id: 2,
      teacher: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      message: 'Your homework has been reviewed. Great work on the calculus problems!',
      timestamp: '2024-11-04 02:15 PM',
      isFromStudent: false,
      status: 'read'
    },
    {
      id: 3,
      teacher: 'Prof. Michael Chen',
      subject: 'Physics',
      message: 'Could you please clarify the concept of quantum entanglement?',
      timestamp: '2024-11-03 09:45 AM',
      isFromStudent: true,
      status: 'sent'
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    teacher: '',
    subject: '',
    message: ''
  });

  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [showCompose, setShowCompose] = useState(false);

  const teachers = [
    { id: 1, name: 'Dr. Sarah Johnson', subject: 'Mathematics' },
    { id: 2, name: 'Prof. Michael Chen', subject: 'Physics' },
    { id: 3, name: 'Dr. Emily Davis', subject: 'Chemistry' },
    { id: 4, name: 'Prof. Robert Wilson', subject: 'Computer Science' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.teacher && newMessage.subject && newMessage.message) {
      const message = {
        id: messages.length + 1,
        teacher: newMessage.teacher,
        subject: newMessage.subject,
        message: newMessage.message,
        timestamp: new Date().toLocaleString(),
        isFromStudent: true,
        status: 'sent'
      };
      setMessages([message, ...messages]);
      setNewMessage({ teacher: '', subject: '', message: '' });
      setShowCompose(false);
    }
  };

  const filteredMessages = selectedTeacher
    ? messages.filter(msg => msg.teacher === selectedTeacher)
    : messages;

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
            <button
              onClick={() => navigate('/student-dashboard')}
              style={{
                color: '#4f46e5',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              ← Back to Dashboard
            </button>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#111827'
            }}>
              Message Teachers
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#374151' }}>Welcome, {user?.name}</span>
            <button
              onClick={() => setShowCompose(!showCompose)}
              style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
            >
              {showCompose ? 'Cancel' : 'Compose Message'}
            </button>
          </div>
        </div>
      </nav>

      <main style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        {/* Compose Message Form */}
        {showCompose && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem'
            }}>
              Compose New Message
            </h2>
            <form onSubmit={handleSendMessage}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Select Teacher
                </label>
                <select
                  value={newMessage.teacher}
                  onChange={(e) => {
                    const selectedTeacher = teachers.find(t => t.name === e.target.value);
                    setNewMessage({
                      ...newMessage,
                      teacher: e.target.value,
                      subject: selectedTeacher ? selectedTeacher.subject : ''
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
                  required
                >
                  <option value="">Choose a teacher...</option>
                  {teachers.map(teacher => (
                    <option key={teacher.id} value={teacher.name}>
                      {teacher.name} - {teacher.subject}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={newMessage.subject}
                  onChange={(e) => setNewMessage({...newMessage, subject: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
                  placeholder="Message subject..."
                  required
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Message
                </label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                  placeholder="Type your message here..."
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setShowCompose(false)}
                  style={{
                    backgroundColor: '#6b7280',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#4b5563'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#6b7280'}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Teacher Filter */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151'
            }}>
              Filter by Teacher:
            </label>
            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              style={{
                padding: '0.5rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '0.875rem'
              }}
            >
              <option value="">All Teachers</option>
              {teachers.map(teacher => (
                <option key={teacher.id} value={teacher.name}>
                  {teacher.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Messages List */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111827'
            }}>
              Message History
            </h2>
          </div>
          <div>
            {filteredMessages.length === 0 ? (
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: '#6b7280'
              }}>
                No messages found.
              </div>
            ) : (
              filteredMessages.map((message) => (
                <div key={message.id} style={{
                  padding: '1.5rem',
                  borderBottom: '1px solid #e5e7eb',
                  backgroundColor: message.isFromStudent ? '#f9fafb' : 'white'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#111827'
                      }}>
                        {message.teacher} - {message.subject}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        marginTop: '0.25rem'
                      }}>
                        {message.timestamp}
                      </p>
                    </div>
                    <span style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      backgroundColor: message.status === 'read' ? '#dcfce7' : '#fef3c7',
                      color: message.status === 'read' ? '#166534' : '#92400e'
                    }}>
                      {message.status}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#374151',
                    lineHeight: '1.5'
                  }}>
                    {message.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MessageTeacher;