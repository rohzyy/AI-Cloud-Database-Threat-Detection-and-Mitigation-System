// Static Workflow Visualization - Replaces 3D animation
(function () {
    'use strict';

    function initWorkflow() {
        const container = document.getElementById('workflow-3d-container');
        if (!container) {
            console.error('workflow-3d-container not found!');
            return;
        }

        console.log('✅ Initializing Static Workflow...');

        container.innerHTML = `
            <div style="
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                padding: 20px;
            ">
                <!-- Node 1: Incoming Threats -->
                <div class="node static-node" style="border-color: #ff4d4d; background: linear-gradient(135deg, rgba(255,77,77,0.1), rgba(255,77,77,0.2));">
                    <div style="font-size: 32px; margin-bottom: 8px;">🌐</div>
                    <div style="font-size: 12px; font-weight: bold; color: white;">Incoming Threats</div>
                    <div style="font-size: 10px; color: rgba(255,255,255,0.7); margin-top: 4px;">DoS, Exploits</div>
                </div>
                
                <!-- Connector Arrow -->
                <div class="connector">→</div>

                <!-- Node 2: AI Detection -->
                <div class="node static-node" style="border-color: #137fec; background: linear-gradient(135deg, rgba(19,127,236,0.1), rgba(19,127,236,0.2));">
                    <div style="font-size: 32px; margin-bottom: 8px;">🤖</div>
                    <div style="font-size: 12px; font-weight: bold; color: white;">AI Detection</div>
                    <div style="font-size: 10px; color: rgba(255,255,255,0.7); margin-top: 4px;">Dual ML Models</div>
                </div>

                <!-- Connector Arrow -->
                <div class="connector">→</div>
                
                <!-- Node 3: Classification -->
                <div class="node static-node" style="border-color: #ffb000; background: linear-gradient(135deg, rgba(255,176,0,0.1), rgba(255,176,0,0.2));">
                    <div style="font-size: 32px; margin-bottom: 8px;">📊</div>
                    <div style="font-size: 12px; font-weight: bold; color: white;">Classification</div>
                    <div style="font-size: 10px; color: rgba(255,255,255,0.7); margin-top: 4px;">95% Accurate</div>
                </div>

                <!-- Connector Arrow -->
                <div class="connector">→</div>
                
                <!-- Node 4: Mitigation -->
                <div class="node static-node" style="border-color: #00ff9d; background: linear-gradient(135deg, rgba(0,255,157,0.1), rgba(0,255,157,0.2));">
                    <div style="font-size: 32px; margin-bottom: 8px;">🛡️</div>
                    <div style="font-size: 12px; font-weight: bold; color: white;">Mitigation</div>
                    <div style="font-size: 10px; color: rgba(255,255,255,0.7); margin-top: 4px;">Block & Limit</div>
                </div>
            </div>
        `;

        // Add CSS
        const style = document.createElement('style');
        style.textContent = `
            .static-node {
                width: 120px;
                padding: 20px;
                border: 2px solid;
                border-radius: 12px;
                text-align: center;
                transition: transform 0.2s ease;
            }
            .static-node:hover {
                transform: translateY(-5px);
                background-opacity: 0.3 !important;
            }
            .connector {
                font-size: 24px;
                color: rgba(255,255,255,0.3);
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);

        console.log('✅ Static Workflow loaded successfully!');
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWorkflow);
    } else {
        initWorkflow();
    }
})();
