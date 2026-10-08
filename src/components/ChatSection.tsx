import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Download, 
  RotateCcw, 
  TicketPlus, 
  ShieldAlert, 
  GraduationCap,
  Building,
  Filter,
  Globe,
  ExternalLink
} from 'lucide-react';
import { ChatMessage, LanguageMode } from '../types';
import { PROJECT_DETAILS, QUICK_PROMPTS } from '../data/campusData';

interface ChatSectionProps {
  onEscalateToTicket: (subject: string, description: string, category: string) => void;
  externalPrompt?: { query: string; category: string } | null;
  onClearExternalPrompt?: () => void;
  language: LanguageMode;
}

export const ChatSection: React.FC<ChatSectionProps> = ({ 
  onEscalateToTicket, 
  externalPrompt,
  onClearExternalPrompt,
  language
}) => {
  const isOdia = language === 'or';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: language === 'or' 
        ? `### କ୍ୟାମ୍ପସ-ଏଆଇ ହେଲ୍ପ ଡେସ୍କକୁ ସ୍ୱାଗତ!\n\nମୁଁ ଆପଣଙ୍କର **AI କଲେଜ ହେଲ୍ପ ଡେସ୍କ ସହାୟକ**, ନିର୍ମାତା: **${PROJECT_DETAILS.developerOr}** (ରେଜିଷ୍ଟ୍ରେସନ୍ ନଂ: **${PROJECT_DETAILS.regNo}**)।\n\nମୁଁ ନିମ୍ନଲିଖିତ ବିଷୟରେ ସାହାଯ୍ୟ କରିପାରିବି:\n- **୭୫% ଉପସ୍ଥାନ ଓ ମେଡିକାଲ ରିହାତି**: ପରୀକ୍ଷା ନିୟମାବଳୀ ଓ ସିଜିପିଏ ଶତକଡ଼ା ହିସାବ।\n- **ଓଡ଼ିଶା ପ୍ରେରଣା ଓ ମେଧାବୃତ୍ତି ସ୍କଲାରସିପ୍**: ଆବେଦନ ତାରିଖ ଓ ସତ୍ୟାପନ ପ୍ରକ୍ରିୟା।\n- **ଏସବିଆଇ କଲେକ୍ଟ (SBI Collect) ଫିସ୍**: ସେମିଷ୍ଟାର ଫିସ୍ ପୈଠ ଓ DU ରସିଦ୍ ସମସ୍ୟା।\n- **ହଷ୍ଟେଲ ନିୟମ ଓ ଲିଭ୍ ପାସ୍**: ରାତି ୯:୦୦ କର୍ଫ୍ୟୁ ଓ ଛୁଟି ଆବେଦନ।\n- **ପ୍ଲେସମେଣ୍ଟ୍ ଓ ଇଣ୍ଟର୍ନସିପ୍ NOC**: ଯୋଗ୍ୟତା ମାନଦଣ୍ଡ ଓ କମ୍ପାନୀ ସୂଚୀ।\n- **ଅଫିସିଆଲ୍ ଅଭିଯୋଗ ଟିକେଟ୍ ଦାଖଲ**: ଡିନ୍ କିମ୍ବା ପରୀକ୍ଷା ନିୟନ୍ତ୍ରକଙ୍କୁ ସିଧାସଳଖ ଆବେଦନ।\n\n*ଆଜି ଆପଣ କଲେଜର କେଉଁ ବିଷୟରେ ଜାଣିବାକୁ ଚାହାଁନ୍ତି?*`
        : `### Welcome to CampusAI Help Desk!\n\nI am your **AI College Help Desk Assistant & Academic Advisor**, developed by **${PROJECT_DETAILS.developer}** (Registration No: **${PROJECT_DETAILS.regNo}**).\n\nI can assist you with:\n- **Academic Rules & Attendance**: 75% rule, medical condonation, syllabus, grading scale.\n- **Examinations & Backlogs**: Mid-sem & end-sem weightage, admit cards, supplementary schedules.\n- **Tuition & Hostel Fees**: SBI Collect payment instructions, fee breakdown, scholarship waivers.\n- **Hostel Living**: In-time curfew, digital leave passes, mess timings, warden contacts.\n- **Placements & Internships**: Eligibility criteria, top recruiters, package statistics.\n- **Official Grievance Ticketing**: Need an issue resolved by college administration? I can escalate it to the Dean or CoE.\n\n*How may I assist you today?*`,
      timestamp: 'Just now',
      source: 'developer-profile'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('General');
  const [userRole, setUserRole] = useState<string>('Student');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Handle external prompts selected from Hero or FAQs
  useEffect(() => {
    if (externalPrompt && externalPrompt.query) {
      handleSend(externalPrompt.query, externalPrompt.category);
      if (onClearExternalPrompt) onClearExternalPrompt();
    }
  }, [externalPrompt]);

  // Web Speech API: Voice-to-Text Recognition
  const toggleSpeechRecognition = () => {
    const SpeechRecognition = 
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition || 
      (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputQuery(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      console.error("Speech recognition error:", e);
      setIsListening(false);
    }
  };

  // Text-to-Speech (TTS)
  const handleSpeak = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Clean markdown before speaking
    const cleanText = text
      .replace(/###/g, '')
      .replace(/\*\*/g, '')
      .replace(/- /g, '')
      .replace(/`/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Copy message text
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Export Transcript
  const handleExportTranscript = () => {
    let transcriptText = `CAMPUSAI HELP DESK TRANSCRIPT\n`;
    transcriptText += `Project Creator: ${PROJECT_DETAILS.developer} (Reg No: ${PROJECT_DETAILS.regNo})\n`;
    transcriptText += `Department: ${PROJECT_DETAILS.department}\n`;
    transcriptText += `Date: ${new Date().toLocaleString()}\n`;
    transcriptText += `===========================================================\n\n`;

    messages.forEach((msg, idx) => {
      const sender = msg.role === 'user' ? 'STUDENT' : 'CAMPUSAI BOT';
      transcriptText += `[${msg.timestamp}] ${sender}:\n${msg.content}\n\n`;
    });

    const blob = new Blob([transcriptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CampusAI_HelpDesk_Transcript_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Clear chat
  const handleClearChat = () => {
    if (confirm("Reset conversation history?")) {
      setMessages([
        {
          id: 'welcome-reset',
          role: 'assistant',
          content: `Chat history reset. How can I help you regarding college academics, examinations, hostels, or fees today?`,
          timestamp: 'Just now',
          source: 'developer-profile'
        }
      ]);
      if (speakingId) {
        window.speechSynthesis.cancel();
        setSpeakingId(null);
      }
    }
  };

  // Send message
  const handleSend = async (queryText?: string, categoryOverride?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category: categoryOverride || selectedCategory
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setLoading(true);

    const assistantId = `bot-${Date.now()}`;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const category = categoryOverride || selectedCategory;
    let responseText = '';
    setMessages((prev) => [
      ...prev,
      {
        id: assistantId,
        role: 'assistant',
        content: '',
        timestamp,
        source: 'gemini-2.5-flash',
        category
      }
    ]);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();
      if (!apiKey) {
        throw new Error('Missing VITE_GEMINI_API_KEY. Add a restricted Gemini API key to your local .env file and restart the app.');
      }

      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey });
      const history = messages
        .filter((message) => message.role === 'user' || message.source !== 'developer-profile')
        .filter((message) => message.content.trim())
        .map((message) => ({
          role: message.role === 'assistant' ? 'model' as const : 'user' as const,
          parts: [{ text: message.content }]
        }))
        .slice(-10);

      if (history[0]?.role === 'model') history.shift();

      const contextualPrompt = [
        userMessage.content,
        `Student role: ${userRole}.`,
        'Department: Computer Science & Engineering.',
        `Query category: ${category}.`
      ].join('\n');

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: contextualPrompt }] }
        ],
        config: {
          systemInstruction: `You are CampusAI, a helpful college help desk assistant for students, faculty, applicants, and parents. Give clear, structured, student-friendly answers about academics, examinations, fees, scholarships, hostels, placements, and campus services. Do not invent official policies, fees, contacts, or deadlines; say when details need verification with the college. When asked who created the app, credit ${PROJECT_DETAILS.developer}, registration number ${PROJECT_DETAILS.regNo}, Department of Computer Science & Engineering. Respond in ${language === 'or' ? 'fluent Odia script with technical terms in parentheses' : 'English unless the user asks for another language'}. For issues needing official help, explain that this demo can save a ticket only in this browser and does not send it to college staff.`,
          tools: [{ googleSearch: {} }],
          temperature: 0.7
        }
      });

      const groundingSources = new Map<string, { title: string; uri: string }>();

      for await (const chunk of responseStream) {
        if (chunk.text) {
          responseText += chunk.text;
          setMessages((previous) => previous.map((message) =>
            message.id === assistantId ? { ...message, content: responseText } : message
          ));
        }

        for (const candidate of chunk.candidates ?? []) {
          for (const groundingChunk of candidate.groundingMetadata?.groundingChunks ?? []) {
            const webSource = groundingChunk.web;
            if (webSource?.uri) {
              groundingSources.set(webSource.uri, {
                title: webSource.title || 'Web source',
                uri: webSource.uri
              });
            }
          }
        }
      }

      if (!responseText.trim()) {
        throw new Error('Gemini returned an empty response. Please try again.');
      }

      setMessages((previous) => previous.map((message) =>
        message.id === assistantId
          ? { ...message, groundingSources: [...groundingSources.values()] }
          : message
      ));
    } catch (err) {
      console.error('Gemini chat error:', err);
      const errorMessage = err instanceof Error ? err.message : '';
      const detail = errorMessage.startsWith('Missing VITE_GEMINI_API_KEY')
        ? errorMessage
        : /ACCESS_TOKEN_TYPE_UNSUPPORTED|invalid authentication credentials/i.test(errorMessage)
          ? 'Google rejected this credential. Create a Gemini API key in Google AI Studio (a Developer API key, not an OAuth token or service-account credential), replace VITE_GEMINI_API_KEY in .env, and restart Vite.'
          : /(?:\b401\b|\b403\b|api.?key.*(?:invalid|not valid))/i.test(errorMessage)
            ? 'Google rejected this API key. Check that it is active and allowed to use the Gemini Developer API, then restart Vite after updating .env.'
            : 'Gemini could not complete this response. Check the API key restrictions, model access, quota, and network connection, then try again.';
      setMessages((previous) => previous.map((message) =>
        message.id === assistantId
          ? {
              ...message,
              content: `${responseText ? `${responseText}\n\n` : ''}### Gemini request failed\n\n${detail}`,
              source: 'error'
            }
          : message
      ));
    } finally {
      setLoading(false);
    }
  };

  // Markdown renderer
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Headers
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-base font-bold text-white mt-3 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-indigo-500 rounded-sm"></span>
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-lg font-bold text-white mt-3.5 mb-2">
            {line.replace('## ', '')}
          </h3>
        );
      }

      // Bullet points
      if (line.startsWith('- ') || line.startsWith('* ')) {
        const bulletContent = line.substring(2);
        return (
          <li key={idx} className="text-slate-200 text-sm ml-4 my-1 list-disc leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(bulletContent) }} />
          </li>
        );
      }

      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Regular paragraph
      return (
        <p key={idx} className="text-slate-200 text-sm leading-relaxed my-1">
          <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(line) }} />
        </p>
      );
    });
  };

  const formatInlineMarkdown = (str: string) => {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-indigo-200">$1</em>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">$1</code>');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Top Filter and Controls Bar */}
      <div className="mb-4 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 backdrop-blur-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            <span>Department:</span>
          </span>
          {['General', 'Academics', 'Examinations', 'Hostel & Mess', 'Fees & Accounts', 'Placements'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'text-slate-400 bg-slate-800/80 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/60">
            <User className="w-3 h-3 text-slate-300" />
            <span>Role:</span>
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="Student" className="bg-slate-900">Student</option>
              <option value="Prospective Applicant" className="bg-slate-900">Applicant</option>
              <option value="Faculty" className="bg-slate-900">Faculty</option>
              <option value="Parent" className="bg-slate-900">Parent</option>
            </select>
          </div>

          <button
            onClick={handleExportTranscript}
            title="Download Chat Transcript"
            className="p-1.5 rounded-md text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export</span>
          </button>

          <button
            onClick={handleClearChat}
            title="Reset Chat"
            className="p-1.5 rounded-md text-slate-400 hover:text-rose-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-md shadow-2xl flex flex-col h-[min(68dvh,650px)] min-h-[360px] overflow-hidden">
        {/* Messages Stream Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 sm:gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-0.5 shrink-0 shadow-md shadow-indigo-600/20">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-indigo-400" />
                    </div>
                  </div>
                )}

                <div className={`max-w-2xl sm:max-w-3xl flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                  {/* Meta Label */}
                  <div className="flex items-center gap-2 mb-1 px-1">
                    <span className="text-[11px] font-medium text-slate-400">
                      {isUser ? userRole : 'CampusAI Assistant'}
                    </span>
                    <span className="text-[10px] text-slate-400">· {msg.timestamp}</span>
                    {!isUser && msg.source && msg.source !== 'error' && (
                      <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-800/40 inline-flex items-center gap-1">
                        {msg.source === 'gemini-2.5-flash' ? (
                          <>
                            <Globe className="w-3 h-3 text-sky-400" />
                            <span>Gemini 2.5 Flash · Search Grounded · Streaming</span>
                          </>
                        ) : msg.source === 'developer-profile' ? (
                          <span>Creator Profile</span>
                        ) : (
                          <span>Campus Policy RAG</span>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3.5 text-sm shadow-md ${
                      isUser
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-tr-none'
                        : 'bg-slate-900/90 border border-slate-800/90 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    ) : (
                      <>
                        <div className="prose prose-invert max-w-none">
                          {renderMarkdown(msg.content)}
                        </div>

                        {/* Google Search Grounding Sources */}
                        {msg.groundingSources && msg.groundingSources.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-slate-800/90">
                            <div className="text-[11px] font-semibold text-sky-400 flex items-center gap-1.5 mb-2">
                              <Globe className="w-3.5 h-3.5 text-sky-400" />
                              <span>Live Google Search Grounded Sources:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {msg.groundingSources.map((source, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={source.uri}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-300 bg-slate-950/80 hover:bg-slate-800 hover:text-white px-2.5 py-1 rounded-lg border border-slate-700/60 hover:border-sky-500/50 transition-all max-w-xs shadow-sm"
                                  title={source.title}
                                >
                                  <ExternalLink className="w-3 h-3 text-sky-400 shrink-0" />
                                  <span className="truncate">{source.title}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Assistant Message Actions Toolbar */}
                  {!isUser && (
                    <div className="flex items-center gap-2 mt-1.5 px-1">
                      <button
                        onClick={() => handleCopy(msg.content, msg.id)}
                        className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
                        title="Copy Response"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[11px]">Copy</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleSpeak(msg.content, msg.id)}
                        className="text-xs text-slate-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                        title="Read aloud"
                      >
                        {speakingId === msg.id ? (
                          <>
                            <VolumeX className="w-3 h-3 text-indigo-400 animate-pulse" />
                            <span className="text-indigo-400 text-[11px]">Stop audio</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3" />
                            <span className="text-[11px]">Listen</span>
                          </>
                        )}
                      </button>

                      {/* Escalate to Ticket Redressal */}
                      <button
                        onClick={() => {
                          const subjectCandidate = msg.content.slice(0, 50).replace(/[#*`-]/g, '').trim() || "Student Query Follow-up";
                          onEscalateToTicket(
                            `Grievance: ${subjectCandidate}`,
                            `Regarding inquiry response:\n\n${msg.content.slice(0, 300)}...`,
                            msg.category || selectedCategory
                          );
                        }}
                        className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors ml-2 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-800/40"
                        title="Create an official administrative grievance ticket"
                      >
                        <TicketPlus className="w-3 h-3" />
                        <span className="text-[11px]">Raise Ticket for This</span>
                      </button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 p-0.5 shrink-0 flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3 items-center text-slate-400 text-xs py-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center animate-pulse">
                <Bot className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                <span>CampusAI is reviewing college policy databases...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-800/90 bg-slate-900/70 p-3 sm:p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-end gap-2"
          >
            <div className="relative flex-1">
              <textarea
                ref={inputRef}
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={
                  isOdia
                    ? "କଲେଜ ସମ୍ବନ୍ଧୀୟ ଯେକୌଣସି ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ (ଉଦାହରଣ: ୭୫% ଉପସ୍ଥାନ ନିୟମ, ପ୍ରେରଣା ସ୍କଲାରସିପ୍, SBI କଲେକ୍ଟ, ହଷ୍ଟେଲ ଲିଭ୍ ପାସ୍)..."
                    : `Ask any college question (e.g., "75% attendance rule", "How to pay via SBI Collect", "Hostel leave pass")...`
                }
                rows={2}
                className="w-full resize-none rounded-xl bg-slate-950/90 border border-slate-800 px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 pr-10"
              />

              {/* Mic Voice Input Button */}
              <button
                type="button"
                onClick={toggleSpeechRecognition}
                className={`absolute right-2.5 bottom-3 p-1.5 rounded-lg transition-colors ${
                  isListening 
                    ? 'bg-rose-500 text-white animate-pulse' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title={isListening ? "Listening... click to stop" : "Voice Input (Speech-to-Text)"}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading || !inputQuery.trim()}
              className="h-11 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm flex items-center justify-center gap-1.5 transition-all shadow-md shadow-indigo-600/30"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">{isOdia ? 'ପଚାରନ୍ତୁ' : 'Ask AI'}</span>
            </button>
          </form>

          {/* Bottom helper prompt chips */}
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 truncate">
              <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
              <span className="truncate">
                Try: <em>"Who created this project?"</em> · <em>"Calculate percentage for 8.5 CGPA"</em>
              </span>
            </div>
            <div className="shrink-0 text-slate-400">
              Shift + Enter for new line
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
