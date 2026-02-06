import { useEffect, useState } from "react";
import { 
  ShoppingCart, 
  Truck, 
  Users, 
  FileText, 
  BarChart3, 
  Zap,
  Bot,
  Code,
  Figma,
  Link
} from "lucide-react";

interface BusinessFunction {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  position: { x: number; y: number };
  isActive: boolean;
}

interface AITool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  position: { x: number; y: number };
  color: string;
}

// Business Functions positioned at the top
const businessFunctions: BusinessFunction[] = [
  { id: "ecommerce", name: "Ecommerce", icon: ShoppingCart, position: { x: 15, y: 20 }, isActive: false },
  { id: "analytics", name: "Business Analytics", icon: BarChart3, position: { x: 50, y: 15 }, isActive: false },
  { id: "supply-chain", name: "Supply Chain", icon: Truck, position: { x: 85, y: 20 }, isActive: false },
  { id: "hr", name: "HR Management", icon: Users, position: { x: 25, y: 35 }, isActive: false },
  { id: "order-mgmt", name: "Order Management", icon: FileText, position: { x: 75, y: 35 }, isActive: false }
];

// AI Tools positioned at the bottom
const aiTools: AITool[] = [
  { id: "cursor", name: "Cursor", icon: Code, position: { x: 20, y: 75 }, color: "#4F46E5" },
  { id: "n8n", name: "n8n", icon: Link, position: { x: 40, y: 85 }, color: "#EA4AAA" },
  { id: "claude", name: "Claude", icon: Bot, position: { x: 50, y: 70 }, color: "#FF6B35" },
  { id: "ai-agents", name: "AI Agents", icon: Zap, position: { x: 60, y: 85 }, color: "#10B981" },
  { id: "figma", name: "Figma", icon: Figma, position: { x: 80, y: 75 }, color: "#F24E1E" }
];

export function AIBusinessAnimation() {
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const [activeFunctions, setActiveFunctions] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Reset connections
      setActiveConnections([]);
      setActiveFunctions([]);
      
      setTimeout(() => {
        // Create predefined connections for better visual flow
        const connections = [
          `cursor-ecommerce`,
          `n8n-analytics`,
          `ai-agents-supply-chain`,
          `claude-hr`,
          `figma-order-mgmt`
        ];
        
        const randomConnections = connections.sort(() => Math.random() - 0.5).slice(0, 2);
        const functions = randomConnections.map(conn => conn.split('-')[1]);
        
        setActiveConnections(randomConnections);
        setActiveFunctions(functions);
        
        // Add more connections progressively
        setTimeout(() => {
          const additionalConnection = connections.find(c => !randomConnections.includes(c));
          if (additionalConnection) {
            setActiveConnections(prev => [...prev, additionalConnection]);
            setActiveFunctions(prev => [...prev, additionalConnection.split('-')[1]]);
          }
        }, 1200);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getConnectionPath = (tool: AITool, func: BusinessFunction) => {
    // Create flowing connection from business function (top) to AI tool (bottom) through center
    const centerX = 50;
    const centerY = 50;
    const startX = func.position.x;
    const startY = func.position.y;
    const endX = tool.position.x;
    const endY = tool.position.y;
    
    // Create smooth curved path through center
    return `M ${startX} ${startY} Q ${centerX} ${centerY} ${endX} ${endY}`;
  };

  return (
    <div className="relative w-full h-96 mx-auto max-w-6xl">
      {/* Background with subtle pattern */}
      
      {/* Section Headers */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="text-sm font-medium text-muted-foreground bg-background/80 backdrop-blur-sm rounded px-3 py-1 border border-border/30">
          Business Functions
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-sm font-medium text-muted-foreground bg-background/80 backdrop-blur-sm rounded px-3 py-1 border border-border/30">
          AI Tools
        </div>
      </div>

      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl px-8 py-4 shadow-lg">
          <div className="text-center">
            <div className="text-sm font-medium text-primary mb-1">Fueled by</div>
            <div className="text-xl font-bold text-foreground">AI</div>
          </div>
        </div>
      </div>

      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Animated gradient for active connections */}
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9"/>
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1">
              <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        {businessFunctions.map(func => 
          aiTools.map(tool => {
            const connectionId = `${tool.id}-${func.id}`;
            const isActive = activeConnections.includes(connectionId);
            
            return (
              <g key={connectionId}>
                {/* Background connection line */}
                <path
                  d={getConnectionPath(tool, func)}
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  opacity="0.15"
                  strokeDasharray="4,4"
                />
                {/* Active animated connection */}
                {isActive && (
                  <path
                    d={getConnectionPath(tool, func)}
                    fill="none"
                    stroke="url(#connectionGradient)"
                    strokeWidth="3"
                    opacity="0.9"
                    className="animate-pulse"
                  />
                )}
              </g>
            );
          })
        )}
      </svg>

      {/* Business Functions (Top Section) */}
      {businessFunctions.map((func) => (
        <div
          key={func.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
          style={{ left: `${func.position.x}%`, top: `${func.position.y}%` }}
        >
          <div
            className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center bg-card shadow-lg transition-all duration-500 group ${
              activeFunctions.includes(func.id) 
                ? "border-primary bg-primary/10 scale-110 shadow-primary/20 shadow-xl" 
                : "border-border hover:border-primary/30 hover:scale-105"
            }`}
          >
            <func.icon 
              className={`w-8 h-8 transition-colors duration-500 ${
                activeFunctions.includes(func.id) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              }`} 
            />
          </div>
          <div className="absolute top-22 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap bg-background/90 backdrop-blur-sm rounded px-2 py-1 border border-border/50 max-w-20">
            {func.name}
          </div>
        </div>
      ))}

      {/* AI Tools (Bottom Section) */}
      {aiTools.map((tool) => (
        <div
          key={tool.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
          style={{ left: `${tool.position.x}%`, top: `${tool.position.y}%` }}
        >
          <div
            className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-background shadow-lg hover:scale-110 transition-all duration-300 group"
            style={{ borderColor: tool.color }}
          >
            <tool.icon className="w-7 h-7" style={{ color: tool.color }} />
          </div>
          <div className="absolute top-18 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap bg-background/90 backdrop-blur-sm rounded px-2 py-1 border border-border/50">
            {tool.name}
          </div>
        </div>
      ))}

      {/* Floating energy particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{
            left: `${20 + (i * 6)}%`,
            top: `${25 + (i % 4) * 15}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
}