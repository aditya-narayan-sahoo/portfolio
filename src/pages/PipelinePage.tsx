import React from 'react';
import { Link } from 'react-router-dom';
import PipelineVisualizer from '../components/PipelineVisualizer';
import { Layers, ArrowLeft, ArrowRight } from 'lucide-react';

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
            <span>PIPELINE</span>
          </div>
          <h1 className="page-title">Pipeline examples</h1>
          <p className="page-subtitle">
            Simplified diagrams with sample numbers, plus three short incident write-ups.
          </p>

          <div className="page-header-meta">
            <div className="header-meta-item">
              <span className="meta-label">STACK</span>
              <span className="meta-val">Matillion, S3, Snowflake, Databricks</span>
            </div>
            <div className="header-meta-item">
              <span className="meta-label">DATA</span>
              <span className="meta-val">Samples for illustration</span>
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
              <span>Home</span>
            </Link>
          </div>
          <div className="page-nav-col text-right">
            <span className="nav-sub">Next</span>
            <Link to="/experience" className="nav-title-link">
              <span>Work history</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
