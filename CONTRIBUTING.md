CONTRIBUTING
============

Thanks for helping improve this repository. This short guide explains how to contribute.

How to contribute
- Report an issue if you find a problem or want to request a feature.
- Fork the repository and create a branch for your change.
- Make small, focused commits with clear messages describing the intent of the change.
- Open a pull request (PR) from your branch with a concise description of what you changed and why.

Branching and commits
- Use descriptive branch names (e.g., `fix/missing-source`, `feature/examples-aya`).
- Keep commits small and atomic. Each commit should represent a single logical change.

Validating JSON and content
- The project data lives in `data/tajweed.json`. Before submitting a PR, validate that the file contains valid JSON. You can validate it in multiple ways:
	- Use your editor's built-in JSON validation (many editors highlight JSON syntax errors automatically).
	- Use an online JSON validator if you prefer a quick web check.
	- Run a local JSON validator tool of your choice (for example, any language runtime's JSON parser, or a small script). The choice of tool and its exact invocation is up to you — pick whatever works on your system.

Previewing the site
- To preview changes locally, open `index.html` directly in your browser, or serve the project folder using any static server tool you prefer. The exact commands or tools are intentionally not prescribed — use the method that works for you (Python, Node, built-in editor servers, or other local static servers).

Content guidelines
- Keep explanations concise and sourced. If you add or change an explanation, include at least one written source in the `sources` array for that node.


Pull request checklist
- The PR description explains the change and includes references where appropriate.
- `data/tajweed.json` remains valid JSON.
- New or updated content includes at least one written source in `sources`.

Thank you for contributing!