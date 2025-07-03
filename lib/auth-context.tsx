// "use client";
// import React, { createContext, useState, useContext, ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import { useMutation } from "@apollo/client";
// import { SIGN_IN_USER } from "@/lib/mutations";
// import { ApolloError } from "@apollo/client";

// interface AuthContextType {
//   user: any;
//   distributorId: string | null;
//   loading: boolean;
//   error: any;
//   signIn: (credentials: { email: string; password: string }) => void;
//   signOut: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [distributorId, setDistributorId] = useState<string | null>(null);
//   const [error, setError] = useState<ApolloError | null>(null);
//   const router = useRouter();

//   React.useEffect(() => {
//     const storedDistributorId = localStorage.getItem("distributorId");
//     const storedUser = localStorage.getItem("user");

//     if (storedDistributorId) {
//       setDistributorId(storedDistributorId);
//     }
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // Assuming user is stored as a JSON string
//     }
//   }, []);

//   const [signInUser] = useMutation(SIGN_IN_USER, {
//     onCompleted: (data) => {
//       const { accessToken, _id } = data.signInUser;
//       localStorage.setItem("access_token", accessToken);
//       localStorage.setItem("distributorId", _id);
//       //61811cc2bf5a3f81fbeb5d41
//       console.log("Access Token:", accessToken);
//       console.log("User Data:", _id);
//       setUser(data.signInUser.name);
//       setDistributorId(_id);
//       router.push("/dashboard");
//     },
//     onError: (error) => {
//       setError(error);
//     },
//   });

//   const signIn = async (credentials: { email: string; password: string }) => {
//     setLoading(true);
//     try {
//       await signInUser({ variables: { signInCredentials: credentials } });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signOut = () => {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("distributorId");
//     setUser(null);
//     setDistributorId(null);
//     router.push("/signin");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, distributorId, loading, error, signIn, signOut }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };


"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/lib/mutations";
import { ApolloError } from "@apollo/client";

interface AuthContextType {
  user: any;
  distributorId: string | null;
  loading: boolean;
  error: any;
  signIn: (credentials: { email: string; password: string }) => void;
  signOut: () => void;
  isTokenExpired: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [distributorId, setDistributorId] = useState<string | null>(null);
  const [error, setError] = useState<ApolloError | null>(null);
  const router = useRouter();

  // Helper function to check if token is expired
  const isTokenExpired = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || !user.exp) return true;
    
    const currentTime = Math.floor(Date.now() / 1000);
    return user.exp < currentTime;
  };

  React.useEffect(() => {
    const storedDistributorId = localStorage.getItem("distributorId");
    const storedUser = localStorage.getItem("user");

    if (storedDistributorId && storedUser) {
      const userData = JSON.parse(storedUser);
      
      // Check if token is expired
      if (!isTokenExpired()) {
        setDistributorId(storedDistributorId);
        setUser(userData);
      } else {
        // Token expired, clear storage
        signOut();
      }
    }
  }, []);

  // Helper function to decode JWT token
  const decodeJWT = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  };

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      const token = data.login;
      console.log("Login Token:", token);
      
      // Store the JWT token
      localStorage.setItem("access_token", token);
      
      // Decode the JWT to extract user information
      const decodedToken = decodeJWT(token);
      console.log("Decoded Token:", decodedToken);
      
      if (decodedToken) {
        // Extract user information from the JWT payload
        const userData = {
          id: decodedToken.user_id || decodedToken.sub, // 36
          userCode: decodedToken.user_code,             // 792679
          role: decodedToken.role,                      // "admin"
          organizationName: decodedToken.organization_name, // "Bitwave"
          exp: decodedToken.exp,                        // 1751652282
          token: token
        };
        
        // Store user data and set states
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("distributorId", userData.id.toString());
        
        setUser(userData);
        setDistributorId(userData.id.toString());
        
        router.push("/dashboard");
      } else {
        setError(new Error("Failed to decode authentication token") as any);
      }
    },
    onError: (error) => {
      setError(error);
      console.error("Login error:", error);
    },
  });

  const signIn = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      await loginUser({ 
        variables: { 
          email: credentials.email, 
          password: credentials.password 
        } 
      });
    } catch (err) {
      console.error("Sign in error:", err);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("distributorId");
    localStorage.removeItem("user");
    setUser(null);
    setDistributorId(null);
    setError(null);
    router.push("/signin");
  };

  return (
    <AuthContext.Provider
      value={{ user, distributorId, loading, error, signIn, signOut, isTokenExpired }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};