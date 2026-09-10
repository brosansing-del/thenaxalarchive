# The Naxal Archive — Data Dictionary v1

## Core rule
Every public number should resolve to a structured record, a source_id, a reporting date, a verification status and a revision trail.

## 1. Geography
`data/geography/district_status_history.csv`
Tracks district-level administrative/analytical status by year.

Key fields: record_id, year, state, district, status, classification, source_id, verified, last_updated.

## 2. Violence
`data/violence/incidents.csv`
One row per incident. Do not aggregate manually in the source file; derive annual/state totals in code.

## 3. Organisations / people
`data/organisations/leadership.csv`
Biographical and organisational roles with start/end dates. Avoid unsupported labels; keep status and source explicit.

## 4. Infrastructure
`data/infrastructure/infrastructure_incidents.csv`
Tracks attacks, damage, rebuilds and other documented events affecting roads, rail, telecom, power, public buildings and similar assets.

## 5. Development
`data/development/district_development.csv`
Long-format indicator table. One row = one district + year + indicator + value. This format scales better than hundreds of columns.

## 6. Government response
`data/government_response/surrenders.csv`
Stores surrender totals and categories separately from incident data.

## 7. Source registry
`data/sources/source_registry.csv`
Every dataset references `source_id`. Store publication date separately from access date.

Recommended source types: government, court, police, parliament, audit, academic, field-reporting, media, civil-society.

## 8. Revisions
`data/sources/revisions.csv`
Every material correction should be logged, including changed field, old value, new value, reason and source.

## Verification status vocabulary
Use only: `verified`, `provisional`, `disputed`, `unverified`, `superseded`.

## Identifier rules
IDs must be stable and never recycled. Examples: `INC-2026-0001`, `SRC-MHA-2026-001`, `PER-0001`, `DEV-2025-SUKMA-ROADKM`.

## Date rules
Use ISO 8601: `YYYY-MM-DD`. For year-only values, use a dedicated year field rather than inventing a date.
