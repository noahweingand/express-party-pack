import { Request, Response } from 'express';

import { getInvoices } from '../services/supabase';

export async function InvoicesController(_req: Request, res: Response) {
  const invoices = await getInvoices();

  res.json(invoices);
}
