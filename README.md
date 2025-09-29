# GradJourney

## Git Workflow

- Default branches: `main` (stable), `develop` (integration).
- Feature branches: `feature/<scope>`; bugfix: `fix/<scope>`.
- PRs:
  - Target `develop` (features) or `main` (release merges).
  - Title uses Conventional Commits (e.g., `feat(roadmap): add beginner HTML module`).
  - At least 1 code review required.
  - All checks given green (`CI`).
  - Resolve all review comments.

## Release

- Merge `develop` → `main` via PR, tag `vX.Y.Z`, create release notes.
