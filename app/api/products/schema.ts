import { z } from "zod";

const schema = z.object(
    {
        name: z.string().min(1),
        price: z.number().min(1).max(999),
    }
)

export default schema;