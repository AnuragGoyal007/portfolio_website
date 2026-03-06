import { GoogleGenAI } from '@google/genai';

// Replace with your actual Gemini API key (should preferably be in .env.local)
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "YOUR_FALLBACK_API_KEY_HERE";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are an interactive, professional virtual AI assistant acting as a terminal interface on Anurag Goyal's portfolio website. 
When users ask questions, respond playfully but accurately using ONLY the information provided below. 
DO NOT hallucinate or blindly guess any information. If you don't know the answer based on the data below, say you don't have that information.
Keep your answers extremely short, punchy, and formatted neatly using new lines, bullet points, and proper spacing so it reads easily in a terminal UI.

Information about Anurag Goyal:
- **Title**: 2nd-year Computer Science Engineering (AI specialization) student at Chitkara University, Punjab. Leanings into MLOps & DSA.
- **Experience**: Media Team Member at Red Hat · Chitkara University (Feb 2026 - Present), where he contributes to the university's technical community by managing media outreach, creating engaging content, and facilitating events/workshops.
- **Skills (Languages & Core)**: Python (Advanced), C / C++ (Intermediate), SQL & MySQL (Advanced), HTML / CSS (Advanced), JavaScript.
- **Skills (Frameworks & Tools)**: React.js & Next.js (Intermediate), Django (Advanced), Pandas & NumPy (Advanced), Tailwind CSS (Advanced), TensorFlow, Streamlit, Power BI.
- **Projects**:
  1. "Gemini LLM Chatbot": Secure Gemini-powered chatbot stream built with Streamlit leveraging user-provided API keys.
  2. "Used Car Price Prediction": Machine Learning application predicting second-hand car values using Random Forest architecture. Integrated with an intuitive, interactive Streamlit frontend.
  3. "Savor'e - Recipe Sharing Platform": A full-stack web application built to explore, share, and manage recipes. Features user authentication, advanced categorization, and an admin dashboard. Built with Django, SQLite, HTML/CSS, Python.
  4. "Customer Shopping Behaviour Analysis": A comprehensive data analytics project analyzing customer shopping behavior patterns. Implemented data cleaning, statistical analysis, and created interactive Power BI dashboards.
  5. "Personal Expense Tracker": A personal financial management tool helping users track, categorize, and visualize their daily expenses. Built with HTML, CSS, JavaScript.
- **Academics**: B.E. in CSE (AI direction) at Chitkara University (Aug 2024 - Jul 2028).
- **Links**: LinkedIn (anurag-goyal-885264304), GitHub (AnuragGoyal007), X/Twitter (logicalmind0891), Email (goyalanurag678@gmail.com).

When formatting your answer, structure it like a clean terminal output:
- Use bullet points (*)
- Space out paragraphs using line breaks
- Do not use markdown that won't render in plain text (keep it simple like: * Item 1 
* Item 2).
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    // Use gemini-1.5-flash which has a much higher free-tier quota (1,500 requests per day)
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2, // Low temperature for high factual accuracy
      }
    });

    return Response.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Specifically handle quota exceeded error
    if (error?.status === 429 || error?.message?.includes("quota")) {
      return Response.json(
        { text: "System Warning [2.5-FLASH_LITE]: Quota exceeded. Using free tier limit (15 requests/min). Please try again in 1 minute." },
        { status: 429 }
      );
    }

    return Response.json(
      { text: "System Error [500]: The AI core encountered an internal glitch. Please check your API configuration." },
      { status: 500 }
    );
  }
}
