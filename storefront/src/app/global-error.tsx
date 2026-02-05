"use client";

import { useEffect } from "react";
import { Battery, RefreshCw, AlertTriangle, Zap } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Battery Icon */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 animate-pulse" />
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative">
                <Battery className="w-20 h-20 text-red-400" />
                <AlertTriangle className="w-8 h-8 text-orange-500 absolute -top-2 -right-2 animate-bounce" />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Error Badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Critical System Error
          </div>

          {/* Main Message */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Complete{" "}
            <span className="text-red-500">Power Outage</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            We&apos;re experiencing a critical system error. Our team has been automatically
            notified. Please try refreshing the page.
          </p>

          {/* Action Button */}
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>

          {/* Support Link */}
          <p className="mt-8 text-sm text-gray-500">
            If the problem persists, please contact{" "}
            <a href="mailto:support@hithiumnp.com" className="text-blue-600 hover:underline">
              support@hithiumnp.com
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
