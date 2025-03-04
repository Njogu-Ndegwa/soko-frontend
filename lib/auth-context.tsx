"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { SIGN_IN_USER } from "@/lib/mutations";
import { ApolloError } from "@apollo/client";

interface AuthContextType {
  user: any;
  loading: boolean;
  error: any;
  signIn: (credentials: { email: string; password: string }) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<ApolloError | null>(null);
  const router = useRouter();

  const [signInUser] = useMutation(SIGN_IN_USER, {
    onCompleted: (data) => {
      const { accessToken } = data.signInUser;
      localStorage.setItem("accessToken", accessToken);
      console.log("Access Token:", accessToken);
      console.log("User Data:", user);
      setUser(data.signInUser.name);
      router.push("/dashboard");
    },
    onError: (error) => {
      setError(error);
    },
  });

  const signIn = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    try {
      await signInUser({ variables: { signInCredentials: credentials } });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn, signOut }}>
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
