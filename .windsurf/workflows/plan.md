---
description: Create a structured planning document for tasks or projects
auto_execution_mode: 1
---

# Planning Mode Workflow

This workflow creates a comprehensive `.plan.md` file to organize and structure your work before implementation.

## Steps

1. **Gather Requirements**
   - Ask clarifying questions about the task, feature, or project
   - Understand the scope, constraints, and success criteria
   - Identify dependencies and prerequisites

2. **Create Planning Document**
   - Generate a `.plan.md` file in `./docs/pdd`
   - Include the following sections:
     - **Overview**: High-level description of the task/project
     - **Goals & Objectives**: What needs to be accomplished
     - **Requirements**: Functional and technical requirements
     - **Approach**: Proposed solution or implementation strategy
     - **Technical Considerations**: Architecture, dependencies, tools
     - **Risks & Challenges**: Potential blockers or concerns
     - **Success Criteria**: How to measure completion
     - **TODO List**: Actionable items with unchecked checkboxes

3. **Review & Refine**
   - Present the plan to the user
   - Iterate based on feedback
   - Update the document as needed

## Example Structure

```markdown
# Project/Task Name

## Overview

Brief description of what needs to be built or accomplished.

## Goals & Objectives

- Primary goal
- Secondary goals
- Expected outcomes

## Requirements

### Functional Requirements

- Requirement 1
- Requirement 2

### Technical Requirements

- Technology/framework constraints
- Performance requirements
- Compatibility needs

## Approach

Detailed explanation of the proposed solution or implementation strategy.

## Technical Considerations

- Architecture decisions
- Dependencies
- Tools and libraries
- Integration points

## Risks & Challenges

- Potential blocker 1
- Potential blocker 2
- Mitigation strategies

## Success Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## TODO List

- [ ] Action item 1
- [ ] Action item 2
- [ ] Action item 3
```

## Usage Tips

- Use this workflow at the start of any non-trivial task
- Keep the plan updated as requirements change
- Reference the plan throughout implementation
- Check off TODO items as you complete them
