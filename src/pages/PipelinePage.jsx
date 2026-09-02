import React from 'react';
import { Link } from 'react-router-dom';
import PipelineVisualizer from '../components/PipelineVisualizer';
import { Layers, ArrowLeft, ArrowRight, ShieldCheck, Cpu, Database, Activity } from 'lucide-react';

export default function PipelinePage() {
  return (
    <div className="page-transition page-container">
      <div className="container">
        {/* Page Breadcrumb / Nav */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">
            <ArrowLeft size={14} />
            <span>Back to Overview</span>
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Cloud Architecture & Pipeline</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="section-eyebrow">
            <Layers size={14} />
            <span>INTERACTIVE ARCHITECTURE DEEP-DIVE</span>
          </div>
          <h1 className="page-title">Enterprise Data Pipeline & Incident Telemetry</h1>
          <p className="page-subtitle">
            Interactive visualization of multi-cloud data flows across Matillion ETL, AWS S3, Snowflake, and Databricks, 
            complete with live node telemetry inspector and interactive Incident Root-Cause Analysis (RCA) simulator.
          </p>

          <div className="page-header-meta">
            <div className="header-meta-item">
              <span className="meta-label">ARCHITECTURE TYPE</span>
              <span className="meta-val">Hybrid Multi-Cloud Lakehouse</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">INGESTION THROUGHPUT</span>
              <span className="meta-val">&gt; 12 TB Daily Delta Ingestion</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">INCIDENT RECOVERY</span>
              <span className="meta-val">35% Faster MTTR via Automated RCA</span>
            </div>
          </div>
        </div>

        {/* Core Flagship Component */}
        <div className="dedicated-component-wrapper">
          <PipelineVisualizer />
        </div>

        {/* Next Route Navigation Bar */}
        <div className="page-nav-footer glass-panel">
          <div className="page-nav-col">
            <span className="nav-sub">Previous</span>
            <Link to="/" className="nav-title-link">
              <ArrowLeft size={16} />
              <span>Overview & Hero</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Next Section</span>
            <Link to="/experience" className="nav-title-link">
              <span>Enterprise Experience</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
