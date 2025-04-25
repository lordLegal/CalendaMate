import { PrismaClient } from '@/generated/prisma';

const BASE_URL = process.env.EXTERNAL_API_BASE_URL;

if (!BASE_URL) {
  throw new Error('EXTERNAL_API_BASE_URL is not defined');
}

/**
 * Generic helper to call the external Calendar/Task API.
 */
async function callExternalApi(
  apiKey: string,
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST',
  body?: any
): Promise<any> {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`External API error ${res.status}: ${text}`);
  }
  return res.json();
}

/**
 * Create a calendar event via the external API.
 */
export async function externalCreateEvent(
  apiKeyId: string,
  eventData: any
): Promise<any> {
  const prisma = new PrismaClient();
  const apiKey = await prisma.apiKey.findUnique({ where: { id: apiKeyId } });
  if (!apiKey) {
    throw new Error('API key not found');
  }
  return callExternalApi(apiKey.key, '/events', 'POST', eventData);
}

/**
 * Update a calendar event via the external API.
 */
export async function externalUpdateEvent(
  apiKeyId: string,
  eventId: string,
  eventData: any
): Promise<any> {
  const prisma = new PrismaClient();
  const apiKey = await prisma.apiKey.findUnique({ where: { id: apiKeyId } });
  if (!apiKey) {
    throw new Error('API key not found');
  }
  return callExternalApi(apiKey.key, `/events/${eventId}`, 'PUT', eventData);
}

/**
 * Create a task via the external API.
 */
export async function externalCreateTask(
  apiKeyId: string,
  taskData: any
): Promise<any> {
  const prisma = new PrismaClient();
  const apiKey = await prisma.apiKey.findUnique({ where: { id: apiKeyId } });
  if (!apiKey) {
    throw new Error('API key not found');
  }
  return callExternalApi(apiKey.key, '/tasks', 'POST', taskData);
}

/**
 * Update a task via the external API.
 */
export async function externalUpdateTask(
  apiKeyId: string,
  taskId: string,
  taskData: any
): Promise<any> {
  const prisma = new PrismaClient();
  const apiKey = await prisma.apiKey.findUnique({ where: { id: apiKeyId } });
  if (!apiKey) {
    throw new Error('API key not found');
  }
  return callExternalApi(apiKey.key, `/tasks/${taskId}`, 'PUT', taskData);
}