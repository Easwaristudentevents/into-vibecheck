import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vnjgafwdpsucscookags.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuamdhZndkcHN1Y3Njb29rYWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMDQxOTUsImV4cCI6MjA2NjU4MDE5NX0.I69c00gax-X69GgjiRIeti-OmPd7D5D5ihY9uwL8pmE'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface FeedbackData {
  name: string
  email?: string
  type: 'Feedback' | 'Problem' | 'Suggestion'
  message: string
}

export const submitFeedback = async (data: FeedbackData) => {
  const { error } = await supabase
    .from('feedback')
    .insert([data])
  
  if (error) {
    throw error
  }
  
  return { success: true }
}
