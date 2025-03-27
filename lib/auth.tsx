// app/lib/auth.ts
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
interface DecodedToken {
  user_id: number;
  username: string | null;
  email: string;
  user_type: string;
  exp: number;
}

export const getDecodedToken = (): any | null => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    console.log(token, "Token---17----")
    if (token) {
      try {
        const decoded = jwtDecode<any>(token);
        if (decoded.exp * 1000 > Date.now()) {
          return decoded;
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }
  return null;
};

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token')
  }
  return null
}

export const isAuthenticated = (): boolean => {
  return getDecodedToken() !== null;
};

// Middleware to protect routes
export function withAuth(Component: React.ComponentType) {
  console.log("------38----")
  return function ProtectedRoute(props: any) {
    if (typeof window !== 'undefined') {
      const decoded = getDecodedToken();
      console.log(decoded, "Decoded----41----")
      if (!decoded) {
        redirect('/signin');
        return null;
      }

      return <Component {...props} />;
    }
    return null;
  };
}

export function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = isAuthenticated;


    useEffect(() => {
      const decoded = getDecodedToken();
      console.log(decoded, "Decoded----41----")
      if (!decoded) {
        redirect('/signin');
      }
    }, []);


    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}

// Custom hook for menu visibility
export const useMenuVisibility = () => {
  const decoded = getDecodedToken();
  console.log(decoded, "Decode TOken----85----")
  const userType = decoded?.roleName || '';
    console.log(userType, "User Type")
  const menuPermissions = {
    SUPER_ADMIN: ['dashboard', 'ecommerce', 'community', 'finance', 'job', 'tasks', 'settings'],
    DISTRIBUTOR: ['dashboard', 'ecommerce', 'tasks', 'inventory', 'accounts', 'thing', 'staff'],
    CUSTOMER: ['dashboard', 'ecommerce'],
  };
  type UserType = keyof typeof menuPermissions;
  const canViewMenu = (menuId: string): boolean => {
    return menuPermissions[userType as keyof typeof menuPermissions]?.includes(menuId) || false;
  };

  return { canViewMenu, userType };
};