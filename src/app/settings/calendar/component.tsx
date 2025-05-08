"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AccountType } from "@/generated/prisma";
import { saveLearningAccount, testWebuntisSync } from "./actions";

interface Account {
  id: number;
  type: AccountType;
  username: string;
  school: string;
  baseUrl: string;
}

interface Props {
  accounts: Account[];
}

export function LearningConnections({ accounts }: Props) {
  const webuntisAccount = accounts.find(acc => acc.type === AccountType.WEBUNTIS);
  const moodleAccount = accounts.find(acc => acc.type === AccountType.MOODLE);

  const [webForm, setWebForm] = useState({
    username: webuntisAccount?.username || "",
    password: "",
    school: webuntisAccount?.school || "",
    baseUrl: webuntisAccount?.baseUrl || "",
  });
  const [moodleForm, setMoodleForm] = useState({
    username: moodleAccount?.username || "",
    password: "",
    school: moodleAccount?.school || "",
    baseUrl: moodleAccount?.baseUrl || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formType: 'web' | 'moodle'
  ) => {
    const { name, value } = e.target;
    if (formType === 'web') setWebForm(prev => ({ ...prev, [name]: value }));
    else setMoodleForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Lern-Systeme</h2>

      {/* WebUntis */}
      <Card className="bg-white shadow">
        <CardHeader>
          <h3 className="text-lg font-medium">WebUntis</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          {webuntisAccount ? (
            <>
              <p><strong>Username:</strong> {webuntisAccount.username}</p>
              <p><strong>Schule:</strong> {webuntisAccount.school}</p>
              <p><strong>URL:</strong> {webuntisAccount.baseUrl}</p>
            </>
          ) : (
            <p>Kein WebUntis-Konto verbunden.</p>
          )}
        </CardContent>
        <form action={saveLearningAccount} className="px-4 py-3 space-y-4">
          <input type="hidden" name="type" value={AccountType.WEBUNTIS} />
          <div>
            <Label>Username</Label>
            <Input name="username" value={webForm.username} onChange={e => handleChange(e, 'web')} />
          </div>
          <div>
            <Label>Passwort</Label>
            <Input type="password" name="password" value={webForm.password} onChange={e => handleChange(e, 'web')} />
          </div>
          <div>
            <Label>Schule</Label>
            <Input name="school" value={webForm.school} onChange={e => handleChange(e, 'web')} />
          </div>
          <div>
            <Label>Basis-URL</Label>
            <Input name="baseUrl" value={webForm.baseUrl} onChange={e => handleChange(e, 'web')} placeholder="https://neilo.webuntis.com/..." />
          </div>
          <CardFooter className="flex justify-between">
            <Button type="submit">WebUntis speichern</Button>
            <Button type="button" onClick={() => {
             
              testWebuntisSync();
            }} variant="outline">
              Test WebUntis Sync
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Moodle */}
      <Card className="bg-white shadow">
        <CardHeader>
          <h3 className="text-lg font-medium">Moodle</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          {moodleAccount ? (
            <>
              <p><strong>Username:</strong> {moodleAccount.username}</p>
              <p><strong>Schule:</strong> {moodleAccount.school}</p>
              <p><strong>URL:</strong> {moodleAccount.baseUrl}</p>
            </>
          ) : (
            <p>Kein Moodle-Konto verbunden.</p>
          )}
        </CardContent>
        <form action={saveLearningAccount} className="px-4 py-3 space-y-4">
          <input type="hidden" name="type" value={AccountType.MOODLE} />
          <div>
            <Label>Username</Label>
            <Input name="username" value={moodleForm.username} onChange={e => handleChange(e, 'moodle')} />
          </div>
          <div>
            <Label>Passwort</Label>
            <Input type="password" name="password" value={moodleForm.password} onChange={e => handleChange(e, 'moodle')} />
          </div>
          <div>
            <Label>Schule</Label>
            <Input name="school" value={moodleForm.school} onChange={e => handleChange(e, 'moodle')} />
          </div>
          <div>
            <Label>Basis-URL</Label>
            <Input name="baseUrl" value={moodleForm.baseUrl} onChange={e => handleChange(e, 'moodle')} placeholder="https://..." />
          </div>
          <CardFooter className="flex justify-end">
            <Button type="submit">Moodle speichern</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
    );
}