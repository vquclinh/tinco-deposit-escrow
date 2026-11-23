# Tinco: A Neutral Rental Deposit Escrow for Vietnamese Students

**Project proposal** · Team Assembly · Team1 Vietnam UniHack 2026

**Author:** Quoc-Linh Vo  
Faculty of Information Technology, University of Science, Ho Chi Minh City, Vietnam  
Vietnam National University, Ho Chi Minh City, Vietnam

**Track:** Social finance (own idea) · **Network:** Avalanche Fuji C-Chain

---

## 1. Executive summary

Every year, hundreds of thousands of Vietnamese students leave home to study in Ho Chi Minh City, Hanoi, Da Nang, Hue and other university towns. Most of them rent a private room, and almost every rental starts with a cash or bank-transfer deposit paid straight to the landlord. That deposit is where two well-known problems begin:

1. **Fake listings.** Scammers post cheap rooms in student Facebook and Zalo groups, ask for a small "holding deposit", and disappear.
2. **Withheld deposits.** At move-out, some landlords find excuses to keep part or all of the deposit, and the tenant has no practical way to get it back.

**Tinco** (from the Vietnamese *tin*, "trust", and *cọc*, "deposit") moves the deposit out of the landlord's pocket and into a neutral smart contract on Avalanche. The contract releases money only under rules that both sides agreed to up front:

- A landlord can never receive money unless the tenant confirms they actually moved in, or a mediator they both chose rules in the landlord's favour.
- If the landlord stays silent after the tenant moves out, the deposit returns to the tenant automatically.
- If there is a disagreement, the undisputed part is paid immediately and only the contested amount waits for a mediator, who can split it between the two parties but can never take it.
- Every completed lease builds a public, tamper-proof track record for landlords and tenants.

Students and landlords use Tinco through a simple bilingual web app. They need no crypto wallet, no AVAX and no blockchain knowledge. A working MVP is live on the Avalanche Fuji testnet.

---

## 2. Background: renting as a student in Vietnam

### 2.1 Scale of the need

- Vietnam has about **2.6 million university students**, concentrated in large cities and regional training centres, and hundreds of thousands of new students enrol every year, many of whom must rent away from home [1].
- University dormitories only meet **part of the demand** [1]. Reports at the start of every school year describe new students crowding dormitory queues and hunting for private rooms [2][3].
- The gap is filled by an informal private rental market: rooms in family houses, "mini apartments" and boarding houses, usually rented with a handwritten or verbal agreement.

### 2.2 How a typical rental works today

1. A student finds a listing in a Facebook group, on Zalo, or on a classifieds site.
2. To "hold" the room, the landlord asks for a **holding deposit** (often 500,000 to 1,000,000 VND) by bank transfer, frequently before the student can see the room in person.
3. At move-in, the student pays a **security deposit**, commonly one month's rent, directly to the landlord.
4. At move-out, the landlord decides how much of the deposit to return.

At every step, the money sits with one party and the other party has to trust them.

### 2.3 What goes wrong

**Fake rooms and holding-deposit scams.** Police and the press warn about this every back-to-school season:

- In April 2026, police in Hai Phong arrested a man who posed as a landlord in the "Hai Phong University of Medicine and Pharmacy students" group, advertised a room at 1.8 million VND per month, collected 1 million VND "holding deposits" from students and then cut contact, re-using new account names after each victim [4]. The police noted that each amount was small but the conduct targeted people in difficult circumstances, and advised students not to transfer deposits before verifying the room and the landlord.
- In August 2026, Hue University issued an official dispatch to all member schools warning incoming students about online scams involving rooms and tuition, and some faculties began publishing vetted lists of boarding houses [5].
- Ho Chi Minh City police have issued similar warnings about rental scams aimed at new students [6], and the national press regularly reports victims who lost money even after viewing a real room [7].

**Withheld deposits at move-out.** Disputes over deductions for "wall paint", "cleaning" or minor wear are common and rarely resolved fairly. Vietnam's Civil Code (Article 328) defines how a deposit should be handled when one side backs out, but there is no neutral party holding the money, so in practice the landlord keeps it and the tenant must either accept the loss or go to court over a sum that is far smaller than the cost of doing so.

**No memory.** A landlord who scammed or short-changed last year's tenants looks identical to an honest one. Reviews in Facebook groups are easy to fake and easy to delete.

### 2.4 Why the timing is right

- **Digital payments are mainstream.** By the end of 2024, **86.97% of Vietnamese adults held a bank account** (up from 31% in 2014), QR payment volume grew **106.7% year on year**, and cashless transactions have grown more than 67% per year on average since 2021 [8]. Students already move rent and deposits digitally; they just have no safe place to put them.
- **Digital assets now have a legal basis.** The Law on Digital Technology Industry, effective 1 January 2026, recognises digital assets as property under the Civil Code [9], and Resolution 05/2025/NQ-CP opened a regulated pilot market for crypto assets [10].
- **Other countries already require neutral deposit holding.** In England, landlords must place tenancy deposits in a government-approved deposit protection scheme within 30 days, and disputes go to a free adjudication service [11]. Vietnam has no equivalent. Tinco offers the same protection with code instead of a government agency.

---

## 3. Problem statement

> Rental deposits in Vietnam's student housing market are paid directly to one party and held without any neutral safeguard. This lets fake landlords steal holding deposits, lets real landlords withhold security deposits without justification, and leaves no reliable record of who behaves well.

We focus on three concrete failure points:

| # | Failure point | Who is hurt | Today's workaround |
|---|---|---|---|
| P1 | Holding deposit paid to a fake or dishonest landlord | Incoming students | "Don't pay before you see the room" warnings |
| P2 | Security deposit withheld or cut unfairly at move-out | Outgoing tenants | Arguing, accepting the loss, or rarely going to court |
| P3 | No trustworthy track record of landlords or tenants | Everyone, including honest landlords | Word of mouth, Facebook reviews |

---

## 4. Target users

### 4.1 Primary: student tenants

*Minh, 18, first-year student from Quang Ngai, moving to Ho Chi Minh City.* He finds rooms in Facebook groups, cannot travel to the city to see every room, and his family's budget cannot absorb a lost deposit. He uses a smartphone and mobile banking every day but has never used crypto.

**Needs:** proof that money is safe before the room is handed over; a fair, fast refund at move-out; a way to check a landlord's history.

### 4.2 Primary: honest landlords

*Mrs Hoa, 52, rents out eight rooms near a university.* She has been burned by tenants who left without notice or damaged rooms, and she loses good tenants who are scared of scams.

**Needs:** protection when a tenant walks away or causes damage; evidence of the room's condition; a way to stand out from scammers.

### 4.3 Secondary: mediators and universities

*A university's Student Affairs office* that already publishes lists of safe boarding houses (as Hue University began doing in 2026 [5]) and fields complaints from students.

**Needs:** a lightweight way to resolve disputes without handling money, and data on which landlords are reliable.

---

## 5. Existing alternatives and their gaps

| Alternative | Strength | Gap |
|---|---|---|
| Pay the landlord directly (status quo) | Simple, familiar | All risk sits with the tenant |
| Police warnings and "see the room first" advice | Raises awareness | Does not stop the payment; students from other provinces often cannot view rooms first |
| University-vetted boarding house lists | Trusted source | Covers few rooms, does not hold money or resolve disputes |
| Bank escrow or notarised contracts | Legally strong | Too slow and expensive for deposits of 1 to 5 million VND |
| Rental listing platforms | Large inventory | Do not hold deposits or track behaviour after the lease starts |
| Government deposit schemes abroad (England's tenancy deposit protection [11]) | Neutral holder backed by law | Not available in Vietnam; run by agencies, not open code |
| Earlier blockchain rental projects (Rentberry, Rentible, Trustless Work's security-deposit escrow, hackathon projects such as RentChain) [13][14][15] | Show that deposits can be locked in a smart contract | Built for other markets and users who already hold crypto. None that we found combines a holding-deposit stage, tenant-only move-in confirmation, partial release on dispute and a wallet-free, VND-first experience for Vietnamese students |

No existing option holds the deposit neutrally, enforces deadlines automatically and builds a public track record at the same time. Deposit escrow itself is not a new idea: England has required it by law since 2007. What is new is a version shaped around how Vietnamese students actually rent, that needs no crypto knowledge.

---

## 6. Proposed solution: Tinco

### 6.1 The idea in one paragraph

The landlord creates a **deposit link** and sends it to the tenant over Zalo. The tenant's holding deposit, and later the full security deposit, go into a smart contract instead of to the landlord. The contract knows the rules both sides agreed to: who must act, by when, and what happens if they do not. It releases money only according to those rules, and every outcome is recorded on Avalanche for anyone to verify.

### 6.2 The tenant's and landlord's journey

| Stage | What the user does | What Tinco guarantees |
|---|---|---|
| **1. Deposit link** | Landlord enters the room details, holding amount, total deposit, move-in deadline and a mediator, then shares the link or QR code. | Room details are fingerprinted on-chain, so they cannot be changed later. |
| **2. Reserve** | Tenant opens the link and pays the holding deposit with one tap. | The landlord cannot touch the money. If the landlord does not hand over the room by the deadline, the tenant is refunded automatically. |
| **3. Move in** | Landlord photographs each part of the room (walls, floor, bathroom, appliances, furniture) and sends the report. Tenant checks it and confirms move-in, topping up to the full deposit. | Only the tenant can confirm move-in, so a fake landlord can never mark a non-existent room as handed over. The photo report's fingerprint is stored on-chain as shared evidence. |
| **4. Renting** | Nothing to do. Optionally, both sides can let the deposit earn yield, split 50/50. | Principal is always returned first. |
| **5. Move out** | Tenant presses "I moved out". Landlord either returns the full deposit in one tap or proposes a deduction with photos. | If the landlord stays silent past the deadline, the full deposit returns to the tenant automatically. |
| **6. Disagreement** | Tenant accepts the deduction or disputes it with their own evidence. | The undisputed part is paid immediately. Only the contested amount waits for the mediator. |
| **7. Mediation** | The mediator compares the move-in report with both sides' evidence and splits the contested amount. | The mediator can only split money between tenant and landlord, never take it. If the mediator stays silent, the amount is split 50/50. |
| **8. Record** | Both profiles update automatically. | Completed leases, amicable settlements, disputes lost and silences are recorded permanently. |

### 6.3 Rules that protect each side

| Situation | Outcome enforced by the contract |
|---|---|
| Landlord takes a reservation but never hands over the room | Holding deposit refunded to the tenant |
| Tenant reserves but never shows up | Holding deposit goes to the landlord, after the tenant has a chance to object (mirrors Civil Code Article 328) |
| Tenant changes their mind before moving in | Holding deposit goes to the landlord |
| Landlord changes their mind before handover | Holding deposit refunded to the tenant |
| Landlord silent after tenant asks for the deposit | Full deposit to the tenant |
| Tenant silent on a proposed deduction | Deduction takes effect |
| Mediator silent | Contested amount split 50/50 |

Because every waiting state has a deadline, **money can never be stuck**. Anyone, including the app's background service, can trigger the outcome once a deadline passes.

### 6.4 What Tinco deliberately does not do

- It does **not** collect or process rent. Rent continues to be paid as usual.
- It does **not** store photos or personal details on the blockchain. Only cryptographic fingerprints (hashes) are on-chain.
- It does **not** let the platform, the mediator or the development team take or redirect anyone's money.

### 6.5 Around the deposit

| Feature | What it does for users |
|---|---|
| **Find a room** | Public listings are open deposit links, so a holding deposit can only go into the contract. Each card shows the landlord's on-chain record and badge. |
| **Trusted landlord badge** | A soulbound token (ERC-5192) a landlord claims once the contract has recorded clean leases. Anyone can revoke it when the record stops qualifying, and other apps can check it with `isTrusted(address)`. |
| **Scam reports** | Signed community warnings, one per wallet per landlord, shown apart from the on-chain facts. |
| **AI damage report** | A vision model compares move-in photos with move-out evidence and suggests a split. The mediator pays per report over x402. The contract never accepts the AI's answer, only the mediator's ruling. |
| **Agreement and reminders** | A printable A4 agreement in English and Vietnamese with the on-chain fingerprint and a QR code, and calendar reminders before every deadline. |
| **Live statistics** | Money locked now, total secured, amicable rate and rulings, read directly from the contract. |
| **Transparency page** | Every contract with its verified source, and a live check that the money held covers every open deposit. |
| **Needs your action** | One list of every lease waiting on you, with a countdown to the moment the contract decides without you. |
| **One-tap reserve** | A student with no wallet presses one button; Tinco creates the wallet, adds test USDC and locks the holding deposit. |
| **Prices in VND** | Every amount is shown in Vietnamese dong first, with the USDC value beside it, and deductions are entered in VND. |
| **Wallet backup** | A quick wallet can be backed up to a file, restored on another device, renamed or removed. |
| **Before/after photos** | A slider over one image compares the move-in photo with the move-out evidence. |

---

## 7. How it works (technical design)

### 7.1 Architecture

```
  Tenant / Landlord / Mediator  (phone browser, no wallet install)
              │  signs actions with a quick in-browser key or Core/MetaMask
              ▼
  Tinco web app (Next.js)
   ├─ /api/relay      pays gas and forwards signed requests (ERC-2771)
   ├─ /api/files      stores photos and reports under their keccak256 hash
   ├─ /api/ai-report  AI damage report behind an x402 paywall (HTTP 402)
   ├─ /api/keeper     calls finalize once a deadline has passed
   ├─ /api/rooms, /api/stats, /api/reports   listings, live numbers, signed reports
   ├─ /api/history    full event history of a lease
   ├─ /api/mediators  every mediator named on a lease, with their record
   ├─ /api/transparency  verification status and live solvency
   ├─ /api/rpc        read-only Avalanche RPC proxy for the browser
   └─ /api/faucet     test USDC for the demo
              │
              ▼
  Avalanche C-Chain (Fuji testnet)
   ├─ CocEscrow       deposit state machine, deadlines, reputation
   ├─ CocForwarder    verifies user signatures for gasless calls
   ├─ CocBadge        soulbound "Trusted landlord" credential (ERC-5192)
   ├─ USDC (EIP-3009) deposits moved by signed authorisation
   └─ ERC-4626 vault  optional yield on idle deposits
```

### 7.2 The escrow state machine

`Offered → Reserved → Active → (ReleaseRequested | SettlementProposed) → Closed`, with `NoShowClaimed` and `Disputed` as side branches and `Cancelled` as an exit. Every transition checks who is calling and whether the relevant deadline has passed.

### 7.3 Key engineering choices

- **Gasless for users.** Users sign typed messages (EIP-712). A relayer submits them through an ERC-2771 forwarder and pays the gas, so the contract still sees the real user as the sender. Deposits move with a signed USDC authorisation (EIP-3009), which only the escrow contract can redeem. Users never hold AVAX and never approve token allowances.
- **Partial release on dispute.** When a tenant disputes a deduction, the contract pays out the uncontested part in the same transaction and freezes only the contested amount.
- **No stuck funds.** Payments are pushed to recipients, with a pull-based fallback, so one blocked address cannot freeze a lease.
- **Tamper-evident evidence.** Photos and reports are stored off-chain under their keccak256 hash, which is the same value recorded on-chain. The app re-hashes every document it displays and shows whether it still matches.
- **Sybil-resistant reputation.** Only leases that reached move-in count, and each is weighted by deposit size multiplied by time held ("USDC-days"). Faking a good record means locking real money for a long time.
- **Optional yield.** If both sides opt in, the deposit sits in an ERC-4626 vault and yield is split 50/50. If the vault loses value, payouts are computed on what remains and the lease still closes. The MVP uses a simulated vault.
- **Machine payments with x402.** The AI report endpoint answers HTTP 402 with payment requirements. The mediator signs an EIP-3009 authorisation for 0.10 USDC to the server, which verifies it, runs the model, then settles the payment on Avalanche and returns the receipt in the `X-PAYMENT-RESPONSE` header. No account, subscription or API key is needed on the buyer's side. If the model fails, the payment is never settled, so the mediator is not charged.
- **A model that can be swapped.** The vision model is reached through OpenRouter (default: Gemini 2.5 Flash Lite, well under one US cent per report). If a model is retired or unavailable, the server falls back to the next one on a list, and each report records which model wrote it.
- **Deadlines that enforce themselves.** A keeper calls `finalize` as soon as a deadline passes: the lease page triggers it, GitHub Actions sweeps every 5 minutes, a daily cron backs it up, and anyone else may call it too.
- **Deadlines per lease.** Each offer stores its own response and mediation windows (30 seconds to 60 days), so the same contract serves a 12-month lease with 3-day windows and a 2-minute demo.
- **A relayer that does not trip over itself.** Relayer transactions are queued so two never take the same nonce, and the relay, faucet and uploads are rate-limited per IP. Each transaction gets a generous fee cap, so a sudden rise in Avalanche's base fee does not leave it waiting (the network still charges only the actual fee). A transaction that is not mined within 45 seconds is reported as stuck instead of hanging, and `npm run relayer` shows the relayer's balance and pending transactions and can clear stuck ones. See SECURITY.md for the full threat model.
- **Token-agnostic.** The contract works with any EIP-3009 token, so it can switch to whatever regulated asset Vietnamese law permits.

### 7.4 Why blockchain, and why Avalanche

A neutral escrow needs a holder that **neither side controls and that cannot change the rules afterwards**. A smart contract provides exactly that, without a licensed intermediary and at a cost low enough for deposits of a few million dong. Avalanche's C-Chain offers fast finality and very low fees, so each step feels like a normal app action. In our Fuji test run of the dispute story, every step, including signing, uploading evidence and relaying, was confirmed in 2.7 to 5.4 seconds (9.7 seconds for the AI report, which includes running the model), and the users paid no gas. It is EVM-compatible, has native USDC with EIP-3009, and has a path to a dedicated Avalanche L1 if a university network or city wanted its own deposit chain with custom rules.

---

## 8. Expected impact

### 8.1 For each stakeholder

| Stakeholder | Benefit |
|---|---|
| Student tenants | Cannot lose a holding deposit to a fake room; get the deposit back automatically if the landlord stays silent; get the undisputed part immediately in a dispute |
| Honest landlords | Protection when tenants walk away or cause damage; shared photo evidence; a public record that sets them apart from scammers |
| Universities | A concrete tool behind their "safe housing" lists; disputes resolved without handling money |
| Families | Peace of mind when sending a child to study in another city |

### 8.2 How we would measure success in a pilot

- Number of deposits held and total value protected.
- Share of leases closed amicably without mediation.
- Median time from move-out to refund (target: same day).
- Number of scam reports from pilot-university students before and after adoption.

---

## 9. Legal, ethical and risk analysis

| Question | Our position |
|---|---|
| **Is a USDC deposit legal in Vietnam?** | This is a grey area and we state it openly. Digital assets are recognised as property from 2026 [9], and the crypto pilot requires trading through licensed providers [10]. Tinco only holds collateral, never processes rent, and never holds money on its own behalf. The contract is token-agnostic, so production would use whatever licensed asset or VND-backed instrument the law allows. The MVP runs on testnet with a test token that has no value. |
| **Does Tinco replace the law on deposits?** | No. It implements the same logic as Civil Code Article 328 (the side that backs out loses the holding deposit) and adds evidence and deadlines. Parties keep every legal right they have today. |
| **Why would landlords adopt it?** | The contract protects landlords too, honest landlords gain a visible record, and universities can require it for their recommended-housing lists. |
| **What if the mediator is biased?** | Both sides choose the mediator in advance; the mediator can only split money between the parties; their ruling history is public. |
| **Can reputation be gamed?** | Only completed leases count, weighted by money multiplied by time, which makes fake records costly. |
| **Privacy** | No photos, names or addresses on-chain. Reputation contains only objective counts. |
| **Smart-contract risk** | 37 automated tests cover normal flows and attacks (fake landlord, mediator self-dealing, forged relays, blocked recipients, vault loss). A production launch would require an independent audit. |
| **Ethics** | Tinco does not resell anyone's content or data, does not speculate with deposits without consent, and is free for tenants. |

---

## 10. Business model and go-to-market

- **Free for tenants**, always.
- **Landlords** pay a small flat fee per lease or a share of the optional yield, in exchange for protection and a verified profile.
- **Universities** partner with Tinco to power their recommended-housing lists and act as default mediators, starting with one pilot university and its student affairs office.
- **Channel:** the deposit link travels over Zalo and Facebook, the same places students already look for rooms, so Tinco fits the existing behaviour rather than replacing it.

---

## 11. Current status

The MVP is complete and runs on the Avalanche Fuji testnet. Contract v2 (per-lease deadlines) is deployed with the scripts in `contracts/`; the app's Transparency page lists the live addresses with their Sourcify verification.

Delivered so far:

- Escrow and badge contracts with all flows above and 37 passing tests, a gas report and CI on every push.
- Gasless relayer, in-browser quick wallets and Core/MetaMask support.
- Web app with deposit links and QR codes, photo condition reports, deduction and dispute flows, mediator ruling, on-chain receipts and public reputation pages.
- A judge demo that plays three stories on its own (happy ending, dispute with AI, landlord ghosts), or lets judges click every step, with landlord, tenant and mediator side by side. During autoplay a pointer moves to the real button in each person's window and presses it, with a caption naming who pressed what, and the final screen shows how much each side received.
- A Transparency page with a live solvency check, the full on-chain history of every lease, a "needs your action" inbox, one-tap reserve, wallet backup and restore, and an installable mobile app (PWA).
- AI damage reports paid over x402, the trusted landlord badge, a room finder with signed scam reports, live statistics, an automatic keeper, and a printable bilingual agreement with calendar reminders.
- English and Vietnamese interface.

### Live contracts on Avalanche Fuji

| Contract | Address |
|---|---|
| CocEscrow | [`0xfE76826F02d2251A054C4272C78753E657B1FfD4`](https://testnet.snowtrace.io/address/0xfE76826F02d2251A054C4272C78753E657B1FfD4) |
| CocForwarder | [`0x1bD5980438b65cC76F34182a1b11e9884379B029`](https://testnet.snowtrace.io/address/0x1bD5980438b65cC76F34182a1b11e9884379B029) |
| CocBadge | [`0x969DA71BD8eaB2bB658DEce059a1fEFf5Ee6C9E7`](https://testnet.snowtrace.io/address/0x969DA71BD8eaB2bB658DEce059a1fEFf5Ee6C9E7) |
| MockUSDC (test token, EIP-3009) | [`0x1f5f6616aB5b67393D69D41D21dBc8D0B2D6Cbf1`](https://testnet.snowtrace.io/address/0x1f5f6616aB5b67393D69D41D21dBc8D0B2D6Cbf1) |
| DemoYieldVault (ERC-4626) | [`0xe1E0146A6D0f97d6aBaC5A438E467cA6243c32Ff`](https://testnet.snowtrace.io/address/0xe1E0146A6D0f97d6aBaC5A438E467cA6243c32Ff) |

The contracts keep the project's working name, Coc, in their identifiers (for example `CocEscrow`), since renaming them would mean redeploying and re-verifying them.

## 12. Roadmap

| Phase | Scope |
|---|---|
| Hackathon (Nov 2026) | Public demo deployment, verified contracts, demo video and pitch |
| Next | Zalo and Telegram reminders, landlord identity checks with a university partner, AI reports in Vietnamese legal language |
| Pilot | One university, its student affairs office as mediator, a few dozen landlords |
| Production | Security audit, regulated settlement asset, optional Avalanche L1 for a university network |

---

## 13. Team

**Team Assembly** is a one-person team in Team1 Vietnam UniHack 2026.

| Member | Affiliation |
|---|---|
| Quoc-Linh Vo | Faculty of Information Technology, University of Science, Ho Chi Minh City, Vietnam; Vietnam National University, Ho Chi Minh City, Vietnam |

Repository: https://github.com/vquclinh/tinco-deposit-escrow

---

## References

1. Đại biểu Nhân dân, "Cần chính sách riêng để phát triển nhà ở sinh viên". https://daibieunhandan.vn/can-chinh-sach-rieng-de-phat-trien-nha-o-sinh-vien-10441298.html
2. VnExpress, "Tân sinh viên cấp tập tìm phòng trọ". https://vnexpress.net/tan-sinh-vien-cap-tap-tim-phong-tro-4931986.html
3. Pháp Luật TP.HCM, "Tân sinh viên 'chen chân' tìm chỗ ở ký túc xá, săn lùng nhà trọ ở TP.HCM". https://plo.vn/tan-sinh-vien-chen-chan-tim-cho-o-ky-tuc-xa-san-lung-nha-tro-o-tphcm-post867983.html
4. VnExpress, "'Bẫy' phòng trọ ảo lừa sinh viên, người lao động", 5 April 2026. https://vnexpress.net/bay-phong-tro-ao-lua-sinh-vien-nguoi-lao-dong-5058726.html
5. VietnamPlus, "Đại học Huế phối hợp xử lý thủ đoạn lừa đảo cho thuê trọ online", August 2026. https://www.vietnamplus.vn/dai-hoc-hue-phoi-hop-xu-ly-thu-doan-lua-dao-cho-thue-tro-online-post1131800.vnp
6. VOH, "Công an TPHCM cảnh báo chiêu lừa thuê trọ nhắm vào sinh viên mùa nhập học". https://voh.com.vn/phap-luat/cong-an-tphcm-canh-bao-chieu-lua-thue-tro-nham-vao-sinh-vien-mua-nhap-hoc-615671.html
7. Báo Pháp luật Việt Nam, "Bẫy lừa đảo thuê nhà trọ online: Xem nhà thật, vẫn mất tiền". https://baophapluat.vn/bay-lua-dao-thue-nha-tro-online-xem-nha-that-van-mat-tien.html
8. Fintech News Singapore, "QR Codes and A2A Drive Vietnam's Cashless Boom Amid Government-Backed Digital Payment Push". https://fintechnews.sg/119732/vietnam/qr-codes-and-a2a-drive-vietnams-cashless-boom-amid-government-backed-digital-payment-push/
9. VnEconomy, "Tài sản số của người dân được bảo vệ như thế nào?" (Law on Digital Technology Industry, effective 1 January 2026). https://vneconomy.vn/tai-san-so-cua-nguoi-dan-duoc-bao-ve-nhu-the-nao.htm
10. Baker McKenzie, "Vietnam: New resolution on pilot program for digital and crypto assets market" (Resolution 05/2025/NQ-CP). https://www.bakermckenzie.com/-/media/files/insight/publications/alerts/09/vietnam-new-resolution-on-pilot-program-for-digital-and-crypto-assets-marke.pdf
11. GOV.UK, "Tenancy deposit protection". https://www.gov.uk/tenancy-deposit-protection
12. Luật sư Việt Nam, "Có được phép đặt cọc bằng vàng, ngoại tệ hay séc không?" (Civil Code Article 328). https://lsvn.vn/co-duoc-phep-dat-coc-bang-vang-ngoai-te-hay-sec-khong-1705289712-a139985.html
13. Coin Bureau, "Rentberry: Ethereum solution for apartment rentals". https://coinbureau.com/ico/rentberry-ethereum-solution-apartment-rentals
14. Rentible, "Deposit and rental smart contract". https://rentible.gitbook.io/rentible.io/real-world-assets-tokenization/product/deposit-and-rental-smart-contract
15. Trustless Work, "Security deposits" use case. https://docs.trustlesswork.com/trustless-work/use-cases-by-indutry/security-deposits
