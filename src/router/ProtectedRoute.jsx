import { Navigate, Outlet } from "react-router";

import { useAuthStore } from "@/store/authStore";

export function ProtectedRoute({ allowedRoles }) {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
