import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ClassSchedule = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock schedule data
  const [schedule] = useState([
    {
      id: 1,
      day: 'Monday',
      classes: [
        { time: '09:00 - 10:30', subject: 'Data Structures', room: 'CS-101', type: 'Lecture' },
        { time: '11:00 - 12:30', subject: 'Mathematics', room: 'MATH-201', type: 'Tutorial' },
        { time: '02:00 - 03:30', subject: 'Physics', room: 'PHY-301', type: 'Lab' }
      ]
    },
    {
      id: 2,
      day: 'Tuesday',
      classes: [
        { time: '09:00 - 10:30', subject: 'Chemistry', room: 'CHEM-101', type: 'Lecture' },
        { time: '11:00 - 12:30', subject: 'Computer Science', room: 'CS-102', type: 'Practical' },
        { time: '02:00 - 03:30', subject: 'English', room: 'ENG-201', type: 'Lecture' }
      ]
    },
    {
      id: 3,
      day: 'Wednesday',
      classes: [
        { time: '09:00 - 10:30', subject: 'Data Structures', room: 'CS-101', type: 'Tutorial' },
        { time: '11:00 - 12:30', subject: 'Mathematics', room: 'MATH-201', type: 'Lecture' }
      ]
    },
    {
      id: 4,
      day: 'Thursday',
      classes: [
        { time: '09:00 - 10:30', subject: 'Physics', room: 'PHY-301', type: 'Lecture' },
        { time: '11:00 - 12:30', subject: 'Chemistry', room: 'CHEM-101', type: 'Lab' },
        { time: '02:00 - 03:30', subject: 'Computer Science', room: 'CS-102', type: 'Lecture' }
      ]
    },
    {
      id: 5,
      day: 'Friday',
      classes: [
        { time: '09:00 - 10:30', subject: 'English', room: 'ENG-201', type: 'Tutorial' },
        { time: '11:00 - 12:30', subject: 'Data Structures', room: 'CS-101', type: 'Practical' }
      ]
    }
  ]);

  const [selectedDay, setSelectedDay] = useState('Monday');
  const [showAddClass, setShowAddClass] = useState(false);
  const [newClass, setNewClass] = useState({
    time: '',
    subject: '',
    room: '',
    type: 'Lecture'
  });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const currentSchedule = schedule.find(day => day.day === selectedDay);

  const handleAddClass = () => {
    // In real app, this would add to backend
    console.log('Adding new class:', newClass);
    setShowAddClass(false);
    setNewClass({ time: '', subject: '', room: '', type: 'Lecture' });
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Lecture': return '#dbeafe';
      case 'Tutorial': return '#dcfce7';
      case 'Practical': return '#fef3c7';
      case 'Lab': return '#fee2e2';
      default: return '#f3f4f6';
    }
  };

  const getTypeTextColor = (type) => {
    switch (type) {
      case 'Lecture': return '#1e40af';
      case 'Tutorial': return '#166534';
      case 'Practical': return '#92400e';
      case 'Lab': return '#991b1b';
      default: return '#374151';
    }
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
            <button
              onClick={() => navigate('/teacher-dashboard')}
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
              Class Schedule
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#374151' }}>Welcome, {user?.name}</span>
            <button
              onClick={() => setShowAddClass(true)}
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
            >
              Add Class
            </button>
          </div>
        </div>
      </nav>

      <main style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        {/* Day Selector */}
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
            Weekly Schedule
          </h2>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: '1px solid #d1d5db',
                  backgroundColor: selectedDay === day ? '#4f46e5' : 'white',
                  color: selectedDay === day ? 'white' : '#374151',
                  cursor: 'pointer'
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Schedule */}
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
              {selectedDay} Schedule
            </h2>
          </div>
          <div>
            {currentSchedule?.classes.length > 0 ? (
              currentSchedule.classes.map((classItem, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  borderBottom: index !== currentSchedule.classes.length - 1 ? '1px solid #e5e7eb' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      {classItem.time.split(' - ')[0]}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#111827'
                      }}>
                        {classItem.subject}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        marginTop: '0.25rem'
                      }}>
                        {classItem.time} • Room {classItem.room}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      backgroundColor: getTypeColor(classItem.type),
                      color: getTypeTextColor(classItem.type)
                    }}>
                      {classItem.type}
                    </span>
                    <button style={{
                      color: '#6b7280',
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      fontSize: '1.125rem'
                    }}>
                      ⋯
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: '#6b7280'
              }}>
                No classes scheduled for {selectedDay}.
              </div>
            )}
          </div>
        </div>

        {/* Weekly Overview */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          padding: '1.5rem',
          marginTop: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Weekly Overview
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {schedule.map((day) => (
              <div key={day.id} style={{
                padding: '1rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                backgroundColor: selectedDay === day.day ? '#f0f9ff' : 'white'
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  {day.day}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  {day.classes.length} classes
                </p>
                <div style={{
                  marginTop: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#374151'
                }}>
                  {day.classes.length > 0 && (
                    <div>
                      First: {day.classes[0].time.split(' - ')[0]}<br />
                      Last: {day.classes[day.classes.length - 1].time.split(' - ')[1]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Class Modal */}
        {showAddClass && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '2rem',
              maxWidth: '28rem',
              width: '100%',
              margin: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Add New Class
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Day
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
                >
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
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
                  Time
                </label>
                <input
                  type="text"
                  placeholder="e.g., 09:00 - 10:30"
                  value={newClass.time}
                  onChange={(e) => setNewClass({...newClass, time: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
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
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject name"
                  value={newClass.subject}
                  onChange={(e) => setNewClass({...newClass, subject: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
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
                  Room
                </label>
                <input
                  type="text"
                  placeholder="Room number"
                  value={newClass.room}
                  onChange={(e) => setNewClass({...newClass, room: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
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
                  Type
                </label>
                <select
                  value={newClass.type}
                  onChange={(e) => setNewClass({...newClass, type: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <option value="Lecture">Lecture</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Practical">Practical</option>
                  <option value="Lab">Lab</option>
                </select>
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <button
                  onClick={() => setShowAddClass(false)}
                  style={{
                    flex: 1,
                    backgroundColor: '#6b7280',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddClass}
                  style={{
                    flex: 1,
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Add Class
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ClassSchedule;