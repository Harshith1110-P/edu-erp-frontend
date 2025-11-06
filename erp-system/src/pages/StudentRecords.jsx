import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const StudentRecords = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock student data
  const [students] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      rollNumber: 'CS2024001',
      email: 'alice.johnson@kluniversity.edu',
      phone: '+91 9876543210',
      course: 'Computer Science',
      semester: '6th',
      attendance: 85,
      gpa: 3.7,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Bob Smith',
      rollNumber: 'CS2024002',
      email: 'bob.smith@kluniversity.edu',
      phone: '+91 9876543211',
      course: 'Computer Science',
      semester: '6th',
      attendance: 78,
      gpa: 3.2,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Carol Davis',
      rollNumber: 'CS2024003',
      email: 'carol.davis@kluniversity.edu',
      phone: '+91 9876543212',
      course: 'Computer Science',
      semester: '6th',
      attendance: 92,
      gpa: 3.9,
      status: 'Active'
    },
    {
      id: 4,
      name: 'David Wilson',
      rollNumber: 'CS2024004',
      email: 'david.wilson@kluniversity.edu',
      phone: '+91 9876543213',
      course: 'Computer Science',
      semester: '6th',
      attendance: 65,
      gpa: 2.8,
      status: 'Warning'
    }
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#dcfce7';
      case 'Warning': return '#fef3c7';
      case 'Suspended': return '#fee2e2';
      default: return '#f3f4f6';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Active': return '#166534';
      case 'Warning': return '#92400e';
      case 'Suspended': return '#991b1b';
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
              Student Records
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
        {/* Search and Filters */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                placeholder="Search by name or roll number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem'
                }}
              />
            </div>
            <button style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer'
            }}>
              Search
            </button>
          </div>
        </div>

        {/* Students Table */}
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
              Student Management
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
                    Name
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Roll Number
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Course
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Attendance
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    GPA
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
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} style={{
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827',
                      fontWeight: '500'
                    }}>
                      {student.name}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      {student.rollNumber}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#374151'
                    }}>
                      {student.course}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827'
                    }}>
                      <span style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: student.attendance >= 85 ? '#dcfce7' : student.attendance >= 75 ? '#fef3c7' : '#fee2e2',
                        color: student.attendance >= 85 ? '#166534' : student.attendance >= 75 ? '#92400e' : '#991b1b'
                      }}>
                        {student.attendance}%
                      </span>
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827',
                      fontWeight: '600'
                    }}>
                      {student.gpa}
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
                        backgroundColor: getStatusColor(student.status),
                        color: getStatusTextColor(student.status)
                      }}>
                        {student.status}
                      </span>
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem'
                    }}>
                      <button
                        onClick={() => setSelectedStudent(student)}
                        style={{
                          color: '#4f46e5',
                          fontWeight: '500',
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Details Modal */}
        {selectedStudent && (
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
                Student Details
              </h3>
              <div style={{ spaceY: '1rem' }}>
                <div>
                  <label style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Name:
                  </label>
                  <p style={{
                    fontSize: '1rem',
                    color: '#111827',
                    marginTop: '0.25rem'
                  }}>
                    {selectedStudent.name}
                  </p>
                </div>
                <div>
                  <label style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Roll Number:
                  </label>
                  <p style={{
                    fontSize: '1rem',
                    color: '#111827',
                    marginTop: '0.25rem'
                  }}>
                    {selectedStudent.rollNumber}
                  </p>
                </div>
                <div>
                  <label style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Contact:
                  </label>
                  <p style={{
                    fontSize: '1rem',
                    color: '#111827',
                    marginTop: '0.25rem'
                  }}>
                    {selectedStudent.email}<br />
                    {selectedStudent.phone}
                  </p>
                </div>
                <div>
                  <label style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    Academic Info:
                  </label>
                  <p style={{
                    fontSize: '1rem',
                    color: '#111827',
                    marginTop: '0.25rem'
                  }}>
                    Course: {selectedStudent.course}<br />
                    Semester: {selectedStudent.semester}<br />
                    GPA: {selectedStudent.gpa}<br />
                    Attendance: {selectedStudent.attendance}%
                  </p>
                </div>
              </div>
              <div style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '1rem'
              }}>
                <button
                  onClick={() => setSelectedStudent(null)}
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
                  Close
                </button>
                <button style={{
                  flex: 1,
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Edit Student
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentRecords;