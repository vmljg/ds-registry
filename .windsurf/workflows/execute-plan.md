---
description: Execute Plan from .plan.md file
---

# Execute Plan Workflow

This workflow parses a referenced `.plan.md` file and systematically completes each TODO task outlined in the plan.

## Instructions

When executing a plan file:

1. **Parse the Plan File**
   - Read the entire `.plan.md` file to understand the full context
   - Identify the "TODO List" section
   - Extract all unchecked TODO items (marked with `- [ ]`)
   - Note any dependencies or groupings in the TODO structure

2. **Understand the Context**
   - Review the "Overview" section to understand the project goal
   - Review "Requirements" sections (Functional, Technical, Accessibility)
   - Review "Approach" and "Implementation Strategy" for guidance
   - Review "Technical Considerations" for important constraints
   - Review "Success Criteria" to understand the definition of done

3. **Create Execution Plan**
   - Use the `update_plan` tool to create a structured plan based on the TODO items
   - Group related TODOs into logical steps
   - Identify dependencies between tasks
   - Prioritize tasks in the order they should be completed

4. **Execute Tasks Sequentially**
   - Work through each TODO item one at a time
   - Mark tasks as "in_progress" when starting
   - Mark tasks as "completed" when finished
   - Update the `.plan.md` file to check off completed items (change `- [ ]` to `- [x]`)
   - If a task fails or is blocked, note it and ask for guidance

5. **Follow Project Standards**
   - Adhere to all rules defined in `.windsurf/rules/`
   - Follow the code style guide in `docs/style/`
   - Use existing components and patterns from the codebase
   - Maintain consistency with the design system

6. **Verify Each Task**
   - After completing each TODO, verify it works as expected
   - Run relevant tests or linting commands
   - Check that the implementation matches the requirements
   - Update documentation as needed

7. **Handle Blockers**
   - If a task cannot be completed due to missing information, ask the user
   - If a task reveals issues with the plan, suggest updates
   - If dependencies are missing, complete them first

8. **Progress Updates**
   - Update the plan regularly to show progress
   - Check off completed TODOs in the `.plan.md` file
   - Provide concise status updates after completing groups of related tasks

9. **Completion**
   - Once all TODOs are complete, verify all "Success Criteria" are met
   - Run final tests and validation
   - Update the `.plan.md` file with completion status
   - Provide a summary of what was accomplished

## Example Usage

**User**: "Execute the plan in `docs/pdd/on-screen-keyboard.plan.md`"

**Expected Behavior**:

1. Read and parse the plan file
2. Create a structured execution plan from the TODO list
3. Begin implementing tasks in order
4. Update the plan file as tasks are completed
5. Continue until all TODOs are done or blocked

## Notes

- This workflow is designed for comprehensive, multi-step implementation plans
- Tasks should be completed in logical order, respecting dependencies
- The `.plan.md` file serves as the source of truth and should be updated as work progresses
- Always verify that completed work meets the success criteria defined in the plan
- If the plan needs adjustment based on discoveries during implementation, update it accordingly
