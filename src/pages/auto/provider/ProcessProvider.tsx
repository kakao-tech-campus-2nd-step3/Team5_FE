import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

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
  const getInitialState = (): ProcessState => {
    const savedState = sessionStorage.getItem('processState') as ProcessState;
    return savedState || 'initial';
  };

  const [processState, setProcessState] =
    useState<ProcessState>(getInitialState);

  useEffect(() => {
    sessionStorage.setItem('processState', processState);
  }, [processState]);

  return (
    <ProcessContext.Provider value={{ processState, setProcessState }}>
      {children}
    </ProcessContext.Provider>
  );
};
