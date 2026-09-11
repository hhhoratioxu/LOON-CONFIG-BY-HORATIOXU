# Horatio Loon

A curated collection of Loon routing rules, plugins, scripts, and configurations maintained by Horatio.

## Structure

- `Lsr/` — Loon routing rules (`.lsr`)
- `Lpx/` — Loon plugins (`.lpx`)
- `Script/` — JavaScript and helper scripts
- `Config/` — Loon configuration files
- `Rule/` — legacy compatibility paths kept for existing subscriptions

## Rules

### Apple

Canonical path: `Lsr/Apple.lsr`

Raw URL:

`https://raw.githubusercontent.com/hhhoratioxu/LOON-CONFIG-BY-HORATIOXU/main/Lsr/Apple.lsr`

The Apple ruleset covers Apple Intelligence, Siri, APNs Push, iCloud, Private Relay, Apple ID, App Store, TestFlight, Apple Music, Apple TV, Apple News, Maps, Find My, Wallet, software updates, developer services, Apple CDN/CNAMEs, China-specific Apple services, IPv4/IPv6 ranges, and legacy Apple domains.

### Weverse

Canonical path: `Lsr/Weverse.lsr`

Raw URL:

`https://raw.githubusercontent.com/hhhoratioxu/LOON-CONFIG-BY-HORATIOXU/main/Lsr/Weverse.lsr`

## Compatibility

Existing `Rule/*.list` URLs are intentionally kept so current Loon subscriptions do not break. New rules should use the `Lsr/*.lsr` naming convention.

## Naming

- `.lsr` — Loon routing rule
- `.lpx` — Loon plugin

> Repository name planned: `Horatio-Loon`.
