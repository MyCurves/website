#!/bin/bash
set -e
cd "$(dirname "$0")/.."

git add -A
git commit -F- <<'EOF'
Replace Decap CMS with Pages CMS and fix broken internal links.

Add .pages.yml for Pages CMS, CMS-backed info pages, link validation script,
and route fixes for sale, cart, footer, and navigation targets.
EOF

git push origin HEAD
