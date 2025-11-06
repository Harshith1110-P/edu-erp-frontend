import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AcademicRecords = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock data - in real app, this would come from API
  const [grades] = useState([
    { subject: 'Mathematics', grade: 'A', semester: 'Fall 2024', credits: 4 },
    { subject: 'Physics', grade: 'B+', semester: 'Fall 2024', credits: 3 },
    { subject: 'Chemistry', grade: 'A-', semester: 'Fall 2024', credits: 3 },
    { subject: 'Computer Science', grade: 'A', semester: 'Spring 2024', credits: 4 },
    { subject: 'English', grade: 'B', semester: 'Spring 2024', credits: 2 },
  ]);

  const calculateGPA = () => {
    const gradePoints = { 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0 };
    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach(course => {
      const points = gradePoints[course.grade] || 0;
      totalPoints += points * course.credits;
      totalCredits += course.credits;
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
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
              Academic Records
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
        {/* GPA Summary */}
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
            Academic Summary
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                {calculateGPA()}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#374151',
                marginTop: '0.25rem'
              }}>
                Current GPA
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
                {grades.length}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#374151',
                marginTop: '0.25rem'
              }}>
                Courses Completed
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
                {grades.reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#374151',
                marginTop: '0.25rem'
              }}>
                Total Credits
              </div>
            </div>
          </div>
        </div>

        {/* Grades Table */}
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
              Course Grades
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
                    Grade
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Semester
                  </th>
                  <th style={{
                    padding: '0.75rem 1.5rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Credits
                  </th>
                </tr>
              </thead>
              <tbody>
                {grades.map((course, index) => (
                  <tr key={index} style={{
                    borderBottom: index !== grades.length - 1 ? '1px solid #e5e7eb' : 'none'
                  }}>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827'
                    }}>
                      {course.subject}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827',
                      fontWeight: '600'
                    }}>
                      <span style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        backgroundColor: course.grade.startsWith('A') ? '#dcfce7' : course.grade.startsWith('B') ? '#fef3c7' : '#fee2e2',
                        color: course.grade.startsWith('A') ? '#166534' : course.grade.startsWith('B') ? '#92400e' : '#991b1b'
                      }}>
                        {course.grade}
                      </span>
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      {course.semester}
                    </td>
                    <td style={{
                      padding: '1rem 1.5rem',
                      fontSize: '0.875rem',
                      color: '#111827'
                    }}>
                      {course.credits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Transcript */}
        <div style={{
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <button style={{
            backgroundColor: '#4f46e5',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
          >
            Download Transcript (PDF)
          </button>
        </div>
      </main>
    </div>
  );
};

export default AcademicRecords;