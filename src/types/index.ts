export interface GroundingSource {
  title: string;
  uri: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  source?: 'gemini-2.5-flash' | 'developer-profile' | 'error';
  category?: string;
  groundingSources?: GroundingSource[];
}

export interface SupportTicket {
  id: string;
  studentName: string;
  regNo: string;
  department: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  subject: string;
  description: string;
  status: 'Submitted' | 'Under Review' | 'In Progress' | 'Resolved';
  createdAt: string;
  assignedTo: string;
  resolutionNotes?: string;
}

export interface FAQItem {
  id: string;
  category: 'Academics' | 'Examinations' | 'Hostel & Mess' | 'Fees & Accounts' | 'Placements' | 'Scholarships';
  question: string;
  answer: string;
  officialRef?: string;
  officeLocation?: string;
  contactPerson?: string;
}

export interface CampusTelemetry {
  totalQueriesHandled: number;
  activeTicketsCount: number;
  resolvedTicketsCount: number;
  averageResolutionHours: number;
  studentSatisfactionRate: number;
  developerInfo: {
    name: string;
    regNo: string;
    project: string;
  };
}

export interface CampusProblemSolution {
  id: string;
  titleEn: string;
  titleOr: string;
  category: 'Academics' | 'Exams & Results' | 'Certificates & Documents' | 'Accounts & Fees' | 'Hostel & Mess' | 'Scholarships' | 'Placements & NOC' | 'Discipline & Security';
  problemDescEn: string;
  problemDescOr: string;
  solutionStepsEn: string[];
  solutionStepsOr: string[];
  requiredDocs: string[];
  officeLocation: string;
  timeline: string;
  feeRequired?: string;
  applicationTemplate: string;
}

export type LanguageMode = 'en' | 'or';

export type ActiveTab = 'chat' | 'problems' | 'tickets' | 'utilities' | 'knowledge' | 'analytics' | 'project-specs';
