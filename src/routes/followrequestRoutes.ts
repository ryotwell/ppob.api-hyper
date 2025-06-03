import { Router, Request, Response } from 'hyper-express';
import { z } from 'zod';
import axios from '../lib/axios';

const router = new Router();

const transactionSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    buyer_sku_code: z.string().min(1, 'Buyer SKU code is required'),
    customer_no: z.string().min(1, 'Customer number is required'),
    ref_id: z.string().min(1, 'Reference ID is required'),
    sign: z.string().min(1, 'Sign is required'),
    testing: z.boolean().optional()
});

router.post('/transaction', async (req: Request, res: Response) => {
    try {
        const validatedData = transactionSchema.parse(await req.json());

        const { data } = await axios.post('/transaction', validatedData);

        return res.status(200).json(data);
    } catch (error: any) {
        console.error('Failed to send transaction to Digiflazz:', error);
        console.error('Digiflazz error response:', error.response?.data);

        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: error.errors[0].message });
        }

        return res.status(500).json({ message: error?.response?.data?.data?.message ?? 'Internal server error' });
    }
})

export default router;