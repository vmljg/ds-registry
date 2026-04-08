import React, { useEffect, useState } from "react";
import { addons, types, useStorybookState, useStorybookApi } from "storybook/manager-api";
import { AddonPanel, SyntaxHighlighter } from "storybook/internal/components";
import { ADDON_ID, PANEL_ID } from "./index";
import { generateRegistryItem, generateRegistry } from "./utils/analyze-story";

/**
 * Registry Panel Component
 * Displays the current story as a shadcn/ui registry-item JSON
 */
const RegistryPanel: React.FC = () => {
  const [registryJson, setRegistryJson] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [format, setFormat] = useState<"item" | "registry">("item");
  const state = useStorybookState();
  const api = useStorybookApi();

  useEffect(() => {
    const { storyId } = state;

    if (!storyId) {
      setRegistryJson("");
      return;
    }

    // Get full story data including parameters using the API
    const storyData = api.getData(storyId);

    if (!storyData) {
      setRegistryJson("");
      return;
    }

    // Access story parameters which contain source code
    // The source code is automatically transformed by preview.ts to extract clean component JSX
    const parameters = (storyData as any).parameters;
    const componentCode = parameters?.docs?.source?.code;

    const registryItem = generateRegistryItem(
      storyId,
      storyData.name || storyId,
      componentCode,
      !!componentCode, // Include content if we have it
    );

    // Generate JSON based on selected format
    let json: string;
    if (format === "registry") {
      // Wrap in registry.json format
      const registry = generateRegistry(
        [registryItem],
        "storybook-registry",
        window.location.origin
      );
      json = JSON.stringify(registry, null, 2);
    } else {
      // Show just the registry-item
      json = JSON.stringify(registryItem, null, 2);
    }

    setRegistryJson(json);
  }, [state.storyId, api, format]);

  const handleCopy = () => {
    navigator.clipboard.writeText(registryJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!registryJson) {
    return (
      <div style={{ padding: "1rem", color: "#666" }}>
        <p>Select a story to view its registry-item JSON</p>
      </div>
    );
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          padding: "0.5rem 1rem",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>
            {format === "item" ? "Registry Item" : "Registry JSON"}
          </h3>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            <button
              onClick={() => setFormat("item")}
              style={{
                padding: "0.125rem 0.5rem",
                fontSize: "11px",
                border: "1px solid #ddd",
                borderRadius: "3px",
                background: format === "item" ? "#0969da" : "#fff",
                color: format === "item" ? "#fff" : "#666",
                cursor: "pointer",
              }}
            >
              Item
            </button>
            <button
              onClick={() => setFormat("registry")}
              style={{
                padding: "0.125rem 0.5rem",
                fontSize: "11px",
                border: "1px solid #ddd",
                borderRadius: "3px",
                background: format === "registry" ? "#0969da" : "#fff",
                color: format === "registry" ? "#fff" : "#666",
                cursor: "pointer",
              }}
            >
              Registry
            </button>
          </div>
        </div>
        <button
          onClick={handleCopy}
          style={{
            padding: "0.25rem 0.75rem",
            fontSize: "12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: copied ? "#10b981" : "#fff",
            color: copied ? "#fff" : "#333",
            cursor: "pointer",
          }}
        >
          {copied ? "✓ Copied!" : "Copy JSON"}
        </button>
      </div>
      <div
        style={{
          padding: "0.5rem 1rem",
          borderBottom: "1px solid #eee",
          fontSize: "12px",
          color: "#666",
        }}
      >
        <strong>Suggested path:</strong>{" "}
        {(() => {
          try {
            if (!registryJson) return "";
            const parsed = JSON.parse(registryJson);
            if (format === "registry") {
              return parsed.items?.[0]?.files?.[0]?.path || "";
            }
            return parsed.files?.[0]?.path || "";
          } catch {
            return "";
          }
        })()}
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "1rem" }}>
        <SyntaxHighlighter language="json" copyable={false}>
          {registryJson}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

// Register the add-on
addons.register(ADDON_ID, () => {
  // Register a panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Registry",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => (
      <AddonPanel active={active || false}>
        <RegistryPanel />
      </AddonPanel>
    ),
  });
});
