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
                <div class="node static-node node-red">
                    <div style="font-size: 48px; margin-bottom: 12px;">🌐</div>
                    <div style="font-size: 16px; font-weight: bold; color: white;">Incoming Threats</div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 6px;">DoS, Exploits</div>
                </div>
                
                <!-- Connector Arrow -->
                <div class="connector">→</div>

                <!-- Node 2: AI Detection -->
                <div class="node static-node node-blue">
                    <div style="font-size: 48px; margin-bottom: 12px;">🤖</div>
                    <div style="font-size: 16px; font-weight: bold; color: white;">AI Detection</div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 6px;">Dual ML Models</div>
                </div>

                <!-- Connector Arrow -->
                <div class="connector">→</div>
                
                <!-- Node 3: Classification -->
                <div class="node static-node node-amber">
                    <div style="font-size: 48px; margin-bottom: 12px;">📊</div>
                    <div style="font-size: 16px; font-weight: bold; color: white;">Classification</div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 6px;">95% Accurate</div>
                </div>

                <!-- Connector Arrow -->
                <div class="connector">→</div>
                
                <!-- Node 4: Mitigation -->
                <div class="node static-node node-green">
                    <div style="font-size: 48px; margin-bottom: 12px;">🛡️</div>
                    <div style="font-size: 16px; font-weight: bold; color: white;">Mitigation</div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 6px;">Block & Limit</div>
                </div>
            </div>
        `;

        // Add CSS
        const style = document.createElement('style');
        style.textContent = `
            .static-node {
                width: 180px;
                padding: 30px;
                border: 2px solid rgba(255, 255, 255, 0.1);
                background: rgba(255, 255, 255, 0.02);
                border-radius: 16px;
                text-align: center;
                transition: border-color 0.3s ease;
                cursor: default;
                position: relative;
                overflow: hidden;
            }
            
            /* The spotlight effect overlay */
            .static-node::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), var(--spotlight-color), transparent 70%);
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
                z-index: 0;
            }

            .static-node > * {
                position: relative;
                z-index: 1; /* Keep text above spotlight */
            }
            
            .static-node:hover::before {
                opacity: 1;
            }
            
            .static-node:hover {
                background: rgba(255, 255, 255, 0.05);
            }

            /* Colors for the spotlight variable */
            .node-red { --spotlight-color: rgba(255, 77, 77, 0.4); }
            .node-red:hover { border-color: rgba(255, 77, 77, 0.5); }

            .node-blue { --spotlight-color: rgba(19, 127, 236, 0.4); }
            .node-blue:hover { border-color: rgba(19, 127, 236, 0.5); }

            .node-amber { --spotlight-color: rgba(255, 176, 0, 0.4); }
            .node-amber:hover { border-color: rgba(255, 176, 0, 0.5); }

            .node-green { --spotlight-color: rgba(0, 255, 157, 0.4); }
            .node-green:hover { border-color: rgba(0, 255, 157, 0.5); }

            .connector {
                font-size: 32px;
                color: rgba(255,255,255,0.3);
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);

        // Add mouse tracking logic
        const nodes = document.querySelectorAll('.static-node');
        nodes.forEach(node => {
            node.addEventListener('mousemove', (e) => {
                const rect = node.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                node.style.setProperty('--x', `${x}px`);
                node.style.setProperty('--y', `${y}px`);
            });
        });

        console.log('✅ Static Workflow loaded successfully!');
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWorkflow);
    } else {
        initWorkflow();
    }
})();
