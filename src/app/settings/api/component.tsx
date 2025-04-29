// src/app/settings/api/ApiKeysDashboard.tsx
"use client";

import React, { useState, FormEvent } from "react";
import { createApiKeyAction, deleteApiKeyAction, ActionResult } from "./actions";
import type { ApiKey } from "@/generated/prisma";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  keys: ApiKey[];
  purchaseSum: number;
  usageSum: number;
  creditsRemaining: number;
  chartData: { date: string; used: number; purchased: number }[];
}

export function ApiKeysDashboard({ keys, purchaseSum, usageSum, creditsRemaining, chartData }: Props) {
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result: ActionResult = await createApiKeyAction(undefined, formData);
    setLoading(false);
    toast(result.success ? "Deleted" : "Error",{
      description: result.message,
      closeButton: true,
    });
    if (result.success) {
      // Optionally refresh data or revalidate
      window.location.reload();
    }
  };

  const handleDelete = async (keyId: string) => {
    setLoading(true);
    const formData = new FormData();
    formData.set("keyId", keyId);
    const result: ActionResult = await deleteApiKeyAction(undefined, formData);
    setLoading(false);
    toast(result.success ? "Deleted" : "Error",{
      description: result.message,
      closeButton: true,
    });
    if (result.success) {
      window.location.reload();
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

      {/* Main content */}
      <main className="flex-1 w-full p-6">
        <div className="space-y-6">
          {/* Header cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Total Purchased</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{purchaseSum}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Total Used</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{usageSum}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Remaining</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{creditsRemaining}</p>
              </CardContent>
            </Card>
          </div>

          {/* Usage chart */}
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Credit Usage Over Time</CardTitle>
              <Tabs defaultValue="3m" className="space-x-2">
                <TabsList>
                  <TabsTrigger value="3m">Last 3 months</TabsTrigger>
                  <TabsTrigger value="30d">Last 30 days</TabsTrigger>
                  <TabsTrigger value="7d">Last 7 days</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPurchased" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorUsed" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="purchased" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPurchased)" />
                  <Area type="monotone" dataKey="used" stroke="#10b981" fillOpacity={1} fill="url(#colorUsed)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Create key form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Create New API Key</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreate} className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Key name" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" name="description" placeholder="Optional description" />
                </div>
                <div className="col-span-2 text-right">
                  <Button type="submit" disabled={loading}>
                    {loading ? "Processing..." : "Create Key"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Keys table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your API Keys</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell>{key.name}</TableCell>
                      <TableCell>{key.description || "-"}</TableCell>
                      <TableCell>{new Date(key.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm" disabled={loading} onClick={() => handleDelete(key.id)}>
                          {loading ? "Deleting..." : "Delete"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}