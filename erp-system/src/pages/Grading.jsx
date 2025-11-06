import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Grading = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock assignments data
  const [assignments] = useState([
    {
      id: 1,
      title: 'Data Structures Assignment 1',
      subject: 'Computer Science',
      dueDate: '2024-11-10',
      totalStudents: 45,
      submitted: 42,
      graded: 35,
      pending: 7
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      subject: 'Physics',
      dueDate: '2024-11-08',
      totalStudents: 38,
      submitted: 35,
      graded: 28,
      pending: 7
    },
    {
      id: 3,
      title: 'Chemistry Quiz 3',
      subject: 'Chemistry',
      dueDate: '2024-11-05',
      totalStudents: 42,
      submitted: 40,
      graded: 40,
      pending: 0
    }
  ]);

  // Mock student submissions
  const [submissions] = useState([
    {
      id: 1,
      studentName: 'Alice Johnson',
      studentId: 'CS2024001',
      assignment: 'Data Structures Assignment 1',
      submittedDate: '2024-11-07',
      status: 'pending',
      score: null,
      feedback: ''
    },
    {
      id: 2,
      studentName: 'Bob Smith',
      studentId: 'CS2024002',
      assignment: 'Data Structures Assignment 1',
      submittedDate: '2024-11-06',
      status: 'pending',
      score: null,
      feedback: ''
    },
    {
      id: 3,
      studentName: 'Carol Davis',
      studentId: 'CS2024003',
      assignment: 'Data Structures Assignment 1',
      submittedDate: '2024-11-08',
      status: 'graded',
      score: 85,
      feedback: 'Good work on the algorithm implementation.'
    }
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [gradingStudent, setGradingStudent] = useState(null);
  const [gradeForm, setGradeForm] = useState({
    score: '',
    feedback: ''
  });

  const handleGradeSubmission = (submission) => {
    setGradingStudent(submission);
    setGradeForm({
      score: submission.score || '',
      feedback: submission.feedback || ''
    });
  };

  const submitGrade = () => {
    // In real app, this would update the backend
    console.log('Grading submission:', gradingStudent.id, gradeForm);
    setGradingStudent(null);
    setGradeForm({ score: '', feedback: '' });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'graded': return '#dcfce7';
      case 'pending': return '#fef3c7';
      case 'submitted': return '#dbeafe';
      default: return '#f3f4f6';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'graded': return '#166534';
      case 'pending': return '#92400e';
      case 'submitted': return '#1e40af';
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
              Grading System
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
        {/* Assignment Overview */}
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
            Assignment Overview
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            {assignments.map((assignment) => (
              <div key={assignment.id} style={{
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                padding: '1rem',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedAssignment(assignment)}
              >
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  {assignment.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginBottom: '0.5rem'
                }}>
                  {assignment.subject} • Due: {assignment.dueDate}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.875rem'
                }}>
                  <span>Submitted: {assignment.submitted}/{assignment.totalStudents}</span>
                  <span>Graded: {assignment.graded}</span>
                  <span style={{ color: '#dc2626' }}>Pending: {assignment.pending}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Submissions */}
        {selectedAssignment && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#111827'
              }}>
                {selectedAssignment.title} - Submissions
              </h2>
              <button
                onClick={() => setSelectedAssignment(null)}
                style={{
                  color: '#6b7280',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
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
                      Student
                    </th>
                    <th style={{
                      padding: '0.75rem 1.5rem',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151',
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      Submitted
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
                      Score
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
                  {submissions
                    .filter(sub => sub.assignment === selectedAssignment.title)
                    .map((submission) => (
                    <tr key={submission.id} style={{
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      <td style={{
                        padding: '1rem 1.5rem',
                        fontSize: '0.875rem',
                        color: '#111827'
                      }}>
                        <div>
                          <div style={{ fontWeight: '500' }}>{submission.studentName}</div>
                          <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>{submission.studentId}</div>
                        </div>
                      </td>
                      <td style={{
                        padding: '1rem 1.5rem',
                        fontSize: '0.875rem',
                        color: '#6b7280'
                      }}>
                        {submission.submittedDate}
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
                          backgroundColor: getStatusColor(submission.status),
                          color: getStatusTextColor(submission.status)
                        }}>
                          {submission.status}
                        </span>
                      </td>
                      <td style={{
                        padding: '1rem 1.5rem',
                        fontSize: '0.875rem',
                        color: '#111827',
                        fontWeight: '600'
                      }}>
                        {submission.score ? `${submission.score}/100` : '-'}
                      </td>
                      <td style={{
                        padding: '1rem 1.5rem',
                        fontSize: '0.875rem'
                      }}>
                        <button
                          onClick={() => handleGradeSubmission(submission)}
                          style={{
                            color: '#4f46e5',
                            fontWeight: '500',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          {submission.status === 'graded' ? 'Edit Grade' : 'Grade'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Grading Modal */}
        {gradingStudent && (
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
                Grade Submission
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  marginBottom: '1rem'
                }}>
                  <strong>Student:</strong> {gradingStudent.studentName}<br />
                  <strong>Assignment:</strong> {gradingStudent.assignment}
                </p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Score (out of 100)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={gradeForm.score}
                  onChange={(e) => setGradeForm({...gradeForm, score: e.target.value})}
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
                  Feedback
                </label>
                <textarea
                  value={gradeForm.feedback}
                  onChange={(e) => setGradeForm({...gradeForm, feedback: e.target.value})}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                  placeholder="Provide feedback for the student..."
                />
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <button
                  onClick={() => setGradingStudent(null)}
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
                  onClick={submitGrade}
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
                  Submit Grade
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Grading;