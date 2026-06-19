import { Navigate, Route, Routes } from "react-router";

import { AppLayout } from "@/layouts/AppLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { AdminDashboard } from "@/pages/admin/AdminDashboard";
import { LoginPage } from "@/pages/auth/LoginPage";
import { StudentDashboard } from "@/pages/student/StudentDashboard";
import { TrainerDashboard } from "@/pages/trainer/TrainerDashboard";
import { ProtectedRoute } from "@/router/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route element={<AppLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["trainer"]} />}>
        <Route element={<AppLayout />}>
          <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
        <Route element={<AppLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
