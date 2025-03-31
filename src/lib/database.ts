
import { supabase } from './supabase';

/**
 * Fetch data from a table
 * @param table - The table name
 * @param query - Optional query parameters
 * @returns The fetched data
 */
export const fetchData = async (table: string, query: any = {}) => {
  try {
    let queryBuilder = supabase.from(table).select(query.select || '*');
    
    if (query.filters) {
      query.filters.forEach((filter: any) => {
        queryBuilder = queryBuilder.filter(filter.column, filter.operator, filter.value);
      });
    }
    
    if (query.order) {
      queryBuilder = queryBuilder.order(query.order.column, { ascending: query.order.ascending });
    }
    
    if (query.limit) {
      queryBuilder = queryBuilder.limit(query.limit);
    }
    
    const { data, error } = await queryBuilder;
    
    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error(`Error fetching data from ${table}:`, error.message);
    throw error;
  }
};

/**
 * Insert data into a table
 * @param table - The table name
 * @param data - The data to insert
 * @returns The inserted data
 */
export const insertData = async (table: string, data: any) => {
  try {
    const { data: result, error } = await supabase.from(table).insert(data).select();
    
    if (error) throw error;
    return result;
  } catch (error: any) {
    console.error(`Error inserting data into ${table}:`, error.message);
    throw error;
  }
};

/**
 * Update data in a table
 * @param table - The table name
 * @param id - The record ID
 * @param data - The data to update
 * @returns The updated data
 */
export const updateData = async (table: string, id: string | number, data: any) => {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return result;
  } catch (error: any) {
    console.error(`Error updating data in ${table}:`, error.message);
    throw error;
  }
};

/**
 * Delete data from a table
 * @param table - The table name
 * @param id - The record ID
 * @returns Boolean indicating success
 */
export const deleteData = async (table: string, id: string | number) => {
  try {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  } catch (error: any) {
    console.error(`Error deleting data from ${table}:`, error.message);
    throw error;
  }
};
