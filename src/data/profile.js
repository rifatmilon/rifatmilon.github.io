export const profile = {
  name: "Md. Rifat Aknda",
  role: "AI & Automation Engineer · ML Researcher",
  affiliation: "SyncMetrics, Dhaka",
  email: "rifataknda.r@gmail.com",
  location: "Dhaka, Bangladesh",

  bio: `I am an AI & Automation Engineer at <a href="https://syncmetrics.io">SyncMetrics</a>,
    where I build LLM applications, multi-agent systems, and event-driven automation pipelines.
    Previously I was an AI Engineer at <a href="#">EVOMED Technology</a>, working on multimodal
    data pipelines, fine-tuned CNNs and Transformers, and edge model quantization.
    I am also an applied researcher with 4 peer-reviewed publications across
    <a href="https://doi.org/10.3390/biomedinformatics5030043">MDPI BioMedInformatics</a> and
    IEEE — in computer vision, biomedical signal processing, and TinyML.
    I received a B.Sc. in Computer Science & Engineering from the
    <a href="https://ulab.edu.bd">University of Liberal Arts Bangladesh (ULAB)</a> in 2025.`,

  links: {
    email:         "mailto:rifataknda.r@gmail.com",
    cv:            "/Md_Rifat_Aknda__Resume.pdf",
    academic_cv:   "/Md_Rifat_Aknda_academic_CV.pdf",
    github:        "https://github.com/rifatmilon",
    linkedin:      "https://www.linkedin.com/in/rifatmilon",
    scholar:       "https://scholar.google.com/citations?user=qPC0U2gAAAAJ",
    researchgate:  "https://www.researchgate.net/profile/Md-Aknda",
    orcid:         "https://orcid.org/0009-0003-8483-0668",
  },

  news: [
    {
      date: "Oct 2025",
      text: `Papers <em>TinySenseNet</em> and <em>Brain Tumor Localization via YOLOv11 & MedNeXt</em> published in
        <a href="https://doi.org/10.1109/COMPAS67506.2025.11381831">IEEE COMPAS 2025</a>.`
    },
    {
      date: "Aug 2025",
      text: `<em>SCCM: Skin Cancer Classification</em> published as first author in
        <a href="https://doi.org/10.3390/biomedinformatics5030043">MDPI BioMedInformatics, Vol. 5(3), p. 43</a>.`
    },
    {
      date: "Sep 2025",
      text: `Received the <strong>Best Paper Award</strong> at
        <a href="https://doi.org/10.1109/ICEEIE66203.2025.11252161">IEEE ICEEIE 2025</a>
        for sEMG gesture recognition research.`
    },
    {
      date: "Oct 2025",
      text: `Joined <a href="#">SyncMetrics</a> as AI & Automation Engineer,
        building RAG pipelines and multi-agent automation systems.`
    },
  ],

  education: [
    {
      degree: "B.Sc. Computer Science & Engineering",
      institution: "University of Liberal Arts Bangladesh (ULAB)",
      period: "2021 – 2025",
      note: "CGPA 3.51 / 4.00 · Former Vice President, ULAB Computer Programming Club (UCPC)"
    },
    {
      degree: "Diploma in Electronics Technology",
      institution: "Mymensingh Polytechnic Institute",
      period: "2015 – 2019",
    }
  ],

  experiences: [
    {
      role: "AI & Automation Engineer",
      company: "SyncMetrics",
      companyUrl: "#",
      period: "Oct 2025 – Present",
      bullets: [
        "Building LLM applications, multi-agent orchestration systems, and production RAG pipelines using LangChain, LangGraph, and vector databases.",
        "Automating event-driven business workflows integrating APIs, CRMs, and enterprise platforms — reducing manual processing by 75–99%.",
      ]
    },
    {
      role: "AI Engineer",
      company: "EVOMED Technology",
      companyUrl: "#",
      period: "Apr 2025 – Sep 2025",
      bullets: [
        "Developed multimodal data pipelines; fine-tuned CNNs, Vision Transformers, and LLMs for diagnostic decision-support systems.",
        "Applied SHAP and Grad-CAM for clinical model interpretability; quantized models for low-latency inference on edge hardware.",
      ]
    },
    {
      role: "AI & Automation Consultant",
      company: "Client Work",
      companyUrl: null,
      period: "2023 – Present",
      bullets: [
        "Delivered autonomous agents, voice AI integrations (Retell AI, Vapi, 3CX), and workflow automations via n8n and Make.",
        "Prepared and formatted academic manuscripts for IEEE, MDPI, Springer, and Elsevier submission standards.",
      ]
    }
  ],

  skills: [
    {
      group: "Deep Learning & Vision",
      items: "PyTorch, TensorFlow, YOLO (v8/v11), MONAI MedNeXt, Grad-CAM, SHAP, TinyML, ONNX"
    },
    {
      group: "LLMs & Agents",
      items: "LangChain, LangGraph, RAG, pgvector, ChromaDB, GPT-4o, Claude, Gemini"
    },
    {
      group: "Automation & Integration",
      items: "n8n, Make, Zapier, FastAPI, Docker, AWS (EC2/S3), Traefik, Webhooks"
    },
    {
      group: "Development",
      items: "Python, JavaScript, TypeScript, C++, React, Next.js, PostgreSQL, Redis"
    },
    {
      group: "Research & Data",
      items: "LaTeX, Overleaf, BibTeX, CVAT, Roboflow, COCO/YOLO/VOC formats"
    }
  ]
};
