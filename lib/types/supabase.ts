export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          created_at: string
          id: string
          image_url: string
          is_premium: boolean
          is_published: boolean
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          is_premium?: boolean
          is_published?: boolean
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          is_premium?: boolean
          is_published?: boolean
          title?: string
        }
        Relationships: []
      }
      blog_content: {
        Row: {
          blog_id: string
          content: string
          created_at: string
        }
        Insert: {
          blog_id: string
          content: string
          created_at?: string
        }
        Update: {
          blog_id?: string
          content?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_content_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: true
            referencedRelation: "blog"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          display_name: string
          email: string
          id: string
          image_url: string
          role: string
          stripe_customer_id: string | null
          stripe_subscriptoin_id: string | null
          subscription_status: boolean
        }
        Insert: {
          created_at?: string
          display_name: string
          email: string
          id: string
          image_url: string
          role?: string
          stripe_customer_id?: string | null
          stripe_subscriptoin_id?: string | null
          subscription_status?: boolean
        }
        Update: {
          created_at?: string
          display_name?: string
          email?: string
          id?: string
          image_url?: string
          role?: string
          stripe_customer_id?: string | null
          stripe_subscriptoin_id?: string | null
          subscription_status?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
      is_premium: {
        Args: {
          blog_id: string
        }
        Returns: boolean
      }
      is_publish: {
        Args: {
          blog_id: string
        }
        Returns: boolean
      }
      is_sub: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
