// src/app/settings/api/ApiKeysClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useActionState } from "react";
import { ApiKey } from "@/generated/prisma";

import {
  createApiKeyAction,
  deleteApiKeyAction,
  topUpApiKeyAction,
} from "@/app/settings/api/actions";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

import { FiClipboard, FiCheckCircle } from "react-icons/fi";

interface Props {
  keys: ApiKey[];
}
import { Euro } from 'lucide-react';
import prisma from "@/lib/server/prisma";

interface UsagePoint {
  date: string;
  requests: number;
  tokens: number;
}

interface KeyStats {
  id: string;
  name: string;
  creditsRemaining: number;
}

export default function ApiDashboard() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  const [usageData, setUsageData] = useState<UsagePoint[]>([]);
  const [keyStats, setKeyStats] = useState<KeyStats[]>([]);
  const [exchangeRate, setExchangeRate] = useState<number>(0.0002); // credits to EUR

  useEffect(() => {
    async function fetchData() {
      const u = await prisma.apiUsageLog.findMany({
        where: { timestamp: { gte: new Date(Date.now() - (period === '7d' ? 7 : period === '30d' ? 30 : 90) * 24 * 60 * 60 * 1000) } },
        orderBy: { timestamp: 'asc' },
        });
      // Aggregate or map the logs to UsagePoint[]
      const usagePoints: UsagePoint[] = u.map(log => ({
        date: log.timestamp.toISOString().split('T')[0],
        requests: 1, // or aggregate if needed
        tokens: (log as any).tokens ?? 0 // replace with actual tokens field if available
      }));
      setUsageData(usagePoints);
    }
    fetchData();
  }, [period]);

  const totalCredits = keyStats.reduce((sum, k) => sum + k.creditsRemaining, 0);
  const euroValue = totalCredits * exchangeRate;

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">API Dashboard</h2>
        <nav className="space-y-4">
          <a className="block hover:text-blue-400">Usage</a>
          <a className="block hover:text-blue-400">Keys</a>
          <a className="block hover:text-blue-400">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Total Credits</h3>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <span className="text-3xl font-bold">{totalCredits}</span>
              <Euro className="w-6 h-6" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Value in EUR</h3>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold">€{euroValue.toFixed(2)}</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Period</h3>
            </CardHeader>
            <CardContent>
              <Select onValueChange={(v) => setPeriod(v as any)}>
                <SelectTrigger className="w-full">
                  <span>{period === '7d' ? 'Last 7 days' : period === '30d' ? 'Last 30 days' : 'Last 90 days'}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Usage Chart */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">API Usage</h3>
          </CardHeader>
          <CardContent style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="requests" stroke="#38bdf8" name="Requests" />
                <Line type="monotone" dataKey="tokens" stroke="#34d399" name="Tokens" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Keys Table */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">API Keys</h3>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Credits Left</TableHead>
                  <TableHead>Value (€)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keyStats.map((k) => (
                  <TableRow key={k.id}>
                    <TableCell>{k.name}</TableCell>
                    <TableCell>{k.creditsRemaining}</TableCell>
                    <TableCell>€{(k.creditsRemaining * exchangeRate).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
