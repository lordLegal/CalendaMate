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


import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


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

export default function ApiDashboard(data: Props) {
  const { keys } = data;
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

    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={keys} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
  );
}
