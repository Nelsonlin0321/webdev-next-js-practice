import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt"

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.errors,{status:400})
    }

    const existedUser = await prisma.user.findUnique({ where: { email: body.email } })
    
    if (existedUser)
        return NextResponse.json({ error: 'User already existed!' }, { status: 400 })
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltRounds)
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword:hashedPassword
        }
    })

    return NextResponse.json({email:newUser.email})
    

}