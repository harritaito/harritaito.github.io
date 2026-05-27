---
paths:
  - "components/__tests__/**"
  - "**/*.test.js"
  - "jest.config.js"
  - "test-setup.js"
---

# Test Rules

## Jest
- Keep tests focused on observable behavior and high-risk regressions.
- Prefer stable selectors and assertions over implementation details.
- `styled-jsx` appends generated class names, so avoid exact full-class assertions.
- Mock browser APIs at the test boundary rather than changing production code for
  the test harness.
