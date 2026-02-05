"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Battery, RefreshCw, Home, Zap, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  const isBackendError = error.name === "BackendUnavailableError" ||
    error.message.includes("Backend") ||
    error.message.includes("fetch");

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
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
          {/* Energy discharge effect */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Error Code */}
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          {isBackendError ? "Service Temporarily Unavailable" : "Something Went Wrong"}
        </div>

        {/* Main Message */}
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {isBackendError ? (
            <>
              Our Power Grid is{" "}
              <span className="text-red-500">Recharging</span>
            </>
          ) : (
            <>
              Unexpected{" "}
              <span className="text-red-500">Power Surge</span>
            </>
          )}
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          {isBackendError ? (
            <>
              Our backend services are currently unavailable. Just like our HeroEE batteries,
              we&apos;re built to recover quickly. Please try again in a moment.
            </>
          ) : (
            <>
              We encountered an unexpected error. Our team has been notified and is working
              on a fix. Please try again or return to the home page.
            </>
          )}
        </p>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 bg-gray-100 rounded-xl text-left">
            <p className="text-sm font-mono text-gray-700 break-all">
              <strong>Error:</strong> {error.message}
            </p>
            {error.digest && (
              <p className="text-xs font-mono text-gray-500 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="font-semibold bg-hithium-primary text-white hover:bg-hithium-accent"
            startContent={<RefreshCw className="w-5 h-5" />}
            onClick={() => reset()}
          >
            Try Again
          </Button>
          <Button
            as={Link}
            href="/"
            size="lg"
            variant="bordered"
            className="font-semibold border-gray-300 text-gray-700 hover:bg-gray-50"
            startContent={<Home className="w-5 h-5" />}
          >
            Back to Home
          </Button>
        </div>

        {/* Support Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need immediate assistance?{" "}
            <Link href="/contact" className="text-hithium-primary hover:underline font-medium">
              Contact our support team
            </Link>
          </p>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 p-4 bg-hithium-light rounded-xl">
          <p className="text-sm text-hithium-primary">
            <strong>Did you know?</strong> Our HeroEE batteries have a 6000+ cycle life,
            meaning they can handle over 16 years of daily charging. Unlike our servers right now.
          </p>
        </div>
      </div>
    </div>
  );
}
