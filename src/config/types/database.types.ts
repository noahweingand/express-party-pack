export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      Invoice: {
        Row: {
          amount: number;
          created_at: string | null;
          id: number;
          public_id: string;
          to_user: string;
        };
        Insert: {
          amount?: number;
          created_at?: string | null;
          id?: number;
          public_id?: string;
          to_user: string;
        };
        Update: {
          amount?: number;
          created_at?: string | null;
          id?: number;
          public_id?: string;
          to_user?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
