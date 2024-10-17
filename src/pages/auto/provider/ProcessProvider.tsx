import { createContext, useContext, useState, ReactNode } from 'react';

// 타입 정의
export type ProcessState = 'initial' | 'progress' | 'final';
type ProcessContextType = {
  processState: ProcessState;
  setProcessState: (state: ProcessState) => void;
};

// Context 생성
const ProcessContext = createContext<ProcessContextType | undefined>(undefined);

export const useProcessContext = () => {
  const context = useContext(ProcessContext);
  if (!context) {
    throw new Error('useProcessContext must be used within a ProcessProvider');
  }
  return context;
};

export const ProcessProvider = ({ children }: { children: ReactNode }) => {
  const [processState, setProcessState] = useState<ProcessState>('initial');

  return (
    <ProcessContext.Provider value={{ processState, setProcessState }}>
      {children}
    </ProcessContext.Provider>
  );
};
