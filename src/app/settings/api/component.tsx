// src/app/settings/api/ApiKeysDashboard.tsx
"use client";

import React, { useState, FormEvent, useCallback } from "react";
import { createApiKeyAction, deleteApiKeyAction, ActionResult, createCreditPurchaseSessionAction } from "./actions";
import type { ApiKey } from "@/generated/prisma";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FiClipboard, FiCheck } from "react-icons/fi";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { redirect } from "next/navigation";

interface Props {
  keys: ApiKey[];
  purchaseSum: number;
  usageSum: number;
  creditsRemaining: number;
  chartData: { date: string; used: number; purchased: number }[];
}

export function ApiKeysDashboard({ keys, purchaseSum, usageSum, creditsRemaining, chartData }: Props) {
  const [loading, setLoading] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [createdKey, setCreatedKey] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCreate = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result: ActionResult = await createApiKeyAction(formData);
    setLoading(false);

    if (result.success && result.apiKey) {
      setCreatedKey(result.apiKey.rawKey);
      toast("Created", { description: result.message, closeButton: true });
      setShowCreateDialog(true);
    } else {
      toast("Error", { description: result.message, closeButton: true });
    }
  }, []);

  const handleCopy = useCallback(() => {
    if (!createdKey) return;
    navigator.clipboard.writeText(createdKey).catch(() => {
      toast("Error", { description: "Clipboard access denied.", closeButton: true });
    });
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1500);
  }, [createdKey]);

  const handleDelete = useCallback(async (keyId: string) => {
    setLoading(true);
    const formData = new FormData();
    formData.set("keyId", keyId);
    const result = await deleteApiKeyAction(formData);
    setLoading(false);
    toast(result.success ? "Deleted" : "Error", { description: result.message, closeButton: true });
  }, []);

  const handlePurchase = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await createCreditPurchaseSessionAction(formData);
    setLoading(false);
    toast(result.success ? "Purchased" : "Error", { description: result.message, closeButton: true });
    return redirect(result.url || "/settings/api");
  }, []);

  const [euroAmount, setEuroAmount] = useState<number>(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value) || 0;
    setEuroAmount(amount);
  };

  const computedCredits = Math.round(euroAmount * 100);

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>API-Key erstellt</DialogTitle>
            <DialogDescription>
              Speichere diesen Schlüssel sicher – er wird nur einmal angezeigt.
            </DialogDescription>
          </DialogHeader>
          <Input
            className="font-mono bg-gray-100 w-[400px] pointer-events-none select-all overflow-hidden whitespace-nowrap text-ellipsis"
            value={createdKey || ""}
            readOnly
            tabIndex={0}
            title={createdKey || undefined}
          />
          <Button
            className={
              `mt-2 flex items-center gap-2 transition-all ${
                copySuccess ? "text-green-500" : "text-white dark:text-gray-100"
              }`
            }
            onClick={handleCopy}
          >
            {copySuccess ? <FiCheck /> : <FiClipboard />} {copySuccess ? "Copied" : "Kopieren"}
          </Button>
          <DialogFooter>
            <Button onClick={() => setShowCreateDialog(false)}>Schließen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <main className="flex-1 w-full p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader><CardTitle className="text-sm">Total Purchased</CardTitle></CardHeader>
              <CardContent><p className="text-2xl font-semibold">{purchaseSum}</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-sm">Total Used</CardTitle></CardHeader>
              <CardContent><p className="text-2xl font-semibold">{usageSum}</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-sm">Remaining</CardTitle></CardHeader>
              <CardContent><p className="text-2xl font-semibold">{creditsRemaining}</p></CardContent>
            </Card>
          </div>

          <Card className="mb-4">
            <CardHeader><CardTitle>Credits aufladen</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handlePurchase} className="grid grid-cols-3 gap-4 items-end">
                <div className="col-span-2">
                  <Label htmlFor="amount">Betrag in €</Label>
                  <Input 
                    onChange={handleAmountChange} 
                    id="amount" 
                    name="amount" 
                    type="number" 
                    step={5}
                    min={5}
                    max={1000}
                    placeholder="Euro-Betrag" 
                    required 
                  />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="credits">Credits</Label>
                  <span className="block text-gray-500">{computedCredits}</span>
                  <p className="text-sm text-gray-500">1 Credit = 0.01 €</p>
                  <Input type="hidden" name="credits" value={computedCredits} />
                </div>
                <div>
                  <Button type="submit" disabled={loading}>{loading ? "Lädt…" : "Kaufen"}</Button>
                </div>
              </form>
            </CardContent>
          </Card>

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

          <Card>
            <CardHeader><CardTitle className="text-lg">Create New API Key</CardTitle></CardHeader>
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
                  <Button type="submit" disabled={loading}>{loading ? "Processing..." : "Create Key"}</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg">Your API Keys</CardTitle></CardHeader>
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
