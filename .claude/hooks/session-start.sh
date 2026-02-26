#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

REPO_DIR="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"

echo "Installing frontend dependencies..."
cd "$REPO_DIR/frontend"
yarn install

echo "Installing backend dependencies..."
cd "$REPO_DIR/backend"
# Install all packages; skip any that cannot be found (e.g. private packages)
while IFS= read -r pkg || [ -n "$pkg" ]; do
  # Skip empty lines and comments
  [[ -z "$pkg" || "$pkg" == \#* ]] && continue
  pip install "$pkg" --quiet 2>/dev/null || echo "Warning: could not install '$pkg', skipping."
done < requirements.txt

echo "Session start hook completed successfully."
