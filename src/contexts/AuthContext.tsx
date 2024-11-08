import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { User } from "@supabase/supabase-js"; // Import Supabase types

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>; // Add signOut method
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);

      const { data: authListener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setUser(session?.user ?? null);
          setLoading(false);
        }
      );

      return () => {
        authListener?.subscription.unsubscribe();
      };
    };

    fetchData();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null); // Clear the user state
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
