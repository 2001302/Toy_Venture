import { createServerSupabaseClient } from "./server"

export async function getImageUrl(bucket: string, path: string) {
  const supabase = createServerSupabaseClient()
  
  const { data: { publicUrl } } = supabase
    .storage
    .from(bucket)
    .getPublicUrl(path)
    
  return publicUrl
} 