import { log, supabase } from '../../config';

export async function getInvoices() {
  const { data, error } = await supabase()
    .from('Invoice')
    .select(`id:public_id, createdAt:created_at, toUser:to_user, amount`);

  if (error) {
    log().error(error);
  }

  return data;
}
