import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AcademicRecords from './pages/AcademicRecords';
import Attendance from './pages/Attendance';
import MessageTeacher from './pages/MessageTeacher';
import StudentRecords from './pages/StudentRecords';
import Grading from './pages/Grading';
import ClassSchedule from './pages/ClassSchedule';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/student-dashboard"
              element={
                <PrivateRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/teacher-dashboard"
              element={
                <PrivateRoute allowedRoles={['teacher']}>
                  <TeacherDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/academic-records"
              element={
                <PrivateRoute allowedRoles={['student']}>
                  <AcademicRecords />
                </PrivateRoute>
              }
            />
            <Route
              path="/attendance"
              element={
                <PrivateRoute allowedRoles={['student']}>
                  <Attendance />
                </PrivateRoute>
              }
            />
            <Route
              path="/message-teacher"
              element={
                <PrivateRoute allowedRoles={['student']}>
                  <MessageTeacher />
                </PrivateRoute>
              }
            />
            <Route
              path="/student-records"
              element={
                <PrivateRoute allowedRoles={['teacher']}>
                  <StudentRecords />
                </PrivateRoute>
              }
            />
            <Route
              path="/grading"
              element={
                <PrivateRoute allowedRoles={['teacher']}>
                  <Grading />
                </PrivateRoute>
              }
            />
            <Route
              path="/class-schedule"
              element={
                <PrivateRoute allowedRoles={['teacher']}>
                  <ClassSchedule />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
