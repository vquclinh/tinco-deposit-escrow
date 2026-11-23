"use client";

import Link from "next/link";
import { D, ESCROW, explorerAddress, isDeployed } from "@/lib/config";
import { useT } from "@/lib/i18n";
import { Icon, LogoMark } from "./icons";

export const REPO = "https://github.com/vquclinh/tinco-deposit-escrow";

export function Footer() {
  const t = useT();
  const f = t.footer;
  const linkCls = "inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white";
  return (
    <footer data-chrome className="border-t border-zinc-800 bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="text-lg font-extrabold tracking-tight text-white">tinco</span>
          </div>
          <p className="max-w-sm text-sm text-zinc-400">{f.tagline}</p>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
            {D.network} · chainId {D.chainId} · {f.testnet}
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-500">{f.product}</p>
          <ul className="space-y-2">
            <li><Link className={linkCls} href="/rooms">{t.nav.rooms}</Link></li>
            <li><Link className={linkCls} href="/create">{t.nav.create}</Link></li>
            <li><Link className={linkCls} href="/demo">{t.nav.demo}</Link></li>
            <li><Link className={linkCls} href="/stats">{t.nav.stats}</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-brand-500">{f.proof}</p>
          <ul className="space-y-2">
            <li>
              <Link className={linkCls} href="/transparency">
                <Icon name="shield" className="h-4 w-4" />
                {f.contracts}
              </Link>
            </li>
            {isDeployed && explorerAddress(ESCROW) && (
              <li>
                <a className={linkCls} href={explorerAddress(ESCROW)} target="_blank" rel="noreferrer">
                  <Icon name="link" className="h-4 w-4" />
                  {f.escrow}
                </a>
              </li>
            )}
            <li>
              <a className={linkCls} href={REPO} target="_blank" rel="noreferrer">
                <Icon name="github" className="h-4 w-4" />
                {f.source}
              </a>
            </li>
            <li>
              <a className={linkCls} href={`${REPO}/blob/main/docs/PROPOSAL.pdf`} target="_blank" rel="noreferrer">
                <Icon name="fileText" className="h-4 w-4" />
                {f.proposal}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800/70 py-4 text-center text-xs text-zinc-600">{f.built}</div>
    </footer>
  );
}
