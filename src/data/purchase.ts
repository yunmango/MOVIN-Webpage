export const PURCHASE_PRICE = {
  original: 13000,
  sale: 11000,
  currency: "USD",
};

export const ADDONS = [
  {
    id: "studio-1month",
    label: "MOVIN Studio License — 1 Month",
    price: 300,
  },
  {
    id: "studio-1year",
    label: "MOVIN Studio License — 1 Year",
    price: 3300,
  },
];

export const HIGHLIGHTS = [
  {
    icon: "cpu",
    title: "Studio-Grade Accuracy",
    description: "93% accuracy compared to marker-based systems like Vicon",
  },
  {
    icon: "brain",
    title: "On-Device AI Processing",
    description: "LiDAR + vision fusion processed entirely on the device",
  },
  {
    icon: "scan",
    title: "Zero Markers Required",
    description: "No suit, no markers, no calibration wand needed",
  },
  {
    icon: "timer",
    title: "3-Minute Setup",
    description: "Unbox, connect, and start capturing in minutes",
  },
];

export const PACKAGE_INCLUDED = [
  { name: "MOVIN TRACIN Device", description: "Single compact motion capture unit" },
  { name: "MOVIN Studio Starter License", description: "30-day trial included" },
  { name: "User Manual & Quick Start Guide", description: "Printed + digital" },
  { name: "Power Supply (AC Adapter)", description: "100-240V universal" },
  { name: "Ethernet Cable (Cat.6, 5m)", description: "High-speed data connection" },
  { name: "Pelican Carrying Case", description: "Rugged protective transport case" },
];

export const PACKAGE_ACCESSORIES = [
  { name: "Professional Tripod", description: "Height-adjustable aluminum stand" },
  { name: "Quick Mount Adapter", description: "Standard 1/4\" thread mount" },
  { name: "USB-to-Ethernet Adapter", description: "For laptops without Ethernet port" },
];

export const STATS = [
  { value: "~2-3cm", label: "Joint Accuracy" },
  { value: "<100ms", label: "Latency" },
  { value: "60fps", label: "Frame Rate" },
];

export const CAPABILITIES = [
  {
    title: "On-Device AI",
    description:
      "All processing happens on TRACIN itself. No cloud dependency, no latency, no data leaves your set.",
    icon: "brain",
  },
  {
    title: "Any Lighting Condition",
    description:
      "LiDAR-based sensing works in bright sunlight, low light, or complete darkness with zero accuracy loss.",
    icon: "sun",
  },
  {
    title: "Completely Markerless",
    description:
      "Performers wear everyday clothing. No suits, no markers, no reflective tape needed.",
    icon: "user",
  },
  {
    title: "Single-Operator Capture",
    description:
      "One person can set up, calibrate, and run a full capture session. No crew required.",
    icon: "monitor",
  },
];

export const STUDIO_FEATURES = [
  {
    title: "Real-Time Preview",
    description: "See mocap data live on your character as you capture.",
  },
  {
    title: "Retargeting Engine",
    description: "Map captured data to any humanoid rig with automatic bone mapping.",
  },
  {
    title: "Multi-Format Export",
    description: "Export to FBX, BVH, and C3D for any DCC pipeline.",
  },
  {
    title: "Motion Cleanup",
    description: "Built-in noise reduction, foot-lock, and smoothing tools.",
  },
  {
    title: "Unreal Engine Plugin",
    description: "Live-link streaming directly into Unreal Engine 5.",
  },
  {
    title: "Unity Plugin",
    description: "Real-time streaming and recording inside Unity.",
  },
  {
    title: "Composition Mode",
    description: "Layer multiple takes and blend motion sequences.",
  },
  {
    title: "Hand Tracking Ready",
    description: "Capture finger and hand motion data alongside body.",
  },
];

export const LICENSE_PLANS = [
  {
    name: "Starter",
    price: "Included",
    period: "30-day trial",
    description: "Get started with core capture features",
    features: [
      "Real-time motion capture",
      "Basic retargeting",
      "FBX / BVH export",
      "Single-device support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$300",
    period: "/ month",
    description: "Full suite for production teams",
    features: [
      "Everything in Starter",
      "Advanced retargeting engine",
      "Multi-format export (FBX, BVH, C3D)",
      "Motion cleanup & smoothing",
      "Live-link (Unreal / Unity)",
      "Composition mode",
      "Priority support",
    ],
    highlighted: true,
  },
];

export const WELL_SUPPORTED_MOTIONS = [
  {
    title: "Walking & Running",
    description: "Natural locomotion with accurate foot contact detection",
  },
  {
    title: "Foot Contact",
    description: "Precise ground-plane interaction and foot planting",
  },
  {
    title: "Hand & Finger Tracking",
    description: "Detailed hand pose and finger articulation capture",
  },
  {
    title: "Seated Actions",
    description: "Sitting, chair-based movements, and desk interactions",
  },
  {
    title: "Prop Usage",
    description: "Interactions with handheld objects like swords or tools",
  },
  {
    title: "Dance & Performance",
    description: "Dynamic full-body choreography and expressive movement",
  },
];

export const CHALLENGING_MOTIONS = [
  {
    title: "Large Object Interaction",
    description: "Objects that significantly occlude the body from camera view",
  },
  {
    title: "Lying Down / Ground",
    description: "Supine or prone positions with heavy self-occlusion",
  },
  {
    title: "Extreme Height Changes",
    description: "Rapid vertical transitions like high jumps or drops",
  },
  {
    title: "Subtle Finger Motions",
    description: "Very fine-grained finger movements at distance from sensor",
  },
];

export const SETUP_STEPS = [
  { step: 1, title: "Unbox & Place", description: "Set TRACIN on a tripod or flat surface at chest height" },
  { step: 2, title: "Connect Power", description: "Plug in the included AC adapter" },
  { step: 3, title: "Connect Ethernet", description: "Link TRACIN to your PC via the included Cat.6 cable" },
  { step: 4, title: "Launch Studio", description: "Open MOVIN Studio and auto-detect the device" },
  { step: 5, title: "Capture", description: "Step into the capture area and start recording" },
];

export const SETUP_REQUIREMENTS = [
  { label: "Capture Area", value: "3m × 3m minimum (5m × 5m recommended)" },
  { label: "Ceiling Height", value: "2.5m minimum" },
  { label: "PC Requirements", value: "Windows 10/11, Intel i7+, 16GB RAM, Ethernet port" },
  { label: "Distance", value: "2-5m from sensor to performer" },
];

export const SPECIFICATIONS = [
  {
    category: "Physical",
    specs: [
      { label: "Dimensions", value: "280 × 80 × 80 mm" },
      { label: "Weight", value: "1.2 kg" },
      { label: "Housing", value: "Anodized aluminum" },
      { label: "Mount", value: '1/4" standard thread' },
    ],
  },
  {
    category: "Ports & Power",
    specs: [
      { label: "Data", value: "Gigabit Ethernet (RJ45)" },
      { label: "Power", value: "DC 12V / 3A (included)" },
      { label: "Power Consumption", value: "< 36W" },
    ],
  },
  {
    category: "Performance",
    specs: [
      { label: "Frame Rate", value: "60 fps" },
      { label: "Latency", value: "< 100 ms" },
      { label: "Joint Accuracy", value: "~2-3 cm (vs marker-based)" },
      { label: "Tracking Points", value: "24 body joints + hands" },
    ],
  },
  {
    category: "Capture Space",
    specs: [
      { label: "Min Area", value: "3m × 3m" },
      { label: "Recommended Area", value: "5m × 5m" },
      { label: "Range", value: "2-5 m from sensor" },
      { label: "Subjects", value: "1 person per device" },
    ],
  },
  {
    category: "System Requirements",
    specs: [
      { label: "OS", value: "Windows 10 / 11" },
      { label: "CPU", value: "Intel i7 (10th gen+) or equivalent" },
      { label: "RAM", value: "16 GB minimum" },
      { label: "Network", value: "Gigabit Ethernet port" },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is included in the box?",
    answer:
      "The MOVIN TRACIN package includes the TRACIN device, a 30-day MOVIN Studio Starter License, user manual, AC power adapter (100-240V), Cat.6 Ethernet cable (5m), and a rugged Pelican carrying case.",
  },
  {
    question: "Do I need markers or a special suit?",
    answer:
      "No. MOVIN TRACIN is completely markerless. Performers can wear everyday clothing — no suit, markers, or reflective tape required.",
  },
  {
    question: "What software do I need?",
    answer:
      "MOVIN Studio is the companion software for TRACIN. A 30-day Starter license is included with your purchase. Professional licenses are available as monthly or yearly subscriptions.",
  },
  {
    question: "Can I use it outdoors?",
    answer:
      "Yes. TRACIN's LiDAR-based sensing works in bright sunlight, low light, and even complete darkness. It is also resistant to electromagnetic interference from LED walls or audio equipment.",
  },
  {
    question: "How accurate is the motion capture?",
    answer:
      "MOVIN TRACIN achieves approximately 93% accuracy compared to marker-based systems like Vicon, with ~2-3cm joint accuracy at 60fps.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Under 3 minutes. Place the device on a tripod, connect power and Ethernet, launch MOVIN Studio, and you're ready to capture.",
  },
  {
    question: "What is the capture area requirement?",
    answer:
      "Minimum 3m × 3m, with 5m × 5m recommended. The performer should be 2-5 meters from the sensor. Ceiling height should be at least 2.5m.",
  },
  {
    question: "Does it support real-time streaming?",
    answer:
      "Yes. MOVIN Studio supports live-link streaming to Unreal Engine 5 and Unity, allowing real-time previsualization and virtual production workflows.",
  },
  {
    question: "Can I export to my existing pipeline?",
    answer:
      "MOVIN Studio exports to FBX, BVH, and C3D formats, compatible with virtually any DCC tool including Maya, Blender, MotionBuilder, and more.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes. MOVIN TRACIN comes with a 1-year limited hardware warranty covering manufacturing defects. Extended warranty options are available at purchase.",
  },
  {
    question: "Do you offer educational pricing?",
    answer:
      "Yes. We offer special pricing for educational institutions and students. Contact our sales team for details.",
  },
  {
    question: "What are the PC requirements?",
    answer:
      "Windows 10 or 11, Intel i7 (10th gen or later) or equivalent, 16GB RAM minimum, and a Gigabit Ethernet port (or USB-to-Ethernet adapter).",
  },
  {
    question: "Where do you ship?",
    answer:
      "We ship worldwide. Standard shipping is included for most regions. Delivery typically takes 5-10 business days depending on location. For Japan-specific pricing and shipping, please contact our Japan sales team.",
  },
];

export const SHIPPING_INFO = [
  "Free standard shipping worldwide",
  "5-10 business days delivery",
  "Signature required on delivery",
  "Customs duties may apply for international orders",
];

export const WARRANTY_INFO = [
  "1-year limited hardware warranty",
  "Covers manufacturing defects",
  "Extended warranty available",
  "30-day return policy (unused, original packaging)",
];
