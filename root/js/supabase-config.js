// Import Supabase client
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Supabase configuration
const supabaseUrl = 'https://bbhbdtgnmyrfkgfmmztf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiaGJkdGdubXlyZmtnZm1tenRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MzQ0OTYsImV4cCI6MjA1OTQxMDQ5Nn0.f2pdGUiMIDm1ccjjFf-7xoY00fdysaMgilZih-JGmKU';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Helper functions for auth state
const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error) {
    console.error('Error getting user:', error.message);
    return null;
  }
};

const checkAuthState = async () => {
  const user = await getCurrentUser();
  const authLinks = document.querySelectorAll('.auth-link');
  
  authLinks.forEach(link => {
    if (user) {
      if (link.classList.contains('logged-out')) {
        link.style.display = 'none';
      } else {
        link.style.display = 'block';
      }
    } else {
      if (link.classList.contains('logged-out')) {
        link.style.display = 'block';
      } else {
        link.style.display = 'none';
      }
    }
  });

  return user;
};

// Export the functions and client
export { supabase, getCurrentUser, checkAuthState };