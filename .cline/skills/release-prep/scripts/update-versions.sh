#!/bin/bash
set -euo pipefail

# update-versions.sh <version>
# Updates all package.json files in the repository (excluding node_modules/.git) to the given version.

VERSION="$1"
if [ -z "$VERSION" ]; then
  echo "Usage: $0 <version>"
  exit 2
fi

# Find package.json files excluding node_modules and .git
FILES=$(find . -name package.json -not -path '*/node_modules/*' -not -path './.git/*')

if [ -z "$FILES" ]; then
  echo "No package.json files found."
  exit 0
fi

for f in $FILES; do
  echo "Updating $f -> version $VERSION"
  tmpfile=$(mktemp)
  if jq --arg v "$VERSION" '.version=$v' "$f" > "$tmpfile"; then
    mv "$tmpfile" "$f"
  else
    echo "Failed to update $f"
    rm -f "$tmpfile"
    exit 1
  fi
done

echo "Updated versions to $VERSION in:"
for f in $FILES; do echo " - $f"; done

echo "Note: files have been modified on disk. Review changes and commit with your preferred git workflow."
