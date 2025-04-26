"use server";
import { getCurrentSession } from "@/lib/server/session";
import prisma from "@/lib/server/prisma";

export async function deleteApiKeyAction(
    _prev: unknown  ,
    formData: FormData
): Promise<{ success: true } | { error: string }> {
    const { user } = await getCurrentSession();
    if (!user) {
        return { error: "Not authenticated" };
    }
    const keyId = formData.get("keyId");
    if (typeof keyId !== "string") {
        return { error: "Invalid input" };
    }
    const existing = await prisma.apiKey.findUnique({ where: { id: keyId } });
    if (!existing || existing.ownerId !== user.id) {
        return { error: "API key not found" };
    }
    await prisma.apiKey.delete({ where: { id: keyId } });
    return { success: true };
}


export async function createApiKeyAction(
    _prev: unknown  ,
    formData: FormData
): Promise<{ success: true } | { error: string }> {
    const { user } = await getCurrentSession();
    if (!user) {
        return { error: "Not authenticated" };
    }

    const description = formData.get("description");
    const name = formData.get("name");
    if (typeof description !== "string") {
        return { error: "Invalid input" };
    }
    if (description.length < 3 || description.length > 50) {
        return { error: "Description must be between 3 and 50 characters" };
    }
    if (description.trim() === "") {
        return { error: "Description cannot be empty" };
    }
    if (typeof name !== "string") {
        return { error: "Invalid input" };
    }
    if (name.length < 3 || name.length > 50) {
        return { error: "Name must be between 3 and 50 characters" };
    }
    if (name.trim() === "") {
        return { error: "Name cannot be empty" };
    }
    if (name.includes(" ")) {
        return { error: "Name cannot contain spaces" };
    }

    const existing = await prisma.apiKey.findFirst({
        where: { description, ownerId: user.id, name },
    });
    if (existing) {
        return { error: "API key with this name already exists" };
    }
    const key = await prisma.apiKey.create({
        data: {
            name: name,
            description: description,
            ownerId: user.id,
            key: crypto.randomUUID(),
            unlimited: false,
        },
    });
    if (!key) {
        return { error: "Failed to create API key" };
    }
    return { success: true };

    
}

