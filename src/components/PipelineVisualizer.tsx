import React, { useState } from 'react';
import { pipelineNodes, incidentScenarios } from '../data/portfolioData';
import { 
  Database, 
  Workflow, 
  Cloud, 
  Layers, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Terminal, 
  RefreshCw, 
  Zap, 
  ShieldAlert, 
  Info,
  Server
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  DatabaseZap: Database,
  Workflow: Workflow,
  Cloud: Cloud,
  Layers: Layers,
  Cpu: Cpu,
  Activity: Activity
};

export default function PipelineVisualizer() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('matillion');
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [isResolving, setIsResolving] = useState<boolean>(false);
  const [resolvedScenarios, setResolvedScenarios] = useState<Record<string, boolean>>({});

  const activeScenario = incidentScenarios.find(s => s.id === activeScenarioId);
  const selectedNode = pipelineNodes.find(n => n.id === selectedNodeId) || pipelineNodes[0];

  const handleSelectScenario = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    const scenario = incidentScenarios.find(s => s.id === scenarioId);
    if (scenario) {
      setSelectedNodeId(scenario.affectedNode);
    }
  };

  const handleResolveIncident = () => {
    if (!activeScenario) return;
    setIsResolving(true);

    setTimeout(() => {
      setIsResolving(false);
      setResolvedScenarios(prev => ({ ...prev, [activeScenario.id]: true }));
    }, 600);
  };

  const handleReset = () => {
    setActiveScenarioId(null);
    setSelectedNodeId('matillion');
  };

  const isCurrentScenarioResolved = !!(activeScenario && resolvedScenarios[activeScenario.id]);

  return (
    <section id="pipeline" className="section pipeline-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Pipeline example</span>
          </div>
          <h2 className="section-title">How the pipeline fits together</h2>
          <p className="section-subtitle">
            A simplified view of the stack I support — Matillion, AWS, Snowflake, Databricks.
            Numbers below are samples to show the shape of the flow, not live production data.
            The three examples are past incident patterns, shortened.
          </p>
        </div>

        {/* Incident Simulation Control Bar */}
        <div className="simulator-controls glass-panel">
          <div className="simulator-header">
            <div className="simulator-title">
              <ShieldAlert size={18} className="text-accent" />
              <span>Three incident examples — pick one</span>
            </div>
            {activeScenarioId && (
              <button onClick={handleReset} className="btn btn-secondary btn-sm">
                <RefreshCw size={13} />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="scenario-buttons">
            {incidentScenarios.map((scen) => {
              const isSelected = activeScenarioId === scen.id;
              const isResolved = resolvedScenarios[scen.id];

              return (
                <button
                  key={scen.id}
                  onClick={() => handleSelectScenario(scen.id)}
                  className={`scenario-btn ${isSelected ? 'active' : ''} ${isResolved ? 'resolved' : ''}`}
                >
                  <div className="scenario-btn-top">
                    <span className="scenario-tag">{scen.severity}</span>
                    {isResolved ? (
                      <span className="status-badge-resolved"><CheckCircle2 size={12} /> Read</span>
                    ) : (
                      <span className="scenario-component">{scen.component}</span>
                    )}
                  </div>
                  <span className="scenario-btn-title">{scen.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Pipeline Nodes Flow */}
        <div className="pipeline-flow-container glass-panel">
          <div className="pipeline-flow-header">
            <div className="pipeline-status-indicator">
              <span className={`flow-pulse ${activeScenario && !isCurrentScenarioResolved ? 'pulse-alert' : 'pulse-healthy'}`}></span>
              <span className="flow-status-text">
                {activeScenario && !isCurrentScenarioResolved ? (
                  <strong className="text-amber">Viewing: {activeScenario.title}</strong>
                ) : (
                  <strong className="text-emerald">Sample data — not live</strong>
                )}
              </span>
            </div>
            <span className="pipeline-hint">Click a box for details</span>
          </div>

          {/* Node Grid */}
          <div className="pipeline-grid">
            {pipelineNodes.map((node, index) => {
              const Icon = iconMap[node.icon] || Server;
              const isSelected = selectedNodeId === node.id;
              const isAffected = activeScenario && activeScenario.affectedNode === node.id && !isCurrentScenarioResolved;

              return (
                <div key={node.id} className="pipeline-node-wrapper">
                  <div
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`pipeline-node ${isSelected ? 'node-selected' : ''} ${isAffected ? 'node-incident' : ''}`}
                  >
                    <div className="node-icon-wrapper">
                      <Icon size={22} className={isAffected ? 'icon-alert' : 'icon-nominal'} />
                      <span className={`node-pulse-dot ${isAffected ? 'dot-alert' : 'dot-nominal'}`}></span>
                    </div>
                    <div className="node-info">
                      <span className="node-step">0{index + 1}</span>
                      <h3 className="node-name">{node.name}</h3>
                      <span className="node-tech">{node.tech}</span>
                    </div>
                    <div className="node-metrics-bar">
                      <span className="node-metric-val">{node.latency}</span>
                      <span className="node-metric-dot">•</span>
                      <span className="node-metric-val">{node.throughput}</span>
                    </div>
                  </div>
                  {index < pipelineNodes.length - 1 && (
                    <div className={`pipeline-connector ${isAffected ? 'connector-alert' : ''}`}>
                      <div className="connector-line"></div>
                      <div className="connector-arrow"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Two-Column Telemetry & Incident Inspector */}
        <div className="pipeline-details-grid">
          {/* Selected Node Telemetry Inspector */}
          <div className="node-inspector-card glass-panel">
            <div className="card-top-row">
              <div className="inspector-heading">
                <span className="card-badge">WHAT IT DOES</span>
                <h3>{selectedNode.name}</h3>
                <span className="inspector-role">{selectedNode.role}</span>
              </div>
              <div className="inspector-badge-status">
                {activeScenario && activeScenario.affectedNode === selectedNode.id && !isCurrentScenarioResolved ? (
                  <span className="status-pill status-alert">
                    <span className="status-dot"></span>
                    <span>IN EXAMPLE</span>
                  </span>
                ) : (
                  <span className="status-pill">
                    <span className="status-dot"></span>
                    <span>SAMPLE</span>
                  </span>
                )}
              </div>
            </div>

            <p className="inspector-description">{selectedNode.description}</p>

            <div className="inspector-stats-grid">
              <div className="stat-box">
                <span className="stat-label">Latency (sample)</span>
                <span className="stat-value">{selectedNode.latency}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Throughput (sample)</span>
                <span className="stat-value">{selectedNode.throughput}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Tech</span>
                <span className="stat-value font-mono">{selectedNode.tech.split(' / ')[0]}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Support</span>
                <span className="stat-value text-emerald">L2 covered</span>
              </div>
            </div>

            <div className="inspector-actions-footer">
              <span className="font-mono text-muted text-xs">
                Sample values for illustration.
              </span>
            </div>
          </div>

          {/* Incident Logs & RCA Resolution Console */}
          <div className="incident-console-card glass-panel">
            <div className="console-header">
              <div className="console-title">
                <Terminal size={16} />
                <span>Incident notes</span>
              </div>
              {activeScenario && (
                <span className="console-severity-pill">{activeScenario.severity}</span>
              )}
            </div>

            {activeScenario ? (
              <div className="console-body">
                {/* Live Simulated Logs */}
                <div className="terminal-logs">
                  <div className="terminal-logs-bar">
                    <span>SHORTENED LOG PATTERN</span>
                    <span>SAMPLE</span>
                  </div>
                  <div className="logs-content">
                    {activeScenario.logs.map((log, i) => (
                      <div key={i} className="log-line">
                        <code>{log}</code>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Root Cause Analysis (RCA) Box */}
                <div className="rca-breakdown">
                  <div className="rca-title">
                    <Info size={15} className="text-cyan" />
                    <strong>What caused it:</strong>
                  </div>
                  <p className="rca-text">{activeScenario.rca}</p>
                </div>

                {/* Step-by-Step Runbook Actions */}
                <div className="resolution-steps">
                  <span className="steps-title">What I did:</span>
                  <ul>
                    {activeScenario.resolution.map((step, idx) => (
                      <li key={idx} className="step-item">
                        <CheckCircle2 size={14} className="text-emerald" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resolution CTA Button */}
                <div className="console-action-row">
                  {isCurrentScenarioResolved ? (
                    <div className="resolved-notice">
                      <CheckCircle2 size={18} className="text-emerald" />
                      <span>Marked as read. Fix steps above.</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleResolveIncident}
                      disabled={isResolving}
                      className="btn btn-primary btn-sm btn-resolve"
                    >
                      {isResolving ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Marking…</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={15} />
                          <span>Mark as read</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="console-empty-state">
                <Activity size={36} className="text-muted mb-2" />
                <h4>No example selected</h4>
                <p>
                  Pick one of the three above to see symptoms, cause, and fix.
                </p>
                <div className="empty-buttons">
                  <button onClick={() => handleSelectScenario('pipeline-backpressure')} className="btn btn-secondary btn-sm">
                    Show first example
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
