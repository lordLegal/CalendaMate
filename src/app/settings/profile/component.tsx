"use client";

import { updatePasswordAction, updateEmailAction } from "./actions";
import { useFormState } from "react-dom";

const initialUpdatePasswordState = { message: "" };

export function UpdatePasswordForm() {
  const [state, action] = useFormState(updatePasswordAction, initialUpdatePasswordState);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="form-password.password" className="block text-gray-700 font-medium mb-1">
          Current password
        </label>
        <input
          type="password"
          id="form-password.password"
          name="password"
          autoComplete="current-password"
          required
          placeholder="Enter your current password"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="form-password.new-password" className="block text-gray-700 font-medium mb-1">
          New password
        </label>
        <input
          type="password"
          id="form-password.new-password"
          name="new_password"
          autoComplete="new-password"
          required
          placeholder="Enter your new password"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
        Update
      </button>
      {state.message && <p className="text-center text-red-500 text-sm">{state.message}</p>}
    </form>
  );
}

const initialUpdateFormState = { message: "" };

export function UpdateEmailForm() {
  const [state, action] = useFormState(updateEmailAction, initialUpdateFormState);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="form-email.email" className="block text-gray-700 font-medium mb-1">
          New email
        </label>
        <input
          type="email"
          id="form-email.email"
          name="email"
          required
          placeholder="Enter your new email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
        Update
      </button>
      {state.message && <p className="text-center text-red-500 text-sm">{state.message}</p>}
    </form>
  );
}