
import { supabase } from './supabase';

/**
 * Upload a file to Supabase Storage
 * @param bucket - The storage bucket name
 * @param path - Path within the bucket
 * @param file - The file to upload
 * @returns The file path if successful
 */
export const uploadFile = async (bucket: string, path: string, file: File) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, { upsert: true });
    
    if (error) throw error;
    
    return data.path;
  } catch (error: any) {
    console.error('Error uploading file:', error.message);
    throw error;
  }
};

/**
 * Get a public URL for a file
 * @param bucket - The storage bucket name
 * @param path - Path to the file
 * @returns Public URL for the file
 */
export const getFileUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

/**
 * Delete a file from storage
 * @param bucket - The storage bucket name
 * @param path - Path to the file
 * @returns Boolean indicating success
 */
export const deleteFile = async (bucket: string, path: string) => {
  try {
    const { error } = await supabase.storage.from(bucket).remove([path]);
    if (error) throw error;
    return true;
  } catch (error: any) {
    console.error('Error deleting file:', error.message);
    throw error;
  }
};
