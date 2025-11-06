import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock attendance data
  const [attendanceData] = useState([
    { date: '2024-11-01', subject: 'Mathematics', status: 'Present', time: '09:00 AM' },
    { date: '2024-11-01', subject: 'Physics', status: 'Present', time: '10:30 AM' },
    { date: '2024-11-02', subject: 'Chemistry', status: 'Absent', time: '09:00 AM' },
    { date: '2024-11-02', subject: 'Computer Science', status: 'Present', time: '11:00 AM' },
    { date: '2024-11-03', subject: 'Mathematics', status: 'Present', time: '09:00 AM' },
    { date: '2024-11-03', subject: 'English', status: 'Late', time: '02:00 PM' },
    { date: '2024-11-04', subject: 'Physics', status: 'Present', time: '10:30 AM' },
    { date: '2024-11-04', subject: 'Chemistry', status: 'Present', time: '09:00 AM' },
  ]);

  const calculateAttendanceStats = () => {
    const total = attendanceData.length;
    const present = attendanceData.filter(record => record.status === 'Present').length;
    const absent = attendanceData.filter(record => record.status === 'Absent').length;
    const late = attendanceData.filter(record => record.status === 'Late').length;
    const percentage = total > 0 ? ((present + late * 0.5) / total * 100).toFixed(1) : 0;

    return { total, present, absent, late, percentage };
  };

  const stats = calculateAttendanceStats();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present': return '#dcfce7';
      case 'Absent': return '#fee2e2';
      case 'Late': return '#fef3c7';
      default: return '#f3f4f6';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Present': return '#166534';
      case 'Absent': return '#991b1b';
      case 'Late': return '#92400e';
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
              Attendance Tracker
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#374151' }}>Welcome, {user?.name}</span>
          </div>
        </div>
      </nav>

      <main style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        {/* Attendance Statistics */}
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
            Attendance Summary
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{
              backgroundColor: '#dbeafe',
              padding: '1rem',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#1e40af'
              }}>
                {stats.percentage}%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#374151',
                marginTop: '0.25rem'
              }}>
                Overall Attendance
              </div>
            </div>
            <div style={{
              backgroundColor: '#dcfce7',
              padding: '1rem',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#166534'
              }}>
                {stats.present}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#374151',
                marginTop: '0.25rem'
              }}>
                Present
              </div>
            </div>
            <div style={{
              backgroundColor: '#fee2e2',
              padding: '1rem',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#991b1b'
              }}>
                {stats.absent}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#374151',
                marginTop: '0.25rem'
              }}>
                Absent
              </div>
            </div>
            <div style={{
              backgroundColor: '#fef3c7',
              padding: '1rem',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#92400e'
              }}>
                {stats.late}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#374151',
                marginTop: '0.25rem'
              }}>
                Late
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Records */}
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
              Recent Attendance Records
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f9fafb' }}>
                <tr>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Date
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Subject
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Time
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index} style={{
                    borderBottom: index !== attendanceData.length - 1 ? '1px solid #e5e7eb' : 'none'
                  }}>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827'
                    }}>
                      {new Date(record.date).toLocaleDateString()}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827'
                    }}>
                      {record.subject}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      {record.time}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem'
                    }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: getStatusColor(record.status),
                        color: getStatusTextColor(record.status)
                      }}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Calendar View */}
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
            November 2024 Attendance Calendar
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.5rem'
          }}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} style={{
                padding: '0.5rem',
                textAlign: 'center',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#6b7280',
                backgroundColor: '#f9fafb'
              }}>
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const dateStr = `2024-11-${day.toString().padStart(2, '0')}`;
              const dayRecords = attendanceData.filter(record => record.date === dateStr);
              const hasAttendance = dayRecords.length > 0;
              const isPresent = dayRecords.some(record => record.status === 'Present');

              return (
                <div key={day} style={{
                  padding: '0.5rem',
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  borderRadius: '0.25rem',
                  backgroundColor: hasAttendance
                    ? (isPresent ? '#dcfce7' : '#fee2e2')
                    : '#f9fafb',
                  color: hasAttendance ? (isPresent ? '#166534' : '#991b1b') : '#6b7280',
                  border: '1px solid #e5e7eb'
                }}>
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Attendance;