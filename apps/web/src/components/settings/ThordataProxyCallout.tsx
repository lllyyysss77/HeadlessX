'use client';

import { useEffect, useState } from 'react';
import { Cancel01Icon, LinkSquare01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const DISMISS_KEY = 'headlessx-thordata-callout-dismissed';
const THORDATA_URL = 'https://dashboard.thordata.com/register?invitation_code=HQIUNLWP';

export function ThordataProxyCallout() {
    const [dismissed, setDismissed] = useState(true);

    useEffect(() => {
        setDismissed(localStorage.getItem(DISMISS_KEY) === '1');
    }, []);

    const handleDismiss = () => {
        localStorage.setItem(DISMISS_KEY, '1');
        setDismissed(true);
    };

    if (dismissed) {
        return null;
    }

    return (
        <div className="relative overflow-hidden rounded-2xl border border-violet-100 bg-[linear-gradient(135deg,rgba(245,243,255,0.95),rgba(255,255,255,1))] p-5">
            <button
                type="button"
                onClick={handleDismiss}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-xl border border-transparent text-slate-400 transition-colors hover:border-slate-200 hover:bg-white hover:text-slate-600"
                aria-label="Dismiss Thordata recommendation"
            >
                <HugeiconsIcon icon={Cancel01Icon} size={16} />
            </button>

            <div className="flex flex-col gap-4 pr-8 sm:flex-row sm:items-start">
                <img
                    src="/thordata-logo.png"
                    alt="Thordata"
                    className="h-10 w-10 shrink-0 rounded-lg border border-violet-100 bg-white object-contain p-1"
                />
                <div className="min-w-0 flex-1 space-y-3">
                    <div>
                        <div className="mb-1 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-800">
                            Recommended provider
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Thordata offers 100M+ premium residential IPs across 195+ countries with geo targeting,
                            rotating and sticky sessions, and 99.99% uptime — built for headless browsers, scraping
                            tools, and AI workflows.
                        </p>
                        <p className="mt-2 text-sm font-medium text-violet-900">3-day free trial · 10% off</p>
                    </div>

                    <a
                        href={THORDATA_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-800 transition-colors hover:text-violet-900"
                    >
                        Try Thordata now
                        <HugeiconsIcon icon={LinkSquare01Icon} size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}
