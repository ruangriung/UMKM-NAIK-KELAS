export type Chapter = {
  id: string;
  title: string;
  description: string;
  content: string;
  practicalSteps: string[];
  caseStudy: {
    title: string;
    scenario: string;
    solution: string;
    result: string;
  };
  template: {
    title: string;
    content: string;
  };
  checklist: string[];
  proTip?: string;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};
